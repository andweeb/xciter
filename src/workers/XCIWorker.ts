import { Store } from 'redux';
import {
    createFile,
    convertFile,
    downloadFile,
    updateLog,
    updateStatus,
} from 'actions/files';
import strategize from 'lib/strategize';
import { FileStatus } from 'store/types';
// @ts-ignore
import WebWorker from './xci.worker';

export default class XCIWorker {
    id: string;
    store: Store;
    keyset: File;
    worker: Worker;
    filename: string | null = null;
    downloads: Array<File> = [];

    constructor(id: string, keyset: File, store: Store) {
        this.id = id;
        this.store = store;
        this.worker = new WebWorker();
        this.worker.onmessage = this.onWorkerMessage;
        this.keyset = keyset;
    }

    createKeyset = () => {
        const fileReader: FileReader = new FileReader();

        fileReader.onload = (event: ProgressEvent<FileReader>) => {
            if (event.target && event.target.result) {
                this.createFile(
                    'keyset',
                    this.keyset.name,
                    new Uint8Array(event.target.result as ArrayBuffer),
                );
            }
        };

        fileReader.readAsArrayBuffer(this.keyset);
    };

    onWorkerMessage = (event: MessageEvent) => {
        const data = event.data;

        switch (data.action) {
            case 'PRINT': {
                const { files } = this.store.getState().files;
                const file = files.find((file: File) => file.id === this.id);
                this.store.dispatch(
                    updateLog(
                        this.id,
                        data.message,
                        file ? file.status : undefined,
                    ),
                );
                break;
            }

            case 'PRINT_WARNING':
                this.store.dispatch(
                    updateLog(this.id, data.message, FileStatus.Warning),
                );
                break;

            case 'PRINT_ERROR':
                this.store.dispatch(
                    updateLog(this.id, data.message, FileStatus.Error),
                );
                break;

            case 'RUNTIME_INITIALIZED': {
                if (this.keyset) {
                    this.createKeyset();
                }

                this.store.dispatch(
                    updateLog(
                        this.id,
                        'WebAssembly runtime initialized.',
                        FileStatus.Ready,
                    ),
                );

                break;
            }

            case 'FILE_CREATED':
                this.filename = data.name;

                this.store.dispatch(
                    updateLog(
                        this.id,
                        `Created ${data.name} in virtual filesystem.`,
                        FileStatus.Ready,
                        true,
                    ),
                );

                if (data.fileType === 'xci') {
                    this.store.dispatch(convertFile(this.id));
                }

                break;

            case 'FILE_CONVERTED': {
                this.store.dispatch(
                    updateLog(this.id, `Converted ${data.name}.`),
                );

                // Trigger NSP file downloads
                data.nspNames.forEach((nspName: string) =>
                    this.store.dispatch(downloadFile(this.id, nspName)),
                );

                break;
            }

            case 'DOWNLOAD_FILE': {
                const a = window.document.createElement('a');
                a.href = window.URL.createObjectURL(
                    new Blob([data.file], { type: 'application/octet-stream' }),
                );
                a.download = data.filename;

                // Append anchor to body.
                document.body.appendChild(a);
                a.click();

                // Remove anchor from body
                document.body.removeChild(a);

                this.store.dispatch(
                    updateStatus(this.id, FileStatus.Completed),
                );

                break;
            }

            case 'WORKER_COMPLETED': {
                this.store.dispatch(
                    updateLog(this.id, `Job completed for ${this.filename}.`),
                );

                // Restrategize and kick-off conversions for files that are ready or already pending
                const { files } = this.store.getState().files;
                const [convertFiles, pendingFiles] = strategize(files);
                convertFiles.forEach(file =>
                    this.store.dispatch(createFile(file.id, file)),
                );
                pendingFiles.forEach(file =>
                    this.store.dispatch(
                        updateLog(
                            file.id,
                            'Pending on file conversions currently in progress',
                            FileStatus.Pending,
                        ),
                    ),
                );

                this.terminateWorker();
                break;
            }
        }
    };

    createFile(fileType: string, name: string, data: Uint8Array) {
        const message = {
            name,
            fileType,
            file: data,
            action: 'CREATE_FILE',
        };

        this.worker.postMessage(message, [message.file.buffer]);
    }

    buildMultiPartFile(name: string, data: Uint8Array) {
        const message = {
            name,
            file: data,
            action: 'BUILD_MULTIPART_FILE',
        };

        this.worker.postMessage(message, [message.file.buffer]);
    }

    createMultiPartFile(name: string, data: Uint8Array) {
        this.worker.postMessage({ action: 'CREATE_MULTIPART_FILE' });
    }

    convertFile() {
        this.worker.postMessage({
            id: this.id,
            filename: this.filename,
            keyset: this.keyset.name,
            action: 'CONVERT_FILE',
        });
    }

    downloadFile(nspName: string) {
        this.store.dispatch(updateLog(this.id, `Downloading ${nspName}...`));

        this.worker.postMessage({
            filename: nspName,
            action: 'DOWNLOAD_FILE',
        });
    }

    terminateWorker() {
        this.worker.terminate();
    }
}
