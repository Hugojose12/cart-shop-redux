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
                                <img src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745573/logo02_nrlugb.png" alt="Puma"/>
                                <div className="text-body">Google Home - Smart Speaker</div>
                                <div className="text-body">starting at <span className="text-price-medium">$129.00</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745369/02_cp1cfv.png" alt="Puma Backpack" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={6}>
                    <Row className="row justify-content-center align-items-center">
                        <Col span={10}>
                            <div className="from-bottom">
                                <img className="d-inline-block w-150 mb-3" src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745573/logo03_mauhca.png" alt="Motorola"/>
                                <div className="text-body">Beats Studio by Dr.Dre</div>
                                <div className="text-body">for only <span className="text-price-medium">$349.50</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745369/03_tecbid.png" alt="Chuck Taylor All Star II"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col span={14} offset={6}>
                    <Row className="row justify-content-center align-items-center">
                        <Col span={10}>
                            <div className="from-bottom">
                                <img className="d-inline-block w-150 mb-3" src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745573/logo01_bmvy0m.png" alt="Sony"/>
                                <div className="text-body">Modern Powerful Laptop</div>
                                <div className="text-body">for only <span className="text-price-medium">$1,459.99</span></div>
                                <Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
                            </div>
                        </Col>
                        <Col span={14}>
                            <img className="d-block mx-auto" src="https://res.cloudinary.com/duz7rxjxk/image/upload/v1607745369/01_oyhonl.png" alt="Moto 360" />
                        </Col>
                    </Row>		
                </Col>
            </Row>
        </Carousel>
    )
}
