const types = {
    PRINT: 'PRINT',
    PRINT_ERR: 'PRINT_ERR',
    RUNTIME_INITIALIZED: 'RUNTIME_INITIALIZED',
    FILE_CREATED: 'FILE_CREATED',
};

var Module = {
    print: function(message) {
        if (message.replace(/\s/g, '').length) {
            self.postMessage({ action: types.PRINT, message });
        }
    },
    printErr: function(message) {
        if (message.replace(/\s/g, '').length) {
            self.postMessage({ action: types.PRINT_ERR, message });
        }
    },
    onRuntimeInitialized: function() {
        self.postMessage({ action: types.RUNTIME_INITIALIZED });
    },
};

const multipartFile = {
    name: '',
    data: [],
};

self.importScripts('4nxci.js');

self.onmessage = (event) => {
    const data = event.data;

    if (!data) {
        return;
    }

    switch (data.action) {
        case 'CREATE_FILE':
            console.log(`Creating multipart file...`);
            Module['FS_createDataFile']('/', data.name, data.file, true, true, true);

            console.log(`Created ${data.name} file in FS.`);
            self.postMessage({
                name: data.name,
                action: types.FILE_CREATED,
            });

            break;

        case 'BUILD_MULTIPART_FILE':
            multipartFile.name = data.name;
            multipartFile.data = multipartFile.data.concat(data.file);
            break;

        case 'CREATE_MULTIPART_FILE': {
            const { name, data } = multipartFile;

            console.log(`Creating ${name} file...`);
            Module['FS_createDataFile']('/', name, data, true, true, true);

            console.log(`Created ${multipartFile.name} file in FS.`);
            self.postMessage({
                name: multipartFile.name,
                action: types.FILE_CREATED,
            });

            break;
        }

        case 'CONVERT_FILE':
            Module.callMain(['-rk', `/${data.keysetName}`, `/${data.xciName}`]);
            break;

        case 'DOWNLOAD_FILE': {
            const message = {
                file: FS.findObject(`/${data.filename}`).contents,
                filename: data.filename,
                action: 'DOWNLOAD_FILE',
            };

            postMessage(message, [message.file.buffer]);

            break;
        }
    }
}

