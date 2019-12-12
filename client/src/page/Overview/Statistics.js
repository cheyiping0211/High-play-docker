import React, { Component } from "react"
import Title from 'components/Common/Title'

class OverviewStatistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            logList: [
                '2019/5/23 14:15:43 Screen30_192_576 显示模组通信故障',
                '2019/5/23 14:15:43 Screen30_192_576 显示模组通信故障',
                '2019/5/23 14:15:43 Screen30_192_576 显示模组通信故障'
            ],
            activeLogger: 0,
            logger: [
                { name: '报错', iconType: 'error' },
                { name: '日志', iconType: 'log' }
            ]
        }
    }
    changeLogger(index) {
        this.setState({ activeLogger: index })
    }
    componentDidMount(){
        this.timer =setInterval(() => {
            this.setState({
                date:new Date()
           })  
        }, 1000);
    }

    componentWillUnmount(){
         clearInterval(this.timer);
    }

    render() {
        const { changeLogger, state } = this;
        const { date,logList, activeLogger, logger } = state;
        return (
            <div className="overview-statistics">
                <div className="overview-chart">
                    <Title name="统计" iconType="statistics" >
                        <div className="time" >{date.toLocaleTimeString('zh-CN', { hour12: false })}</div>
                    </Title>
                    <div className="statistics">
                        <div className="status">

                        </div>
                        <div className="chart">
                        {/* <Pie></Pie> */}
                        </div>
                    </div>
                </div>
                <div className="overview-log">
                    <div className="log-title">
                        {
                            logger && logger.map((item, index) =>
                                <Title
                                    key={index}
                                    name={item.name}
                                    iconType={item.iconType}
                                    onClick={changeLogger.bind(this, index)}
                                    className={activeLogger == index ? 'active' : null}
                                />)
                        }
                    </div>
                    <div className="log-list">
                        <ul className="list">
                            {
                                logList && logList.map((item, index) => {
                                    return <li key={index} className={'item'}>
                                        <span>{item}</span>
                                    </li>
                                })
                            }

                        </ul>
                    </div>
                </div>
            </div >
        )
    }
}

export default OverviewStatistics