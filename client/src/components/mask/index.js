import React, { Component } from 'react';
import   './style.less';

class Mask extends Component {

    render() {
        const { dismiss, isActive } = this.props;

        return <button className="root" onClick={dismiss} />;
    }
}

export default Mask;
