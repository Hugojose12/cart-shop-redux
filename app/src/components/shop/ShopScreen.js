import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../../actions/items';
import { startLoading } from '../../actions/ui';
import { Skeleton, Card, Row, Col } from 'antd';

const { Meta } = Card;

export const ShopScreen = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoading());
        dispatch(itemsStartLoading());
    }, [dispatch])

    const {items} = useSelector(state => state.items)
    const {loading} = useSelector(state => state.ui)

    //console.log(items.map((e) => (e.title)))
    return (
        <Row>
            {loading ? 
                <Skeleton type="avatar" size="small" active>
                    <Skeleton.Image />
                </Skeleton>

            :   items.map((item) => (

                <Col span={4}>
                    <Card key={item.id}
                        hoverable
                        style={{ margin: "0 2rem" }}
                        cover={<img alt="example" src={item.image} />}
                    >
                        <Meta title={item.title} description="www.instagram.com" />
                    </Card>
                </Col>
                ))
            
            }
        </Row>
    )
}
