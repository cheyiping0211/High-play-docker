import React, { Component } from "react"
import Button from "./Button"
import Select from '../common/Select'

import { cameraConfig } from "../../util/deviceUtil"


class StatisticalTitle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeDate: 0,
            date: [
                {
                    text: '日',
                    value: 'day'
                },
                {
                    text: '月',
                    value: 'mounth'
                },
                {
                    text: '年',
                    value: 'year'
                }
            ]
        }
    }
    //  =>this.change();
    //  =>bind(this);
    // hooks 纯钩子函数
    // this
    // changeActiveDate.bind(window);
    // const changeActiveDate= () =>{
    // console.log(this) ->window;
    // }
    //函数过多 不想命名
    // props a b c

    changeActiveDate(index) {
        if(index != this.state.activeDate){
            this.setState({
                activeDate:index
            })
        }
    }

    render() {
        const { changeActiveDate, state } = this;
        
        const { date, activeDate } = state;
        return (
            <div className="statistical-title">
                <div className="selection">
                    <Select name="statistical" id="statistical">
                        {
                            cameraConfig && cameraConfig.map((item, index) => {
                                return <option key={index} value={item.deviceId}>{item.deviceId}</option>

                            })
                        }
                    </Select>
                    <div className="date" onClick={this.changeDate}>
                        {
                            date && date.map((item, index) => (
                                [<span key={index} className={activeDate === index ? 'active' : ''} onClick={changeActiveDate.bind(this,index)}>{item.text}</span>, index < 2 ? '/' : '']
                            ))
                        }
                    </div>
                </div>
                <div className="data-now">
                    <Button type="primary" shape="round">实时数据</Button>
                </div>
            </div>
        )
    }
}

export default StatisticalTitle