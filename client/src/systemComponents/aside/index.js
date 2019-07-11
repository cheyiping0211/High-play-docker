import React,{useState} from "react";
import { Menu,Icon,Layout } from "antd";
import { withRouter } from 'react-router';
import HeaderLogoPng from "../../assets/img/headerLogo.png";
import "./style.less";

const { Sider } = Layout;

const Aside = props =>{
    const [asideList] = useState([
      {
        id:1,
        name:'banner',
        iconType:'picture'
      },
      {
        id:2,
        name:'music',
        iconType:'customer-service'
      },
      {
        id:3,
        name:'input',
        iconType:'skin'
      },
      {
        id:4,
        name:'user',
        iconType:'user'
      },
    ])

    const onMemuClick = (item) =>{
      let { history } = props;

      history.push(item.name);
    }   

    return (
        <Sider
        className="aside"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" >
           <img src={HeaderLogoPng} alt="headerLogo"/>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {
            asideList.map((item,index)=>{
              return (
                <Menu.Item key={item.id} onClick={onMemuClick.bind(this,item)}>
                  <Icon type={item.iconType}/>
                  <span>{item.name}</span>
                </Menu.Item>
              )
            })
          }
        </Menu>
      </Sider>
    )
}

export default withRouter(Aside);