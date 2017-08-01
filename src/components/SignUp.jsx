import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
export default class SignUp extends React.Component {

  render(){
    const { values, errors, inProgress } = this.props.authStore;
    return(
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-4 offset-md-3 col-xs-12">
              <h2  className="text-xs-center">Sign Up </h2>
              <p className="text-xs-center">
                <Link to={'/signin'}>
                  Have an account?
                </Link>
              </p>
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      onChange={event =>this.props.authStore.setUsername(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      onChange={event => this.props.authStore.setEmail(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        onChange={event =>this.props.authStore.setPassword(event.target.value)}
                      />
                  </fieldset>
                  <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() =>this.props.authStore.register()}
                  >Sing Up</button>
                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}
