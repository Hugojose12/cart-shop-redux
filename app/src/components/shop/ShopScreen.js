import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../../actions/items';
import { startLoading } from '../../actions/ui';
import { Skeleton, Row, Col, Select } from 'antd';

import { CarouselScreen } from './CarouselScreen';
import { CardItem } from './CardItem';
import { ModalItem } from './ModalItem';
import { Cart } from './Cart';

const { Option } = Select;

export const ShopScreen = () => {

		const dispatch = useDispatch();
		
		const {items} = useSelector(state => state.items)
		const { active } = useSelector( state => state.items );
		const {loading} = useSelector(state => state.ui)

		useEffect(() => {
			dispatch(startLoading());
			dispatch(itemsStartLoading());
	}, [dispatch])


	const handleChangeSelect = () => {
		
	}

    return (
        <>
			<CarouselScreen />
			<Row>
				<Col span={16} offset={4}>
					<Row>
						
						{loading ? 
							<Skeleton type="avatar" size="small" active>
								<Skeleton.Image />
							</Skeleton>
							
							
						:   <Row>
								<Col span={12}>{items.length} Product(s) found.</Col>
								<Col span={12} className="select_sort_items">
									<Select defaultValue="0" style={{ width: 150 }} onChange={handleChangeSelect}>
										<Option value="0">Featured</Option>
										<Option value="1">Lowest to highest</Option>
										<Option value="2">Highest to lowest</Option>
									</Select>
									<span>Sort by</span>
								</Col>
								{ items.map( item => (	
									<CardItem key={ item.id } {...item} />
								)) }
							</Row>  
						}
						</Row>
				</Col>
			</Row>

			{active && <ModalItem /> }

			<Cart />
        </>
    )
}
