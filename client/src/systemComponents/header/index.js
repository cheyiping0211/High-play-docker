import React,{useState,useEffect} from "react";
import { Layout,Icon,Avatar,Modal } from "antd";
import UserSettings from "../userSettings";
import Skin from "../skin"
import "./style.less";

const { Header } = Layout;

const Headers = props => {

    useEffect(() => {
      onInitTheme();
  
    })
  
    const onInitTheme = () => {
  
      // const theme = (Object.assign({}, {}, JSON.parse(localStorage.getItem('app-theme'))));
  
      // if (JSON.stringify(theme) !== "{}") {
      //   console.log('我被执行了')
      //   window.less.modifyVars(theme)
      //     .then(() => {
      //       localStorage.setItem("app-theme", JSON.stringify(theme));
      //     })
      //     .catch(error => {
      //       message.error(`Failed to update theme`);
      //     });
      // }
    }

    const onSettings = () =>{
      console.log('asdsad');
    }

    return (
        <Header className="system-header">
            <div className="systemHeader-setting">
                    <Avatar size="large" icon="user"  onClick={onSettings}/>
            </div>
            {/* <UserSettings /> */}
        </Header>
    )
}

export default Headers;