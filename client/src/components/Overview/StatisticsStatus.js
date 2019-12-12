import React, {  Component } from "react"
 
class StatisticsStatus extends  Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {name:'水位状态',iconType:'',defaultStatus:'正常'},
                {name:'垃圾桶状态',iconType:'',defaultStatus:'正常'},
                {name:'井盖状态',iconType:'',defaultStatus:'正常'}
            ]
        }
    }


    render() {
        const {list } = this.state;
        const { children, name,className,onClick } = this.props;
        return (
            <div className="status">
                {
                    list&&list.map((item,index) => {

                    })
                }
            </div>
        )
    }
}

export default StatisticsStatus