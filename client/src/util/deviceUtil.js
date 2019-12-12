/**
 * width             宽
 * height            高   
 * left              左   
 * top               上
 * bottom            下
 * right             右
 * zIndex            层级 
 * device            设备
 * sources           源 数组
 */
const cameraConfig = [
    {
        width: 480,
        height: 237,
        left: 0,
        top: 0,
        zIndex: 1,
        deviceId: '0000000000000002',
        index: 0,
        zoom: false,
    },
    {
        width: 480,
        height: 237,
        top: 0,
        right: 0,
        zIndex: 1,
        deviceId: '5555555555555555',
        index: 1,
        zoom: false,
    },
    {
        width: 480,
        height: 237,
        bottom: 0,
        left: 0,
        zIndex: 1,
        zoom: false,
        index: 2,
        deviceId: '0000000000000003',
    },
    {
        width: 480,
        height: 237,
        bottom: 0,
        right: 0,
        zIndex: 1,
        zoom: false,
        index: 3,
        deviceId: '0000000000000004',
    },
]
export { cameraConfig }

