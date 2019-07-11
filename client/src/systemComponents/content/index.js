import React,{useEffect} from "react";
import { withRouter } from 'react-router';
import { Layout } from "antd";
import { Route }from 'react-router-dom';
import BannerTable from "../bannerTable";
import MusicTable from "../musicTable";
import Input from "../input";
import UserTable from "../userTable";
import "./style.less"
const { Content } = Layout;

const Contents = props =>{

    return (
        <Content className="content">
             <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
             　 <Route exact path="/banner" component={BannerTable} />
             　 <Route exact path="/music" component={MusicTable} />
             　 <Route exact path="/input" component={Input} />
             　 <Route exact path="/user" component={UserTable} />
             </div>
        </Content>
    )
}

export default withRouter(Contents);