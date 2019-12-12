import React, { Component } from "react"
import Icon from "../Common/Icon"
class ModuleTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const { moduleList, changeModule, activeModule } = this.props;
        return (
            <ul className="list">
                {
                    Array.isArray(moduleList) && moduleList.length > 1 ? moduleList.map((item, index) => {
                        return <li className={`item ${item['id'] == activeModule ? 'active' : ''}`} key={index} onClick={() => changeModule(item)}>
                            <Icon {...item} />
                            <span>
                                {item.name}
                            </span>
                        </li>
                    })
                        : null
                }
            </ul>
        )
    }
}

export default ModuleTab