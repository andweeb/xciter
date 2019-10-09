import {
    FilesActions,
    FilesState,
    FileStatus,
    ADD_FILES,
    UPDATE_STATUS,
    UPDATE_LOG,
    INIT_WORKER,
    CREATE_FILE,
    CONVERT_FILE,
    DOWNLOAD_FILE,
} from 'store/types';

const initialState: FilesState = {
    files: [],
};

function applyFileUpdate(
    targetId: string,
    key: WritableKeys<File>,
    value: any,
    update?: (file: File) => any,
) {
    return (file: File) => {
        if (file.id !== targetId) {
            return file;
        }

        // Ensure custom non-readonly file properties are carried over
        const fileKeys: Array<WritableKeys<File>> = Object.keys(file) as any;
        const fileToUpdate = new File([file], file.name);
        fileKeys.forEach(key => {
            fileToUpdate[key] = file[key];
        });

        // Update file properties
        fileToUpdate[key] = update ? update(file) : value;

        return fileToUpdate;
    };
}

function unionFiles(uniqueFiles: Array<File>, file: File) {
    return !uniqueFiles.some(f => f.id === file.id)
        ? [...uniqueFiles, file]
        : uniqueFiles;
}

export default function filesReducer(
    state: FilesState = initialState,
    action: FilesActions,
): FilesState {
    switch (action.type) {
        case ADD_FILES: {
            const addedFiles = [...state.files, ...action.files];

            return {
                ...state,
                files: addedFiles.reduce(unionFiles, [] as Array<File>),
            };
        }

        case UPDATE_STATUS:
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(action.id, 'status', action.status),
                ),
            };

        case UPDATE_LOG:
            const update = (file: File) =>
                action.overwrite
                    ? [
                          ...file.log.slice(0, file.log.length - 1),
                          action.message,
                      ]
                    : [...file.log, action.message];
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(action.id, 'log', action.message, update),
                ),
            };

        case INIT_WORKER: {
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(
                        action.id,
                        'status',
                        FileStatus.Initializing,
                    ),
                ),
            };
        }

        case CREATE_FILE:
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(action.id, 'status', FileStatus.Preparing),
                ),
            };

        case CONVERT_FILE:
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(action.id, 'status', FileStatus.Converting),
                ),
            };

        case DOWNLOAD_FILE:
            return {
                ...state,
                files: state.files.map(
                    applyFileUpdate(
                        action.id,
                        'status',
                        FileStatus.Downloading,
                    ),
                ),
            };

        default:
            return state;
    }
}
