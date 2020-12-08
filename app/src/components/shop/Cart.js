import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { Row, Col, Button, Spin, Empty } from 'antd';
import { ShoppingCartOutlined, LoadingOutlined } from '@ant-design/icons';

export const Cart = () => {

    const { cartOpen, loadingModal } = useSelector( state => state.ui );
    const { inCart } = useSelector( state => state.cart );

    let totalPrice = useRef(0)

    useEffect(() => {

        totalPrice.current = 0

        inCart.forEach((cur) => {
            totalPrice.current += (cur.price * cur.quantity)

            return totalPrice.current.toFixed(2)
        })
    }, [inCart])

    const RenderEmpty = () => (
        <div className="float-cart__render_empty">
          <ShoppingCartOutlined/>
          <p>Your Cart is empty.</p>
        </div>
    );

    return (
        
        <div className={`float-cart ${cartOpen && "float-cart-open"}`}>
            
            { inCart.length > 0 ? 
                <Spin 
                    indicator={ <LoadingOutlined style={{ fontSize: 24 }} spin /> }
                    spinning={loadingModal}
                >
                    <div>
                        {inCart.map( (item) => (
                            <CartItem key={item.id} {...item}/>
                        ) )}
                    </div>
                    <div className="float-cart-footer">
                        <Row>
                            <Col span={12}>
                                <p>Subtotal</p>
                            </Col>
                            <Col span={12}>
                                <p className="float-cart-footer__total">
                                    <strong>$ {totalPrice.current}</strong>
                                </p>
                            </Col>
                            <Col span={24}>
                            <Button className="" type="primary" icon={<ShoppingCartOutlined />}>Checkout</Button>
                            </Col>
                        </Row>
                    </div>
                </Spin>
            
            :   
                RenderEmpty()   
            }
        </div>
    )
}
