import { KeysetState, KeysetActions, KeysetActionTypes } from 'store/types';

const initialState: KeysetState = {
    file: null,
};

export default function keysetReducer(
    state: KeysetState = initialState,
    action: KeysetActions,
): KeysetState {
    switch (action.type) {
        case KeysetActionTypes.SET_KEYSET_FILE:
            return {
                file: action.file,
            };
        default:
            return state;
    }
}
