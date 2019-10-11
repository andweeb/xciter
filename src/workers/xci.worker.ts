declare global {
    interface Window {
        FS: any;
        Module: any;
    }
}

const types = {
    PRINT: 'PRINT',
    PRINT_ERR: 'PRINT_ERR',
    RUNTIME_INITIALIZED: 'RUNTIME_INITIALIZED',
    FILE_CREATED: 'FILE_CREATED',
    FILE_CONVERTED: 'FILE_CONVERTED',
    NSP_NAME_RETRIEVED: 'NSP_NAME_RETRIEVED',
    WORKER_COMPLETED: 'WORKER_COMPLETED',
};

const nspNames: Array<string> = [];

self.Module = {
    onRuntimeInitialized: function() {
        self.postMessage({ action: types.RUNTIME_INITIALIZED });
    },
    print: function(message: string) {
        const nspRegex = new RegExp(/(?:Game NSP|Update NSP:) \d: (.+\.nsp)/);

        if (nspRegex.test(message)) {
            const [, nspName] = nspRegex.exec(message) || [];
            nspNames.push(nspName);
        }

        if (message.replace(/\s/g, '').length) {
            self.postMessage({ action: types.PRINT, message });
        }
    },
    printErr: function(message: string) {
        if (message.replace(/\s/g, '').length) {
            self.postMessage({ action: types.PRINT_ERR, message });
        }
    },
};

// Import emscripten glue code
self.importScripts('4nxci.js');

const multipartFile = {
    name: '',
    data: [],
};

self.onmessage = (event: MessageEvent) => {
    const data = event.data;

    switch (data.action) {
        case 'CREATE_FILE': {
            if (self.FS.findObject(`/${data.name}`)) {
                return;
            }

            const message = 'Creating file in virtual filesystem...';
            self.postMessage({ action: types.PRINT, message });

            self.Module['FS_createDataFile'](
                '/',
                data.name,
                data.file,
                true,
                true,
                true,
            );

            self.postMessage({
                name: data.name,
                fileType: data.fileType,
                action: types.FILE_CREATED,
            });

            break;
        }

        case 'CREATE_MULTIPART_FILE': {
            const { name, data } = multipartFile;

            const startMessage =
                'Creating multi-part file in virtual filesystem...';
            self.postMessage({ action: types.PRINT, message: startMessage });

            self.Module['FS_createDataFile']('/', name, data, true, true, true);

            const doneMessage = `Created ${multipartFile.name} in virtual filesystem.`;
            self.postMessage({ action: types.PRINT, message: doneMessage });

            self.postMessage({
                name: multipartFile.name,
                action: types.FILE_CREATED,
            });

            break;
        }

        case 'BUILD_MULTIPART_FILE':
            if (!multipartFile.name) {
                multipartFile.name = data.name;
            }

            multipartFile.data = multipartFile.data.concat(data.file);

            break;

        case 'CONVERT_FILE':
            self.Module.callMain([
                '-rk',
                `/${data.keyset}`,
                `/${data.filename}`,
            ]);

            self.postMessage({
                name: data.filename,
                action: types.FILE_CONVERTED,
                nspNames: nspNames,
            });

            break;

        case 'DOWNLOAD_FILE': {
            const message = {
                file: self.FS.findObject(`/${data.filename}`).contents,
                filename: data.filename,
                action: 'DOWNLOAD_FILE',
            };

            self.postMessage(message, [message.file.buffer]);

            const index = nspNames.indexOf(data.filename);
            if (index !== -1) {
                nspNames.splice(index, 1);
            }

            if (!nspNames.length) {
                self.postMessage({
                    action: types.WORKER_COMPLETED,
                });
            }

            break;
        }
    }
};

export {};
