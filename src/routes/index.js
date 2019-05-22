import React from 'react';
import {HashRouter,Route, Switch,Redirect} from 'react-router-dom';
import App from '../App'
import Home from '../views/home';
import Login from '../views/login'
import Detail from '../views/detail'
import About from '../views/about'
const BasicRoute = () => (
    <HashRouter>
        <App>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" render={() =>
            <Home>
              <Switch> 
             <Route path="/detail" component={Detail}/>
             <Route path="/about" component={About}/>
             <Redirect to="/detail"/>
             </Switch>
          </Home>}
          >
          </Route>
        </Switch>
        </App>
    </HashRouter>
);


export default BasicRoute;