import React, { PureComponent } from "react"
import Button from "./Button"

class Display extends PureComponent {

    render() {
        const { cameraReduction, cameraPurePicture, purePictureStatus } = this.props;
        return (
            <div className="map-btns">
                <Button type={purePictureStatus ? "primary" : ""} shape="round" onClick={() => cameraPurePicture()}>纯画面</Button>
                <Button type={"primary"} shape="round" onClick={() => cameraReduction()}>返回</Button>
            </div>
        )
    }
}

export default Display