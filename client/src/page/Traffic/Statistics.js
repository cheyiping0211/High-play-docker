import React, { Component } from "react"
import Title from "components/Common/Title";
import Line from "components/Dashbord/Line";

class TrafficStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {
                aaa: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 100) },
                ],
                bd: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 300) },

                ],
                casdhdf: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 500) },
                ],
            }
        }
    }

    onReload() {
        const { data } = this.state;
        this.setState({
            data: {
                aaa: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 100) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 100) },
                ],
                bd: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 300) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 300) },

                ],
                casdhdf: [
                    { time: '2019-11-29 00:00:00', value: 0 },
                    { time: '2019-11-29 01:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 02:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 03:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 04:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 05:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 06:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 07:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 08:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 09:00:00', value: Math.floor(Math.random() * 500) },
                    { time: '2019-11-29 10:00:00', value: Math.floor(Math.random() * 500) },
                ],
            }
        })
    }

    render() {
        return (
            <div className="traffic-item">
                <Title name="统计" iconType="statistics" width={24} height={22} color={"#ffffff"}>
                    {/* <StatisticalTitle /> */}
                    <div onClick={this.onReload.bind(this)} style={{ paddingRight: 200 }}>刷新</div>
                </Title>
                <div className="statistics">
                    <Line data={this.state.data} />
                </div>
            </div >
        )
    }
}

export default TrafficStatistics