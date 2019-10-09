import { combineReducers } from 'redux';
import keyset from './keyset';
import files from './files';

export default combineReducers({
    keyset,
    files,
});
