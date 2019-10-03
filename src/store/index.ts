import { createStore } from 'redux';
import rootReducer from 'reducers';

export default (initialState: object, options: object) =>
    createStore(rootReducer, initialState);
