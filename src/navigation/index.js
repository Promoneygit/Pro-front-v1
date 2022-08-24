import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Price from '../screens/Price';
import Register from '../screens/Register';
import Main from '../screens/Main';
import RegisterMain from '../screens/Register/components/RegisterMain';
import Otp from '../screens/Register/components/Otp';
import Confirmation from '../screens/Confirmation';
import Gold from '../screens/Gold';
import Mobile from '../screens/Mobile';
import Type from '../screens/Type';
import Uploadphoto from '../screens/Mobile/Uploadphoto';
import { AuthContext } from '../context/auth';
import { getStore } from '../utils';


function AuthenticatedRoute ({component: Component, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => getStore('user') ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class Navigation extends Component {
  render() {
    return (
      <AuthContext.Provider>
        <Router>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/Price" component={Price} />
            <Route path="/registerMain" component={RegisterMain} />
            <Route path="/register" component={Register} />
            <Route path="/otp" component={Otp} />
            <Route path="/type" component={Type} />
            <Route path="/confirm" component={Confirmation} />
            <Route path="/gold" component={Gold}/>
            <Route path="/mobile" component={Mobile}/>
            <Route path="/uploadphoto" component={Uploadphoto}/>
            <AuthenticatedRoute exact path='/home' component={Home} />
            <Route path='*' component={Main} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    )
  }
}

export default Navigation;
