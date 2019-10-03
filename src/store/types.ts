export interface KeysetState {
    file: File | null;
}

export const KeysetActionTypes = {
    SET_KEYSET_FILE: 'SET_KEYSET_FILE',
};

export interface SetKeysetFileAction {
    type: typeof KeysetActionTypes.SET_KEYSET_FILE;
    file: File;
}

export type KeysetActions = SetKeysetFileAction;

export type Store = {
    keyset: KeysetState;
};
