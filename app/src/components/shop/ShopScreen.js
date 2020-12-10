import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../../actions/items';
import { startLoading } from '../../actions/ui';
import { Row, Col } from 'antd';

import { CarouselScreen } from './CarouselScreen';
import { CardItem } from './CardItem';
import { ModalItem } from './ModalItem';
import { Cart } from './Cart';
import { Sort } from '../ui/Sort';
import { SkeletonUi } from '../ui/SkeletonUi';
import { Filter } from '../ui/Filter';


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

			{ loading ?

				<SkeletonUi />
				
			: 	<Row>
					<Col span={4} offset={2}>
						<Filter />
					</Col>
					<Col span={16} offset={0}>
						<Row>
							<Sort />
							{ items.map( item => (	
								<CardItem key={ item.id } {...item} />
							)) }
						</Row>
					</Col>
				</Row>
			}
			{active && <ModalItem /> }

			<Cart />
        </>
    )
}
