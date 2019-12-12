import React, { Component } from 'react'
import Title from 'components/Common/Title'
import ModuleTab from 'components/Overview/ModuleTab'
import ModuleFunction from 'components/Overview/ModuleFunction'
import { moduleList } from '../../util/overViewUtil'

class OverviewOperate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: true,
            width: 584,
            activeModule: 1,

        }
        this.closeDrawer = this.closeDrawer.bind(this)
        this.onChangeModule = this.onChangeModule.bind(this)
    }

    closeDrawer() {
        this.setState({
            isActive: !this.state.isActive
        })
    }

    onChangeModule(item) {
        this.setState({ activeModule: item['id'] });
    }

    render() {
        const { isActive, width, activeModule } = this.state;

        return (
            <div className={`operate ${isActive ? 'active' : ''}`} style={{ width: 584, right: isActive ? 0 : -width }}>
                <div className="content">
                    <Title name="X" />
                    <div className="details">
                        <div className="light-pole">
                            <div className="light-img">
                                <div className="control">
                                    <ModuleTab moduleList={moduleList} activeModule={activeModule} changeModule={this.onChangeModule} />
                                </div>
                            </div>
                            <div className="light-list">
                            </div>
                        </div>
                        <div className="light-control">
                            <ModuleFunction activeModule={activeModule} />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default OverviewOperate