const fileInput = document.getElementById('file-input')
const keysetInput = document.getElementById('keys-input')
const downloadButton = document.getElementById('download-button')
const restartButton = document.getElementById('restart-button')

fileInput.addEventListener('input', onFileInput);
keysetInput.addEventListener('input', onFileInput);

downloadButton.addEventListener('click', onClickDownload);
restartButton.addEventListener('click', onClickRestart);

let worker;

function initializeWorker() {
    if (worker) {
        worker.terminate();
        worker = undefined;
    }

    worker = new Worker('worker.js');

    const regexes = {
        nspFilename: new RegExp(/Creating nsp (.+\.nsp)/),
    };

    worker.onmessage = function(event) {
        const data = event.data;

        if (!data) {
            return;
        }

        switch (data.action) {
            case 'RUNTIME_INITIALIZED':
                console.log('Runtime initialized, upload files now!')
                break;

            case 'FILE_CREATED': {
                const xciName =
                    fileInput.files &&
                    fileInput.files.length &&
                    fileInput.files[0].name;

                if (data.name === xciName) {
                    callConvertFile();
                }

                break;
            }

            case 'PRINT': {
                if (regexes.nspFilename.test(data.message)) {
                    const [, nspFilename] = regexes.nspFilename.exec(data.message);

                    console.log(`NSP file is named ${nspFilename}!`);

                    worker.nspFilename = nspFilename;
                }
                break;
            }
     
            case 'PRINT_ERR':
                console.warn(data.message);
                break;
     
            case 'DOWNLOAD_FILE': {
                console.log(`Downloading file ${data.filename}...`)

                const a = window.document.createElement('a');
                a.href = window.URL.createObjectURL(
                    new Blob(
                        [ data.file ],
                        { type: 'application/octet-stream' },
                    ),
                );
                a.download = data.filename;

                // Append anchor to body.
                document.body.appendChild(a)
                a.click();

                // Remove anchor from body
                document.body.removeChild(a);

                break;
            }
        }
    }
}

initializeWorker();

// 1.5 GB -> 1,610,612,736 bytes
const MAX_CHUNK_THRESHOLD = 1610612736;

function onFileInput(event, err) {
    const files = event.target.files;
    // const targetFile = files[0];

    if (!files.length) {
        return;
    }

    const maxBytes = Math.floor(MAX_CHUNK_THRESHOLD / files.length);

    Array.from(files).forEach(targetFile => {
        const fileReader = new FileReader();
        fileReader.onerror = (err) => console.error(`Error reading file`, err);
        fileReader.onprogress = (event) => console.log(`${event.loaded} bytes transferred`);

        if (targetFile.size < maxBytes) {
            fileReader.onload = (event) =>
                createDataFile(targetFile.name, new Uint8Array(event.target.result));
            fileReader.readAsArrayBuffer(targetFile);
        } else {
            const fileChunks = [];
            let transferIndex = 0;

            for (let i = 0, index = 0; i < targetFile.size; i += maxBytes, index++) {
                const lastByte = i + maxBytes - 1;
                const chunk = targetFile.slice(i, lastByte);

                fileChunks.push(chunk);
            }

            // Start multipart file transfer
            fileReader.readAsArrayBuffer(fileChunks[transferIndex]);
            fileReader.onload = (event) => {
                createDataFile(targetFile.name, new Uint8Array(event.target.result), true);

                transferIndex = transferIndex + 1;

                // Kick off next multipart chunk file or signal to create the file
                if (fileChunks[transferIndex]) {
                    fileReader.readAsArrayBuffer(fileChunks[transferIndex]);
                } else {
                    worker.postMessage({ action: 'CREATE_MULTIPART_FILE' });
                }
            };
        }
    });
}

function createDataFile(name, data, isMultipart) {
    console.log(`Sending ${name} file to web worker...`);

    const message = {
        name,
        file: data,
        action: isMultipart ? 'BUILD_MULTIPART_FILE' : 'CREATE_FILE',
    };

    worker.postMessage(message, [message.file.buffer]);

    console.log('Sent!');
}

function onClickRestart() {
    initializeWorker();
}

function callConvertFile() {
    const keysetName = keysetInput.files[0].name;
    const xciName = fileInput.files[0].name;

    console.log('Calling main function...');
    worker.postMessage({
        xciName,
        keysetName,
        action: 'CONVERT_FILE',
    });
    console.log('Completed file conversion');
}

function onClickDownload() {
    const filename = worker.nspFilename;

    worker.postMessage({
        filename,
        action: 'DOWNLOAD_FILE',
    });
}
