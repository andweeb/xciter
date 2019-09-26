const types = {
    PRINT: 'PRINT',
    PRINT_ERR: 'PRINT_ERR',
    RUNTIME_INITIALIZED: 'RUNTIME_INITIALIZED',
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

self.importScripts('4nxci.js');

self.onmessage = (event) => {
    const data = event.data;

    if (!data) {
        return;
    }

    switch (data.action) {
        case 'FILE_UPLOADED':
            console.log(`Creating ${data.name} file...`);
            Module['FS_createDataFile']('/', data.name, data.file, true, true, true);
            console.log(`Created ${data.name} file in FS.`);
            break;

        case 'CONVERT_FILE':
            Module.callMain(['-k', `/${data.keysetName}`, `/${data.xciName}`]);
            break;

        case 'DOWNLOAD_FILE': {
            const filedata = FS.findObject(`/${data.filename}`).contents;

            const message = {
                file: filedata,
                filename: data.filename,
                action: 'DOWNLOAD_FILE',
            };

            postMessage(message, [message.file.buffer]);

            break;
        }
    }
}

