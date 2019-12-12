import React, { PureComponent } from "react"

class Content extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { children } = this.props;

        return (
            <div  style={{ height: 474,backgroundColor:'#273037' }}>
                {children}
            </div>
        )
    }
}

export default Content