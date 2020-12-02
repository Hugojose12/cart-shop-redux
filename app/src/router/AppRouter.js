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

import 'antd/dist/antd.css';

const { Header, Content } = Layout;

export const AppRouter = () => {
  return (
    <>
      <div>
        <Router>
          <Header>
            <Navbar/>
          </Header>
          <Content style={{ padding: '20px 50px' }}>
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