import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Card,
    message,
    Button
} from "antd";
import "./style.less";

const Skin = props => {
    const [initialValue] = useState({
        '@primary-color': '#1987a7',
        '@secondary-color': '#0000ff',
        '@text-color': '#000000',
        '@text-color-secondary': '#333333',
        '@heading-color': '#333333',
        '@layout-header-background': '#d43c33',
        '@btn-primary-bg': '#1890ff'
    })

    const resetTheme = () => {
        localStorage.setItem('app-theme', '{}');
        window.less
            .modifyVars(initialValue)
            .catch(error => {
                message.error(`Failed to reset theme`);
            });
    }

    const onChangeTheme = (theme) => {

        window.less
            .modifyVars(theme)
            .then(() => {
                localStorage.setItem("app-theme", JSON.stringify(theme));
            })
            .catch(error => {
                message.error(`Failed to update theme`);
            });
    }

    return (
        <div className="Skin">
            <Card title="默认" style={{ width: 300 }}>
                <Row>

                    <Col xs={12} style={{ marginTop: '10px' }}>
                        <Button
                            type="primary"
                            onClick={resetTheme}
                        >
                            Reset Theme
                            </Button>
                    </Col>
                </Row>
            </Card>
            <Card title="绿色" style={{ width: 300 }}>
                <Row>
                    <Col xs={12} style={{ marginTop: '10px' }}>
                        <Button
                            type="primary"
                            onClick={onChangeTheme.bind(this, {
                                '@primary-color': '#0aa679',
                                '@secondary-color': '#0aa679',
                                '@text-color': '#ffffff',
                                '@text-color-secondary': '#0aa679',
                                '@heading-color': '#fffff',
                                '@layout-header-background': '#0aa679',
                                '@btn-primary-bg': '#0aa679',
                                '@border-color-base': '#0aa679'
                            })}
                        >点击切换
                            </Button>
                    </Col>
                </Row>
            </Card>
            <Card title="蓝色" style={{ width: 300 }}>
                <Row>
                    <Col xs={12} style={{ marginTop: '10px' }}>
                        <Button
                            type="primary"
                            onClick={onChangeTheme.bind(this, {
                                '@primary-color': '#1987a7',
                                '@secondary-color': '#333333',
                                '@text-color': '#333333',
                                '@text-color-secondary': '#333333',
                                '@heading-color': '#756f6e',
                                '@layout-header-background': '#001529',
                                '@btn-primary-bg': '#001529'
                            })}
                        >点击切换
                            </Button>
                    </Col>
                </Row>
            </Card>
            <Card title="紫色" style={{ width: 300 }}>
                <Row>
                    <Col xs={12} style={{ marginTop: '10px' }}>
                        <Button
                            type="primary"
                            onClick={onChangeTheme.bind(this, {
                                '@primary-color': '#1987a7',
                                '@secondary-color': '#333333',
                                '@text-color': '#333333',
                                '@text-color-secondary': '#333333',
                                '@heading-color': '#756f6e',
                                '@layout-header-background': '#7546c9',
                                '@btn-primary-bg': '#7546c9'
                            })}
                        >点击切换
                            </Button>
                    </Col>
                </Row>
            </Card>
        </div>
    )
}

export default Skin;