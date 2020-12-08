import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Navbar } from '../components/ui/Navbar';
import { ShopScreen } from '../components/shop/ShopScreen';
import { Layout } from 'antd';
import { useSelector } from 'react-redux';

import 'antd/dist/antd.css';
import '../styles/styles.css'

const { Header, Content } = Layout;

export const AppRouter = () => {

  const { cartOpen } = useSelector( state => state.ui );

  return (
    <>
      <div>
        <Router>
          <Header className={`${cartOpen && 'navbar-open-cart'}`}>
            <Navbar/>
          </Header>
          <Content>
            <Switch>
              <Route exact path="/cart" component="" />
              <Route exact path="/" component={ ShopScreen } />
                  
              <Redirect to="/" />
            </Switch>
          </Content>
        </Router>
      </div>  
    </>
  )
}