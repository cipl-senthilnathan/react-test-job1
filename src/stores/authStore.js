import React from 'react';
import { observable, action } from 'mobx';
 import { Redirect } from 'react-router-dom';
// import { hashHistory } from 'react-router-dom';
// import {withRouter} from "react-router-dom";

import userStore from './userStore';
import commonStore from './commonStore';


class AuthStore {
  @observable inProgress = false;
  @observable errors = undefined;

  @observable values = {
    username: '',
    email: '',
    password: '',
  };

  @action setUsername(username) {
    this.values.username = username;
  }

  @action setEmail(email) {
    this.values.email = email;
  }

  @action setPassword(password) {
    this.values.password = password;
  }

  @action reset() {
    this.values.username = '';
    this.values.email = '';
    this.values.password = '';
  }

  @action login() {
    this.inProgress = true;
    this.errors = undefined;
    return agent.Auth.login(this.values.email, this.values.password)
      .then(({ user }) => commonStore.setToken(user.token))
      .then(() => userStore.pullUser())
      .then(() => hashHistory.replace('/'))
      .catch(action((err) => {
        this.errors = err.response && err.response.body && err.response.body.errors;
        throw err;
      }))
      .finally(action(() => { this.inProgress = false; }));
  }

  @action register() {
    this.inProgress = true;
    this.errors = undefined;
    console.log("Username::", this.values);
    let password=this.values.password;
    let id=Math.floor(1000 + Math.random() * 9000);
    var user={"user":{"id":id,"email": this.values.email,password,"token":'abcd'}}
    commonStore.setToken(user.token)
    userStore.pullUser();
    const PRIVATE_URL='/app';

    // browserHistory.replace('/app');
    // history.push('/app');
    this.values.history.push('/app');
    console.log("Before return");
    return <Redirect to={ PRIVATE_URL } />;
  }

  @action logout() {
    commonStore.setToken(undefined);
    userStore.forgetUser();
    hashHistory.replace('/');
  }
}

export default new AuthStore();
