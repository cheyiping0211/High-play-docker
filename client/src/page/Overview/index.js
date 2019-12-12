import React, { Component } from "react"
import OverviewStatistics from "./Statistics"
import OverviewMap from "./Map"
import OverviewOperate from "./Operate"

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deviceId: '',
        }
        this.onDeviceDetails = this.onDeviceDetails.bind(this)
    }

    onDeviceDetails(deviceId) {
        console.log(deviceId);
        this.setState({ deviceId })
    }

    render() {
        return (
            <div className="overview">
                <OverviewStatistics />
                <OverviewMap {...this.state} deviceDetails={this.onDeviceDetails} />
                <OverviewOperate {...this.state} />
            </div>
        )
    }
}

export default Overview 