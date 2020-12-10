import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { filterByPrices } from '../../actions/filter';
import { useForm } from '../../hooks/useForm';


export const Filter = () => {

    const dispatch = useDispatch();

    const [ formValues, handleInputChange ] = useForm( {
        min: '',
        max: ''
    });

    const {min, max} = formValues

    const handleFilteringPrices = (min, max) => {
        dispatch( filterByPrices(min, max) )
    }


    const checkPrice = (rule, value) => {
        if (value > 0) {
          return Promise.resolve();
        }
    
        return Promise.reject('Price must be greater than zero!');
    }

    const priceRange = [
        { min: 0, max: 25 },
        { min: 25, max: 50 },
        { min: 50, max: 100 },
        { min: 100, max: 200 },
        { min: 200, max: 999999 }
    ];

    const Comp = ({ min, max }) => (
        <p onClick={() => handleFilteringPrices(min, max)}>
          {min >= 0 ? `$${min} to` : ""} {max > 200 ? `Above` : `$${max}`}
        </p>
    );

    const onFinish = () => {
        console.log(min, max)
        dispatch( filterByPrices(min, max))
    }

    return(
        <Row>
            <Col span={24} className="filter_prices_links">
                <p><strong>Prices</strong></p>
                {priceRange.map(({min, max}) => <Comp min = {min} max={max} />)}
                <Form
                    name="filter_prices_form_controls"
                    onFinish={onFinish}
                >   
                    <Row>
                        <Col span={8}>
                            <Form.Item
                                rules={[{validator: checkPrice,},]}
                            >
                                <Input 
                                    name="min"
                                    type="number" 
                                    placeholder="$min"
                                    onChange={handleInputChange}
                                    value={min} 
                                />
                            </Form.Item>
                        </Col>
                        <Col span={8}>
                            <Form.Item
                                rules={[{validator: checkPrice,},]}
                            >
                                <Input 
                                    name="max"
                                    type="number" 
                                    placeholder="$max"
                                    onChange={handleInputChange}
                                    value={max} 
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
