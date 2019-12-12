import axios from '../util/request'
import { Map } from 'immutable'
// api地址 http://172.16.62.201:8080/api/core
const GET_PRESET = "GET_PRESET";
/**
 * name  设备移动
 * url   api/core/assets/0000000000000002/camera/pan/PAN_LEFT?_=1575254946989;
 * @param {string} cameraId 
 * @param {string} type PAN_LEFT PAN_RIGHT PAN_UP PAN_DOWN
 */
export const cameraMove = (cameraId = '', type = '') => async dispatch => {
    try {
        await axios.put(`/api/core/assets/${cameraId}/camera/pan/${type}`);
    } catch (error) {
        console.log(error);
    }
}
/**
 * name  停止设备移动
 * url   api/core/assets/0000000000000002/camera/pan/STOP?_=1575955633253
 * @param {string} cameraId 
 */
export const cameraStop = (cameraId = '') => async dispatch => {
    try {
        await axios.put(`/api/core/assets/${cameraId}/camera/pan/STOP`);

    } catch (error) {
        console.log(error);
    }
}
/**
 * name  获取设备预置点
 * url   api/core/assets/0000000000000002/camera/presets?_=1575955535220
 * @param {string} cameraId 
 */
export const getPreset = (cameraId = '') => async dispatch => {
    try {
        const presetsList = await axios.get(`/api/core/assets/${cameraId}/camera/presets`);
        if (presetsList) {
            const { data } = presetsList;
            dispatch({
                type: GET_PRESET,
                data,
            })
        }
    } catch (error) {
        console.log(error);
    }
}
/**
 * name 调整设备去指定预置点
 * url  api/core/assets/0000000000000002/camera/presets/10?_=1575955829511
 * @param {string} cameraId 
 * @param {number} token 
 */
export const cameraPreset = (cameraId = '', token = '') => async dispatch => {
    try {
        await axios.put(`/api/core/assets/${cameraId}/camera/presets/${token}`);
    } catch (error) {
        console.log(error);
    }
}

// // --------------------------Reducer-------------------------------------
const initState = Map({});
initState.set("presetList", []);

export default function trafficReducer(state = initState, action) {
    switch (action.type) {
        case GET_PRESET:
            return state.set("presetList", action.data)
            break;
        default:
            return state
    }
}