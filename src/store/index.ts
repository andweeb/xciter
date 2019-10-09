import { applyMiddleware, compose, createStore } from 'redux';
import webWorkerMiddleware from 'middlewares/web-worker';
import rootReducer from 'reducers';

// @ts-ignore
const composeEnhancers = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (initialState: object, options: object) =>
    createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(webWorkerMiddleware)),
    );
