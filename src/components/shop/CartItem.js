import React from 'react';
import { Image, Row, Col, Divider, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { PlusCircleOutlined, MinusCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import { deletedItemFromCart, startAddItemToCart } from '../../actions/items';
import { startLoadingModal } from '../../actions/ui';

export const CartItem = (item) => {
    
    const dispatch = useDispatch()

    const handleRemovingItem = () => {
        dispatch(startLoadingModal());
        dispatch( deletedItemFromCart(item.id) )
    }

    const handleIncreasingQuantity = () => {
        dispatch(startLoadingModal());
        dispatch ( startAddItemToCart(1, item) );
    }

    const handleReducingQuantity = () => {
        dispatch(startLoadingModal());
        dispatch ( startAddItemToCart(-1, item) );
    }

    return (
        <Row className="cart-item">
            <Col className="cart-item__del">
                
            </Col>
            <Col span={4} className="cart-item__thumb">
                <Image src={item.image} />
            </Col>
            <Col span={14} className="cart-item__details">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                
            </Col>
            <Col span={5} className="">
                <Row>
                <Col className="w-100">
                    <Button
                        icon={<DeleteOutlined />}
                        className="btn-actions-cart" 
                        onClick={handleRemovingItem}
                    />
                </Col>
                <Col className="w-100">
                    <p className="cart-item__price">$ {item.price}</p>
                </Col>
                <Col className="w-100">
                    <Button
                        disabled={item.quantity <= 1 ? true : false}
                        icon={<MinusCircleOutlined />}
                        className="btn-actions-cart"  
                        onClick={handleReducingQuantity}
                    />
                    <Button
                        icon={<PlusCircleOutlined />}
                        className="btn-actions-cart" 
                        onClick={ handleIncreasingQuantity }
                    />
                </Col>
                </Row>
            </Col>
            <Divider />
        </Row>
    )
}
