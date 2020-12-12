import React from 'react'
import { Card, Col } from 'antd';
import { ShoppingCartOutlined, HeartFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { itemActive } from '../../actions/items';
import { OpenModal } from '../../actions/ui';

export const CardItem = (item) => {

    const dispatch = useDispatch();

	const handleActivateItem = () => {
        dispatch( itemActive(item.id, item))
        dispatch( OpenModal() );
 	}

    return (
        <>
            <Col className="card_item" span={6} style={{padding: "0 15px"}}>
                <Card className="product-card" key={item.id}
                    hoverable
                    style={{ margin: "0" }}
                    cover={<img src={item.image}/>}
                    actions={[
                        <HeartFilled key="list" />,
                        <ShoppingCartOutlined key="buy" />,
                    ]}
                    onClick={handleActivateItem} 
                >
                    <div className="product-category">
                        <p>{item.category}</p>
                    </div>
                    <h3 className="product-title">{item.title}</h3>
                    <h4 className="product-price">${item.price}</h4>
                </Card>
            </Col>    
        </>
    )
}
