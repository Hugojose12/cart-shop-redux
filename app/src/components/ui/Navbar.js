import React, {useState, useEffect} from 'react';
import { Menu } from 'antd';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Navbar = () => {

    const { inCart } = useSelector( state => state.cart );
    const [itemsInCart, setitemsInCart] = useState(0)

    useEffect(() => {
        if(inCart.length > 0) {
            const QuantityItems = inCart.map(current => current.quantity).reduce((acc, cur) => acc += cur)
            setitemsInCart(QuantityItems)
        }
        
    }, [inCart])

    return (
        <div>
            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="alipay">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        Shop Redux
                    </a>
                </Menu.Item>
                <Menu.Item className="li-cart-context" style={{float: 'right'}} key='cart' icon={<ShoppingCartOutlined />}>
                    <strong className="cart-items-total">{itemsInCart}</strong>  
                </Menu.Item>
            </Menu>
        </div>
    )
}
