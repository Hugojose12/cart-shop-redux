import React, {useState, useEffect} from 'react';
import { Menu } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { OpenCart, CloseCart } from '../../actions/ui';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Navbar = () => {

    const dispatch = useDispatch();

    const { inCart } = useSelector( state => state.cart );
    const [itemsInCart, setitemsInCart] = useState(0);
    const { cartOpen } = useSelector( state => state.ui );

    const handleCartOpen = () => {
        !cartOpen ? dispatch(OpenCart()) : dispatch(CloseCart())
    }

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
                <Menu.Item 
                className="li-cart-context" 
                style={{float: 'right'}} 
                key='cart' 
                icon={<ShoppingCartOutlined />}
                onClick={handleCartOpen}
                >
                    <strong className="cart-items-total">{itemsInCart}</strong>  
                </Menu.Item>
            </Menu>
        </div>
    )
}
