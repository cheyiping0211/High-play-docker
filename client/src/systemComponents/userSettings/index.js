import React from "react";
import { Tabs, Icon, Modal } from 'antd';
import Skin from "../skin"
const { TabPane } = Tabs;

const UserSettings = props => {

    return (
        <div>
            <Modal visible={true} width="800px" style={{minHeight:"500px"}}>
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab={<span><Icon type="heart" />I like</span>} key={1}>
                    </TabPane>
                    <TabPane tab={<span><Icon type="skin" />Skin</span>} key={2}>
                        <Skin/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="user" />User</span>} key={3}>

                    </TabPane>
                </Tabs>

            </Modal>

        </div>
    )
}

export default UserSettings;