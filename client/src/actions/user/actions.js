import { createActions } from 'redux-actions';

const prefix = 'USER';

const actionMap = {
    SIGN_IN: {
        REQUEST: null,
        RECEIVE: null,
        RESET: null
    },
};

export default createActions(actionMap, { prefix });

