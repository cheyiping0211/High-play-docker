import React, { PureComponent } from "react"
import Icon from "./Icon";
class Title extends PureComponent {

    render() {
        const { children, name, className, onClick } = this.props;
        return (
            <div className={'title ' + (className ? className : '')} onClick={onClick}>
                <div className="map-title">
                    <Icon {...this.props} />
                    <span className="name">{name}</span>
                </div>
                {children}
            </div>
        )
    }
}

export default Title