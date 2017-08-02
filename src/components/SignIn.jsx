import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignIn extends Component{
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    }
  }
  signIn(){
    console.log("state::", this.state);
  }
  render(){
    return(
      <div className="auth-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-4 offset-md-3 col-xs-12">
              <h2  className="text-xs-center">Sign In </h2>
              <p className="text-xs-center">
                <Link to={"signup"}>
                  Need an account?
                </Link>
              </p>
              <form>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      onChange={event =>this.setState({email:event.target.value})}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="password"
                        placeholder="Password"
                        onChange={event =>this.setState({password:event.target.value})}
                      />
                  </fieldset>
                  <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() =>this.signIn()}
                  >Sing In</button>
                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default SignIn;
