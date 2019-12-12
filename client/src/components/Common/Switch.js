import React, { PureComponent } from "react";

class Switch extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
        }
    }

    onChangeSwitch() {
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render() {
        return (
            <div className="switch">
                <div className="switch-title">
                    开关
                </div>
                <div className="switch-con" onClick={this.onChangeSwitch.bind(this)}>
                    {
                        this.state.isChecked ?
                            <input id="checked_2" type="checkbox" className="switch_item" /> :
                            <input id="checked_2" type="checkbox" className="switch_item" />
                    }
                    <label htmlFor="checked_2"></label>
                </div>
            </div>

        )
    }
}

export default Switch