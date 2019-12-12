import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import trafficReducer from './trafficReducer';

export default combineReducers({
    routing,
    trafficReducer,
});
