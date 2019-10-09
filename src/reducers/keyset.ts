import { KeysetState, KeysetActions, ADD_KEYSET } from 'store/types';

const initialState: KeysetState = {
    file: null,
};

export default function keysetReducer(
    state: KeysetState = initialState,
    action: KeysetActions,
): KeysetState {
    switch (action.type) {
        case ADD_KEYSET:
            return {
                file: action.file,
            };
        default:
            return state;
    }
}
