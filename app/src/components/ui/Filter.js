import React, { useState } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { filterByPrices } from '../../actions/filter';

export const Filter = () => {

    const dispatch = useDispatch();

    const onNumberChange = (min, max) => {
        dispatch( filterByPrices(0, 25) )
    }

    const checkPrice = (rule, value) => {
        if (value > 0) {
          return Promise.resolve();
        }
    
        return Promise.reject('Price must be greater than zero!');
      };


    return(
        <Row>
            <Col span={24} className="filter_prices_links">
                <p><strong>Prices</strong></p>
                <p>Under $25</p>
                <p>$25 to $50</p>
                <p>$50 to $100</p>
                <p>$100 to $200</p>
                <p>$200 & Above</p>
                <Form
                    name="filter_prices_form_controls"
                >   
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                name="min"
                                rules={[{validator: checkPrice,},]}
                            >
                                <Input 
                                    type="number" 
                                    placeholder="$min"
                                    onChange={onNumberChange} 
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                name="max"
                                rules={[{validator: checkPrice,},]}
                            >
                                <Input 
                                    type="number" 
                                    placeholder="$max"
                                    onChange={onNumberChange}
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Go
                                </Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Col>
        </Row>
    )
}
