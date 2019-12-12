import React, { PureComponent } from "react"
import Button from "./Button"
import Icon from "../Common/Icon"
class Modal extends PureComponent {

    render() {
        const { directionList = [], cameraMove, cameraStop, presetList, setPreset, preset } = this.props;
        return (
            <div className='monitor-modal'>
                <div className="preset-list fl">
                    <div className="list">
                        {Array.isArray(presetList) && presetList.length >= 1 ? presetList.map((item, index) =>
                            <Button key={index} shape="round" type={`${preset['token'] == item['token'] ? 'primary' : ''}`} onClick={() => setPreset(item)}>{item.name}</Button>
                        )
                            : null
                        }
                    </div>
                </div>
                <div className="direction">
                    {
                        directionList.map((item, index) =>
                            <div className={item.direction + ' icon-btn'} key={index} onMouseDown={() => cameraMove(item.value)} onMouseUp={() => cameraStop()}>
                                <img src={require("../../assets/image/doubleleft.png")} alt="" />
                            </div>
                        )
                    }
                </div>
                <div className="zoom fr">
                    <div className="zoom-in icon-btn">
                        <img src={require("../../assets/image/zoomIn.png")} alt="" onMouseDown={() => cameraMove('ZOOM_IN')} onMouseUp={() => cameraStop()} />
                    </div>
                    <div className="zoom-out icon-btn">
                        <img src={require("../../assets/image/zoomOut.png")} alt="" onMouseDown={() => cameraMove('ZOOM_OUT')} onMouseUp={() => cameraStop()} />
                    </div>
                </div>
            </div >
        )
    }
}

export default Modal