import React, { PureComponent } from "react"
import ModuleBulb from "./ModuleBulb"
import ModuleDesktop from "./ModuleDesktop"
import ModuleVideo from "./ModuleVideo"
import ModuleEnvironment from "./ModuleEnvironment"
import ModuleEquipmentBox from "./ModuleEquipmentBox"

class ModuleFunction extends PureComponent {

    getRightContent() {
        try {
            const { activeModule } = this.props;

            let rightContent;
            if (!activeModule)
                return null;

            switch (activeModule) {
                case 1:   //用户列表
                    rightContent = <ModuleBulb />;
                    break;
                case 2:
                    rightContent = <ModuleDesktop />;
                    break;
                case 3:   //用户列表
                    rightContent = <ModuleVideo />;
                    break;
                case 4:
                    rightContent = <ModuleEnvironment />;
                    break;
                case 5:   //用户列表
                    rightContent = <ModuleEquipmentBox />;
                    break;
            }

            return rightContent

        }
        catch (e) { }
        return null;
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.getRightContent()}
            </div>
        )
    }
}

export default ModuleFunction