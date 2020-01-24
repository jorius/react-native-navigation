// @constants
export const SET_APP_TITLE = 'SET_APP_TITLE';

export const setAppTitle = (title) =>
    ({
        type: SET_APP_TITLE,
        payload: title
    });
