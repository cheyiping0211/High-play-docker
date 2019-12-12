import React, { PureComponent } from "react"
import Title from "components/Common/Title"
import Content from "components/Common/Content"
import Map from "components/Common/Map"
import { trafficMapConfig } from "util/mapUtil"

class TrafficMap extends PureComponent {

    render() {
        const { cameraList, cameraDetails, cameraId } = this.props;
        return (
            <div className="traffic-item">
                <Title name="地图" iconType="map"></Title>
                <Content>
                    <div style={{ position: 'relative', width: 960, height: 474 }}>
                        < Map dataList={cameraList} {...trafficMapConfig} sendDeviceId={(id) => { cameraDetails(id) }} deviceId={cameraId} />
                    </div>
                </Content>
            </div >
        )
    }
}

export default TrafficMap