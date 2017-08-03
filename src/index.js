import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';

import authStore from './stores/authStore';
import commonStore from './stores/commonStore';
import categoryStore from './stores/categoryStore';
import userStore from './stores/userStore';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import App from './components/App';
import welcome from './components/welcome';
import addCategory from './components/addCategory';
import editCategory from './components/editCategory';
import categoryPreview from './components/categoryPreview';editCategory


const stores = {
  authStore,
  categoryStore
};
const history = createBrowserHistory();

// For easier debugging
window._____APP_STATE_____ = stores;

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter  history={history} >
      <Switch>
        <Route path='/welcome' component={welcome} />
        <Route path='/app' component={App} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/addCategory' component={addCategory} />
        <Route path='/editCategory/:id' component={editCategory} />


      </Switch>
    </BrowserRouter>
</Provider>,document.getElementById('root')
)
