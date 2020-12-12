import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../actions/items';
import { startLoading } from '../actions/ui';
import { Row, Col } from 'antd';

import { Banners } from '../components/shop/Banners';
import { CardItem } from '../components/shop/CardItem';
import { ModalItem } from '../components/shop/ModalItem';
import { Cart } from '../components/shop/Cart';
import { Sort } from '../components/ui/Sort';
import { SkeletonUi } from '../components/ui/SkeletonUi';
import { AllFilters } from '../components/ui/filters/AllFilters';


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
			<Banners />

			{ loading ?

				<SkeletonUi />
				
			: 	<Row>
					<Col span={4} offset={2}>
						<AllFilters />
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
