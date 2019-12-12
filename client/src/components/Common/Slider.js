import React, { PureComponent, createRef } from "react";

class slider extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            min: 0,
            max: 100,
            step: 10
        }
        this.sliderRef = createRef();
    }

    onChangeSliderValue(type) {
        const { current } = this.sliderRef;
        const { value = 0, min = 0, max = 100 } = current;
        let numberValue =Number(value);
        if (type == 'add') numberValue = numberValue < max ? (10 + numberValue) : numberValue;
        if (type == 'sub') numberValue = numberValue > min ? (-10 + numberValue) : numberValue;

            this.setState({
                value: numberValue
            })
    }

    render() {
        const { value } = this.state
        return (
            <div className="slider" >
                <div className="slider-title">亮度</div>
                <div className="slider-body">
                    <input
                        type="range"
                        ref={this.sliderRef}
                        id="slider"
                        step="10"
                        max="100"
                        min="0"
                        style={{ backgroundSize: `${value}% 100%` }}
                        className="ne-range"
                        value={value}
                        onChange={this.onChangeSliderValue.bind(this, 'range')}
                    />
                </div>
                <div className="slider-num">
                    <input className="num" type="text" value={value} onChange={this.onChangeTextValue} />
                    <div className="change" >
                        <div className="add" onClick={this.onChangeSliderValue.bind(this, 'add')}></div>
                        <div className="sub" onClick={this.onChangeSliderValue.bind(this, 'sub')}></div>
                    </div>
                </div>
                <div className="set-up">

                </div>
            </div>
        )
    }
}

export default slider