import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../../actions/items';
import { startLoading } from '../../actions/ui';
import { Skeleton, Row, Col } from 'antd';

import { CarouselScreen } from './CarouselScreen';
import { CardItem } from './CardItem';
import { ModalItem } from './ModalItem';
import { Cart } from './Cart';
import { Sort } from '../ui/Sort';


export const ShopScreen = () => {

		const dispatch = useDispatch();
		
		const { items } = useSelector(state => state.items)
		const { active } = useSelector( state => state.items );
		const { loading } = useSelector(state => state.ui)

		useEffect(() => {
			dispatch(startLoading());
			dispatch(itemsStartLoading());
	}, [dispatch])

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
								<Sort />
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
