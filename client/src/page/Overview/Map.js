import React, { Component } from "react"
import Map from "components/Common/Map"
import { cameraConfig } from "util/deviceUtil"
import { overviewMapConfig } from "util/mapUtil"

class OverviewMap extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { deviceId, deviceDetails } = this.props;
        return (
            <div className="overview-map">
                <Map dataList={cameraConfig} deviceId={deviceId} sendDeviceId={(id) => { deviceDetails(id) }}  {...overviewMapConfig} />
            </div >
        )
    }
}

export default OverviewMap;