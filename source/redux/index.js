// @packages
import { combineReducers } from 'redux';

// @scripts
import { appInfoReducer } from './app';

const appReducer = combineReducers({
    appInfo: appInfoReducer
});

/**
 * @param {Object} state - Current application state.
 * @param {Object} action - Current dispatched action.
 * @returns {Object}
 */
export const rootReducer = (state, action) =>
    appReducer(state, action);
