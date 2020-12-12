import React from 'react'
import { Col, Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { startLoading } from '../../actions/ui';
import { sortItemsBy } from '../../actions/sort';

const { Option } = Select;

export const Sort = () => {

    const {items} = useSelector(state => state.items)

    const dispatch = useDispatch(); 

    const handleChangeSelect = (sort) => {
		dispatch(startLoading());
		dispatch(sortItemsBy(sort))
    }
    
    return (
        <>
            <Col span={12} className="show_total_items">
                {items.length} Product(s) found.
            </Col>
            <Col span={12} className="select_sort_items">
                <Select 
                    style={{ width: 150 }} 
                    onChange={e => handleChangeSelect(e)}
                    defaultValue="Featured"
                >
                    <Option value="Featured">Featured</Option>
                    <Option value="Lowest to highest">Lowest to highest</Option>
                    <Option value="Highest to lowest">Highest to lowest</Option>
                </Select>
                <p>Sort by</p>
            </Col>           
        </>
    )
}
