import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Contact from './Contact';
import Navbar from './Navbar';
function RouterConfig() {
  return (
    <div>
      <Router>
          <Navbar/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/contact' component={Contact}/>
              <Route path='/product' component={Product} />
          </Switch>
      </Router>
    </div>
  );
}

export default RouterConfig;
