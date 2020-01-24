// @packages
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

// @scripts
import { rootReducer } from '../redux';

/**
 * @returns {Store}
 */
const initializeReduxStore = () => {
    const reduxLogger = createLogger();
    const middlewares = [reduxLogger, thunk];

    const state = {};

    const store = createStore(
        rootReducer,
        state,
        applyMiddleware(...middlewares)
    );

    return store;
};

export const store = initializeReduxStore();
