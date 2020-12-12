import React from 'react';
import { Row, Col, Carousel, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Banners = () => {
    return (
        <Carousel autoplay autoplaySpeed={5000} dotPosition={"right"}>
            <Row >
                <Col span={14} offset={6}>
                    <Row className="row justify-content-center align-items-center">
                        <Col span={10}>
                            <div className="from-bottom">
                                <img src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo02.png" alt="Puma"/>
                                <div className="text-body">Google Home - Smart Speaker</div>
                                <div className="text-body">starting at <span className="text-price-medium">$129.00</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/02.png" alt="Puma Backpack" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={6}>
                    <Row className="row justify-content-center align-items-center">
                        <Col span={10}>
                            <div className="from-bottom">
                                <img className="d-inline-block w-150 mb-3" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo03.png" alt="Motorola"/>
                                <div className="text-body">Beats Studio by Dr.Dre</div>
                                <div className="text-body">for only <span className="text-price-medium">$349.50</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/03.png" alt="Chuck Taylor All Star II"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={6}>
                    <Row className="row justify-content-center align-items-center">
                        <Col span={10}>
                            <div className="from-bottom">
                                <img className="d-inline-block w-150 mb-3" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo01.png" alt="Sony"/>
                                <div className="text-body">Modern Powerful Laptop</div>
                                <div className="text-body">for only <span className="text-price-medium">$1,459.99</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/01.png" alt="Moto 360" />
                        </Col>
                    </Row>		
                </Col>
            </Row>
        </Carousel>
    )
}
