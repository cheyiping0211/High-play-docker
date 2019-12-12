import React, { PureComponent } from "react"
import Title from "components/Common/Title"
import Content from "components/Common/Content"
import Display from "components/Traffic/Display"
import Monitor from "components/Traffic/Monitor"
import Modal from "components/Traffic/Modal"
import { directionList } from "util/trafficUtil"

/**
 * stateCameraId        type String   记录点击的设备
 * purePictureStatus    type Boolean  纯画面
 * onCameraId           type Func     recording stateCameraId
 * onCameraReduction    type Func     还原设备  
 * onCameraDirection    type Func     actions 设备方向
 * onCameraPurePicture  type Func     recording purePictureStatus
*/
class TrafficMonitor extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            purePictureStatus: false,
            currentPreset: {},
        }
        this.onCameraId = this.onCameraId.bind(this)
        this.onCameraReduction = this.onCameraReduction.bind(this)
        this.onCameraDirection = this.onCameraDirection.bind(this)
        this.onCameraPurePicture = this.onCameraPurePicture.bind(this)
    }

    onCameraId(cameraId) {
        const { cameraDetails } = this.props;
        this.setState({ currentPreset: {} })
        cameraDetails(cameraId);
    }

    get cameraList() {
        const { cameraList, cameraId } = this.props;
        const deviceList = [];

        cameraList.map((item, index) => {
            if (item.deviceId == cameraId) {
                item.zoom = true;
            } else {
                item.zoom = false;
            }

            item.width = item.zoom ? 960 : 480
            item.height = item.zoom ? 474 : 237
            item.zIndex = item.zoom ? 2 : 1
            deviceList.push(item)
        })
        return deviceList;
    }

    onCameraReduction() {
        const { cameraId, initialCamera } = this.props;
        if (cameraId) initialCamera()
    }

    onCameraDirection(direction) {
        const { cameraAction, cameraId } = this.props;
        if (cameraId) cameraAction(cameraId, direction)
    }

    onCameraPurePicture() {
        const { purePictureStatus } = this.state;
        this.setState({
            purePictureStatus: !purePictureStatus
        })
    }

    setPreset(cameraId, preset) {
        const { cameraPreset } = this.props;

        this.setState({
            currentPreset: preset
        })
        cameraPreset(cameraId, preset['token']);
    }

    render() {
        const { cameraList } = this;
        const { purePictureStatus, currentPreset } = this.state;
        const { cameraId, cameraStop, presetList } = this.props;
        const zoomFlag = cameraId ? true : false;

        return (
            <div className="traffic-item">
                <Title name="监控" iconType="video" width={28} height={22} color={"#ffffff"}>
                    {zoomFlag ? <Display purePictureStatus={purePictureStatus} cameraPurePicture={this.onCameraPurePicture} cameraReduction={this.onCameraReduction} /> : null}
                </Title>
                <Content>
                    <div style={{ position: 'relative', width: 960, height: 474 }}>
                        {cameraList.map((item, index) =>
                            <Monitor key={index} vedioZoom={(id) => this.onCameraId(id)}  {...item} />
                        )}
                        {
                            zoomFlag && !purePictureStatus ?
                                <Modal directionList={directionList} cameraMove={this.onCameraDirection} presetList={presetList} preset={currentPreset} setPreset={(preset) => this.setPreset(cameraId, preset)} cameraStop={() => cameraStop(cameraId)} />
                                : null
                        }
                    </div>
                </Content>
            </div>
        )
    }
}

export default TrafficMonitor