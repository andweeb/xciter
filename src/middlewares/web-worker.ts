import { AnyAction, Dispatch, Middleware, Store } from 'redux';
import {
    FilesActions,
    ADD_KEYSET,
    INIT_WORKER,
    CREATE_FILE,
    CREATE_MULTIPART_FILE,
    CONVERT_FILE,
    DOWNLOAD_FILE,
} from 'store/types';
import { updateLog, updateStatus } from 'actions/files';
import { FileStatus } from 'store/types';
import { abbreviateFileSize, MAX_CHUNK_THRESHOLD } from 'lib/bytes';
import XCIWorker from 'workers/XCIWorker';

type WebWorkerMiddleware = Middleware<Store, Function, Dispatch<AnyAction>>;

const workers = new Map();
const middleware: WebWorkerMiddleware = store => next => action => {
    const result = next(action);
    const state = store.getState() as any;

    switch (action.type) {
        case INIT_WORKER: {
            const keyset = state.keyset.file;

            store.dispatch(
                updateLog(
                    action.id,
                    'Setting up worker environment and WebAssembly runtime.',
                ),
            );

            workers.set(
                action.id,
                new XCIWorker(action.id, keyset, store as Store),
            );

            break;
        }

        case ADD_KEYSET:
            workers.forEach(worker => {
                worker.keyset = action.file;
                worker.createKeyset();
            });
            break;

        case CREATE_FILE: {
            const worker = workers.get(action.id);
            const fileReader: FileReader = new FileReader();
            let isFirstProgressMessage = true;
            fileReader.onprogress = (event: ProgressEvent<FileReader>) => {
                const shouldOverwrite = !isFirstProgressMessage;
                const fileSize = abbreviateFileSize(event.loaded);
                const message = `${fileSize} transferred to worker.`;

                store.dispatch(updateLog(action.id, message, shouldOverwrite));
                isFirstProgressMessage = false;
            };

            fileReader.onerror = (err: ProgressEvent<FileReader>) =>
                console.error(`Error reading file`, err);

            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                if (event.target && event.target.result) {
                    worker.createFile(
                        'xci',
                        action.file.name,
                        new Uint8Array(event.target.result as ArrayBuffer),
                    );
                }
            };

            fileReader.readAsArrayBuffer(action.file);

            break;
        }

        case CREATE_MULTIPART_FILE: {
            const worker = workers.get(action.id);
            const fileReader: FileReader = new FileReader();
            const fileChunks: Array<any> = [];
            let transferIndex = 0;

            // Split into multipart file chunks
            for (let i = 0, index = 0; i < action.file.size; i += MAX_CHUNK_THRESHOLD, index++) {
                const lastByte = i + MAX_CHUNK_THRESHOLD - 1;
                const chunk = action.file.slice(i, lastByte);

                fileChunks.push(chunk);
            }

            let isFirstProgressMessage = true;
            fileReader.onprogress = (event: ProgressEvent<FileReader>) => {
                const shouldOverwrite = !isFirstProgressMessage;
                const fileSize = abbreviateFileSize(event.loaded);
                const message = `${fileSize} transferred to worker.`;

                store.dispatch(updateLog(action.id, message, shouldOverwrite));
                isFirstProgressMessage = false;
            };

            fileReader.onerror = (err: ProgressEvent<FileReader>) =>
                console.error(`Error reading file`, err);

            fileReader.onload = (event: ProgressEvent<FileReader>) => {
                transferIndex = transferIndex + 1;

                // Build multipart file in the worker
                if (event.target && event.target.result) {
                    worker.buildMultiPartFile(
                        action.file.name,
                        new Uint8Array(event.target.result as ArrayBuffer),
                    );
                }

                // Kick off next multipart chunk file or signal to create the file
                if (fileChunks[transferIndex]) {
                    fileReader.readAsArrayBuffer(fileChunks[transferIndex]);
                } else {
                    worker.createMultiPartFile();
                }
            };

            // Start multipart file transfer
            fileReader.readAsArrayBuffer(fileChunks[transferIndex]);

            break;
        }

        case CONVERT_FILE: {
            const worker = workers.get(action.id);

            worker.convertFile();

            break;
        }

        case DOWNLOAD_FILE: {
            const worker = workers.get(action.id);

            worker.downloadFile(action.nspName);

            break;
        }
    }

    return result;
};

export default middleware;
