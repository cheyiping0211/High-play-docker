import React, { PureComponent } from "react"
import PropTypes from 'prop-types'

class Monitor extends PureComponent {
    static propTypes = {
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        top: PropTypes.number,
        bottom: PropTypes.number,
        left: PropTypes.number,
        right: PropTypes.number,
        zIndex: PropTypes.number.isRequired,
        deviceId: PropTypes.string.isRequired,
        vedioZoom: PropTypes.func,
    };

    constructor(props) {
        super(props)
        this.state = {
        }

        this.cameraRef = null;
        this.refCanvas = this.refCanvas.bind(this)
    }

    componentDidMount() {
        this.cameraRef && this.createCanvas(this.cameraRef)
    }

    refCanvas(ref) {
        if (!ref) return

        this.createCanvas(ref)
    }

    createCanvas(ref) {
        const { deviceId } = this.props;
        const { JSMpeg } = this && window;
        new JSMpeg.Player(`ws://172.16.62.201:8080/camera/?id=${deviceId}`, { canvas: ref });
    }

    onSendDevice(deviceId) {
        const { vedioZoom } = this.props;
        vedioZoom(deviceId);
    }

    render() {
        const { width, height, top, left, right, bottom, deviceId, zIndex } = this.props;
        return (
            <div style={{ position: 'absolute', width, height, top, left, right, bottom, zIndex, cursor: 'pointer' }} onClick={this.onSendDevice.bind(this, deviceId)}>
                <canvas ref={this.refCanvas} style={{ width: '100%', height: '100%' }} >
                </canvas>
            </div>
        )
    }
}

export default Monitor;