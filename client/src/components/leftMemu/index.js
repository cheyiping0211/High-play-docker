import React,{useState} from "react";
import { connect } from "react-redux";
import { closeDrawer } from 'actions/app';
import { Drawer } from 'antd';

const LeftMemu = props => {

    const [drawerFlag,setDrawerFlag] = useState(true); 
    
    const onCloseDrawer = () =>{
        let { closeDrawer } = props;
        setDrawerFlag(false);

        setTimeout(()=>{
            closeDrawer();
        },500)
    }

    return (
        <div>
          <Drawer
          title="Left Memu"
          placement="left"
          closable={false}
          onClose={onCloseDrawer}
          visible={drawerFlag}
        >
             <div>signIn</div>
        </Drawer>
        </div>
       )
}

const mapDispatchToProps = { closeDrawer };

export default connect(
    null,
    mapDispatchToProps
)(LeftMemu);