import { useDispatch } from 'react-redux';
import {
    FilesActions,
    FileStatus,
    ADD_FILES,
    REMOVE_FILE,
    UPDATE_STATUS,
    UPDATE_LOG,
    INIT_WORKER,
    CREATE_FILE,
    CREATE_MULTIPART_FILE,
    CONVERT_FILE,
    DOWNLOAD_FILE,
} from 'store/types';

export function addFiles(xciFiles: Array<File>): FilesActions {
    return {
        files: xciFiles,
        type: ADD_FILES,
    };
}

export function removeFile(xciFile: File): FilesActions {
    return {
        file: xciFile,
        type: REMOVE_FILE,
    };
}

export function updateStatus(id: string, status: FileStatus): FilesActions {
    return {
        id,
        status,
        type: UPDATE_STATUS,
    };
}

export function updateLog(
    id: string,
    message: string,
    overwrite?: boolean,
): FilesActions {
    return {
        id,
        message,
        overwrite,
        type: UPDATE_LOG,
    };
}

export function initWorker(id: string): FilesActions {
    return {
        id,
        type: INIT_WORKER,
    };
}

export function createFile(id: string, file: File): FilesActions {
    return {
        id,
        file,
        type: CREATE_FILE,
    };
}

export function createMultiPartFile(id: string, file: File): FilesActions {
    return {
        id,
        file,
        type: CREATE_MULTIPART_FILE,
    };
}

export function convertFile(id: string): FilesActions {
    return {
        id,
        type: CONVERT_FILE,
    };
}

export function downloadFile(id: string, nspName: string): FilesActions {
    return {
        id,
        nspName,
        type: DOWNLOAD_FILE,
    };
}
