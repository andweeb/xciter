import { AddKeysetAction, ADD_KEYSET } from 'store/types';

export function addKeyset(keyset: File): AddKeysetAction {
    return {
        file: keyset,
        type: ADD_KEYSET,
    };
}
