import React from "react";
import Mask from "../mask"
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
const spinStyles = {
    position:"fixed",
    top:'50%',
    left:'50%',
    transform:'translate(-50%,-50%)'
}

const Lodding = props =>{
   return (
    <div style={{position:'relative',width:'100%',height:'100%'}}>
    <Mask isActive={true}/>
    <Spin 
    tip="Loading..." 
    indicator={antIcon} 
    size = {"large"}
    style={spinStyles}/>
    </div>

        );
}

export default Lodding