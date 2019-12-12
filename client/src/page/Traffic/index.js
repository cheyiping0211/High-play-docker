import React, { Component } from "react"
import { connect } from "react-redux"
import { bindActionCreators } from 'redux'
import TrafficMap from "./Map"
import TrafficMonitor from "./Monitor"
import TrafficRoadCondition from "./RoadCondition"
import TrafficStatistics from "./Statistics"
import { cameraMove, cameraStop, cameraPreset, getPreset } from "reducer/trafficReducer"
import { cameraConfig } from "util/deviceUtil"
class Traffic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cameraId: '',
        }
        this.onCameraAction = this.onCameraAction.bind(this)
        this.onCameraDetails = this.onCameraDetails.bind(this)
        this.onCameraStop = this.onCameraStop.bind(this)
        this.onCameraPreset = this.onCameraPreset.bind(this)
    }

    onCameraAction(cameraId, type) {
        const { cameraMove } = this.props;
        if (cameraId && type) cameraMove(cameraId, type)
    }

    onCameraStop(cameraId) {
        const { cameraStop } = this.props;
        if (cameraId) cameraStop(cameraId)
    }

    onCameraDetails(cameraId) {
        this.setState({
            cameraId
        })
        this.getPresetData(cameraId);
    }

    getPresetData(cameraId) {
        const { getPreset } = this.props;
        if (cameraId) getPreset(cameraId);
    }

    onCameraPreset(cameraId, token) {
        const { cameraPreset } = this.props;
        cameraPreset(cameraId, token)
    }

    render() {
        const { cameraId } = this.state;
        const { presetList } = this.props;
        return (
            <div className="traffic">
                <TrafficMap cameraList={cameraConfig} cameraDetails={this.onCameraDetails} cameraId={cameraId} />
                <TrafficMonitor cameraList={cameraConfig} presetList={presetList} cameraId={cameraId} cameraPreset={this.onCameraPreset} cameraStop={this.onCameraStop} cameraAction={this.onCameraAction} cameraDetails={this.onCameraDetails} initialCamera={() => this.onCameraDetails("")} />
                <TrafficRoadCondition />
                <TrafficStatistics />
            </div>
        )
    }
}

const mapStateToProps = ({ trafficReducer }) => {
    return {
        presetList: trafficReducer.get('presetList'),
    }
}

const mapDispatchToProps = (dispatch) =>
    bindActionCreators({ cameraMove, cameraStop, cameraPreset, getPreset }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Traffic) 