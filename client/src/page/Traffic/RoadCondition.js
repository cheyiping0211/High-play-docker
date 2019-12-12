import React, { PureComponent } from "react"
import Title from "components/Common/Title"
import ToggleButton from "components/Common/Switch"
import Slider from "components/Common/Slider"

class TrafficRoadCondition extends PureComponent {

    render() {
        return (
            <div className="traffic-item">
                <Title name="交通" iconType="trafficlight"></Title>
                <div className="roadC-condition">
                    <img style={{ width: '100%', height: '100%' }} src={''} alt="" />
                    <div>
                        <ToggleButton />
                        <Slider />
                    </div>
                </div>
            </div>
        )
    }
}

export default TrafficRoadCondition