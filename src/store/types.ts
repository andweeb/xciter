export enum FileStatus {
    Waiting,
    Initializing,
    Ready,
    Preparing,
    Pending,
    Converting,
    Downloading,
    Completed,
    Warning,
    Error,
}

// Keyset actions
export const ADD_KEYSET = 'ADD_KEYSET';
// Files actions
export const ADD_FILES = 'ADD_FILES';
export const REMOVE_FILE = 'REMOVE_FILE';
export const INIT_WORKER = 'INIT_WORKER';
export const CREATE_FILE = 'CREATE_FILE';
export const CREATE_MULTIPART_FILE = 'CREATE_MULTIPART_FILE';
export const UPDATE_STATUS = 'UPDATE_STATUS';
export const UPDATE_LOG = 'UPDATE_LOG';
export const CONVERT_FILE = 'CONVERT_FILE';
export const DOWNLOAD_FILE = 'DOWNLOAD_FILE';

// Keyset state
export interface KeysetState {
    file: File | null;
}
export interface AddKeysetAction {
    type: typeof ADD_KEYSET;
    file: File;
}
export type KeysetActions = AddKeysetAction;

// Files state
export interface FilesState {
    files: Array<File>;
}
export interface AddFilesAction {
    type: typeof ADD_FILES;
    files: Array<File>;
}
export interface RemoveFileAction {
    type: typeof REMOVE_FILE;
    file: File;
}
export interface UpdateStatusAction {
    type: typeof UPDATE_STATUS;
    id: string;
    status: FileStatus;
}
export interface UpdateLogAction {
    type: typeof UPDATE_LOG;
    id: string;
    message: string;
    overwrite?: boolean;
    status?: FileStatus;
}
export interface InitWorkerAction {
    type: typeof INIT_WORKER;
    id: string;
}
export interface CreateFileAction {
    type: typeof CREATE_FILE;
    id: string;
    file: File;
}
export interface CreateMultiPartFileAction {
    type: typeof CREATE_MULTIPART_FILE;
    id: string;
    file: File;
}
export interface ConvertFileAction {
    type: typeof CONVERT_FILE;
    id: string;
}
export interface DownloadFileAction {
    type: typeof DOWNLOAD_FILE;
    id: string;
    nspName: string;
}
export type FilesActions =
    | AddFilesAction
    | RemoveFileAction
    | InitWorkerAction
    | CreateFileAction
    | CreateMultiPartFileAction
    | UpdateStatusAction
    | UpdateLogAction
    | ConvertFileAction
    | DownloadFileAction;

// Store
export type Store = {
    keyset: KeysetState;
    files: FilesState;
};
