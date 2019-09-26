const fileInput = document.getElementById('file-input')
const keysetInput = document.getElementById('keys-input')
const startButton = document.getElementById('start-button')
const downloadButton = document.getElementById('download-button')

fileInput.addEventListener('input', onFileInput);
keysetInput.addEventListener('input', onKeysetInput);

startButton.addEventListener('click', onClickStart);
downloadButton.addEventListener('click', onClickDownload);

function onKeysetInput(event) {
    const files = event.target.files;
    const targetFile = files[0];

    const fileReader = new FileReader();

    fileReader.onerror = (err) => console.error('Error reading keyset file', err);
    fileReader.onprogress = (event) => console.log(`${event.loaded} bytes transferred`);
    fileReader.onload = () => {
        createDataFile(targetFile.name, new Uint8Array(fileReader.result));
    };
    fileReader.readAsArrayBuffer(targetFile);
}

function onFileInput(event) {
    const files = event.target.files;
    const targetFile = files[0];

    const fileReader = new FileReader();

    fileReader.onerror = (err) => console.error(`Error reading XCI file`, err);
    fileReader.onprogress = (event) => console.log(`${event.loaded} bytes transferred`);
    fileReader.onload = () => {
        createDataFile(targetFile.name, new Uint8Array(fileReader.result));
    };
    fileReader.readAsArrayBuffer(targetFile);
}

function createDataFile(name, data) {
    console.log(`Creating ${name} data file...`);

    Module['FS_createDataFile'](
        '/',
        name,
        data,
        true,
        true,
        true,
    );

    console.log(`Created ${name}.`);
}

function onClickStart() {
    const keysetFilename = keysetInput.files[0].name;
    const xciFilename = fileInput.files[0].name;

    console.log('Calling main function...');
    Module.callMain(['-k', `/${keysetFilename}`, `/${xciFilename}`]);
    console.log('Completed file conversion');
}

function onClickDownload() {
    const filename = '0100b7d0022ee000.nsp';
    const file = FS.findObject(`/${filename}`).contents;

    const a = window.document.createElement('a');

    a.href = window.URL.createObjectURL(new Blob([ file ], { type: 'application/octet-stream' }));
    a.download = filename;

    // Append anchor to body.
    document.body.appendChild(a)
    a.click();

    // Remove anchor from body
    document.body.removeChild(a);
}
