// @packages
import { combineReducers } from 'redux';

// @scripts
import { SET_APP_TITLE } from './actions';
import { config } from '../../config';

/**
 * @returns {string}
 */
const titleReducer = (
    state = config.initialState.appInfo.title, action
) => {
    switch (action.type) {
        case SET_APP_TITLE:
            return action.payload;
        case 'LOGOUT':
            return 'login';
        default:
            return state;
    }
};

/**
 * @returns {string}
 */
const versionReducer = (
    state = config.initialState.appInfo.version, action
) => {
    switch (action.type) {
        default:
            return state;
    }
};

export const appInfoReducer = combineReducers({
    title: titleReducer,
    version: versionReducer
});
