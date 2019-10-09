import { Store } from 'redux';
import {
    convertFile,
    downloadFile,
    updateLog,
    updateStatus,
} from 'actions/files';
import { FileStatus } from 'store/types';
// @ts-ignore
import WebWorker from './xci.worker';

export default class XCIWorker {
    id: string;
    store: Store;
    keyset: File;
    worker: Worker;
    filename: string | null;

    constructor(id: string, keyset: File, store: Store) {
        this.id = id;
        this.store = store;
        this.worker = new WebWorker();
        this.worker.onmessage = this.onWorkerMessage;
        this.keyset = keyset;
        this.filename = null;
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
                this.store.dispatch(updateLog(this.id, data.message));
                break;
            }

            case 'PRINT_ERR':
                console.warn(data.message);
                break;

            case 'RUNTIME_INITIALIZED': {
                if (this.keyset) {
                    this.createKeyset();
                }

                this.store.dispatch(
                    updateLog(this.id, 'WebAssembly runtime initialized.'),
                );
                this.store.dispatch(updateStatus(this.id, FileStatus.Ready));

                break;
            }

            case 'FILE_CREATED':
                this.filename = data.name;

                this.store.dispatch(
                    updateLog(
                        this.id,
                        `Created ${data.name} in virtual filesystem.`,
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

            case 'WORKER_COMPLETED':
                this.store.dispatch(
                    updateLog(this.id, `Job completed for ${this.filename}.`),
                );

                this.terminateWorker();
                break;
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
