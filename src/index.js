import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';

import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import categoryStore from './stores/categoryStore';
import userStore from './stores/userStore';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';
import welcome from './components/welcome';


const stores = {
  authStore,
  categoryStore
};

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter >
      <Switch>
        <Route path='/app' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
</Provider>,document.getElementById('root')
)
