import React, { PureComponent } from "react"

class Button extends PureComponent {

    btnStyle(type, shape) {
        let style = 'button';
        if (type === 'primary') {
            style = style.concat(' ', 'primary')
        } else if (type === 'normal') {
            style = style.concat(' ', 'normal')
        };
        if (shape === 'round') {
            style = style.concat(' ', 'round')
        }
        return style;
    }

    render() {
        const { children, onClick, type, shape } = this.props;
        return (
            <button className={this.btnStyle(type, shape)} onClick={onClick}>
                <span>{children}</span>
            </button>
        )
    }
}

export default Button