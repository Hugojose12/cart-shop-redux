import React from 'react';
import { Menu } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const Navbar = () => {
    return (
        <div>
            <Menu mode="horizontal" theme="dark">
                <Menu.Item key="alipay">
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        Shop Redux
                    </a>
                </Menu.Item>
                <Menu.Item style={{float: 'right'}} key='cart' icon={<ShoppingCartOutlined />}>
                    6
                </Menu.Item>
            </Menu>
        </div>
    )
}
