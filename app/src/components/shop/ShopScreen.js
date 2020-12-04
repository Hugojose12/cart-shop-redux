import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemsStartLoading } from '../../actions/items';
import { startLoading } from '../../actions/ui';
import { Skeleton, Row, Col, Carousel, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { CardItem } from './CardItem';
import { ModalItem } from './ModalItem';

export const ShopScreen = () => {

		const dispatch = useDispatch();
		
		const {items} = useSelector(state => state.items)
		const { active } = useSelector( state => state.items );
		const {loading} = useSelector(state => state.ui)

		useEffect(() => {
			dispatch(startLoading());
			dispatch(itemsStartLoading());
	}, [dispatch])

    return (
        <>
					<Carousel autoplay autoplaySpeed={5000} dotPosition={"right"}>
						<Row >
							<Col span={14} offset={6}>
								<Row className="row justify-content-center align-items-center">
									<Col span={10}>
										<div class="from-bottom">
											<img src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo02.png" alt="Puma"/>
											<div class="text-body">Google Home - Smart Speaker</div>
											<div class="text-body">starting at <span class="text-price-medium">$129.00</span></div>
											<Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
										</div>
									</Col>
									<Col span={14}>
										<img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/02.png" alt="Puma Backpack" />
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col span={14} offset={6}>
								<Row className="row justify-content-center align-items-center">
									<Col span={10}>
										<div class="from-bottom">
											<img class="d-inline-block w-150 mb-3" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo03.png" alt="Motorola"/>
											<div class="text-body">Beats Studio by Dr.Dre</div>
											<div class="text-body">for only <span class="text-price-medium">$349.50</span></div>
											<Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
										</div>
									</Col>
									<Col span={14}>
										<img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/03.png" alt="Chuck Taylor All Star II"/>
									</Col>
								</Row>
							</Col>
						</Row>
						<Row>
							<Col span={14} offset={6}>
								<Row className="row justify-content-center align-items-center">
									<Col span={10}>
										<div class="from-bottom">
											<img class="d-inline-block w-150 mb-3" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/logo01.png" alt="Sony"/>
											<div class="text-body">Modern Powerful Laptop</div>
											<div class="text-body">for only <span class="text-price-medium">$1,459.99</span></div>
											<Button className="scale-up" type="primary" icon={<ShoppingCartOutlined />}>Buy</Button>
										</div>
									</Col>
									<Col span={14}>
										<img className="d-block mx-auto" src="http://themes.rokaux.com/unishop/v3.2.1/template-3/img/hero-slider/01.png" alt="Moto 360" />
									</Col>
								</Row>		
							</Col>
						</Row>
					</Carousel>
					<Row>
						<Col span={16} offset={4}>
							<Row>
								{loading ? 
									<Skeleton type="avatar" size="small" active>
											<Skeleton.Image />
									</Skeleton>

								:   items.map( item => (	
										<CardItem key={ item.id } {...item} />
									))   
								}
								</Row>
						</Col>
					</Row>

					{active && <ModalItem /> }
        </>
    )
}
