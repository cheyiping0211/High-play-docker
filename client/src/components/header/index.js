import React,{useState,useEffect} from "react";
import { connect } from "react-redux";
import { toggleDrawer } from "actions/app";
import memuPng from "assets/img/memu.png";
import logoPng from "assets/img/logo.png";
import searchPng from "assets/img/search.png";
import "./style.less";

const Header = props => {

    const [counter, setCounter] = useState(0);
    const [headerShow,setHeaderShow] = useState(true);
    const [headerList] = useState([
        {
            id:0,
            name:'headerMemu',
            class:'header-memu',
            image:memuPng
        },
        {
            id:1,
            name:'headerLogo',         
            class:'header-logo',
            image:logoPng
        },
        {
            id:2,
            name:'headerSearch',         
            class:'header-search',
            image:searchPng
        },
    ])



    useEffect(() => {    
        window.addEventListener('scroll', scrollHandler);
        
        return() =>{
            window.removeEventListener('scroll',scrollHandler);
        };
      });


      const scrollHandler = (event) =>{
        let scrollTop = document.documentElement.scrollTop||document.body.scrollTop,
            flag = false;   

        if(scrollTop < counter){
             flag  = true;
        }else {
            flag = false;
        }
        setCounter(counter);
        setHeaderShow(flag);
    }

    const onHandleClick = (item) => {
        let { id,name } = item,
            { toggleDrawer } = props;

          if(id!==1){
             toggleDrawer(name)
             console.log(props)
          }
    };
    
    return ( 
        <div>
            {headerShow ? 
            <div className="header">
                    {
                        headerList.map((item,index)=>{
                        return <a key={index} className={item.class} herf="javascript:void(0)" onClick={onHandleClick.bind(this,item)}><img alt="headerImage" src={item.image}/></a>
                        })
                    }
            </div>
              :null
            }
         </div>
     )}

const mapDispatchToProps = { toggleDrawer };

export default connect(
    null,
    mapDispatchToProps
)(Header);    