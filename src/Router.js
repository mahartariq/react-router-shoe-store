import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Navbar from './Navbar';
import Addto from './Addto';
function RouterConfig() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/product' component={Product} />
              <Route path='/product/:id' component={Addto} />
              <Route path='*' component={()=><h2>ERROR 404 NOT FOUND</h2>} />
              
          </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
