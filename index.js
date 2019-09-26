const fileInput = document.getElementById('file-input')
const keysetInput = document.getElementById('keys-input')
const startButton = document.getElementById('start-button')
const downloadButton = document.getElementById('download-button')

fileInput.addEventListener('input', onFileInput);
keysetInput.addEventListener('input', onFileInput);

startButton.addEventListener('click', onClickStart);
downloadButton.addEventListener('click', onClickDownload);

const worker = new Worker('worker.js');

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

function onFileInput(event) {
    const files = event.target.files;
    const targetFile = files[0];
    const fileReader = new FileReader();

    fileReader.onerror = (err) => console.error(`Error reading file`, err);
    fileReader.onprogress = (event) => console.log(`${event.loaded} bytes transferred`);
    fileReader.onload = () => {
        createDataFile(targetFile.name, new Uint8Array(fileReader.result));
    };
    fileReader.readAsArrayBuffer(targetFile);
}

function createDataFile(name, data) {
    console.log(`Sending ${name} file to web worker...`);

    const message = {
        name,
        file: data,
        action: 'FILE_UPLOADED',
    };

    worker.postMessage(message, [message.file.buffer]);

    console.log('Sent!');
}

function onClickStart() {
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
