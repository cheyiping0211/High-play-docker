import { handleActions } from 'redux-actions';
import actions from '../actions/app';


const initialState = {
    drawer:null
};

const reducerMap = {
    [actions.toggleDrawer]: (state, { payload }) => {
        return {
            ...state,
            drawer: payload,
        };
    },

};

export default handleActions(reducerMap, initialState);
