import React, {Component} from 'react';
import { Link } from 'react-router-dom';




class Welcome extends Component{
  render(){
    return(
      <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
              React App
          </Link>
          <ul className="nav navbar-nav pull-xs-right" style={{float: 'right'}}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/signin'} className="nav-link">
                Sign in
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"signup"} className="nav-link">
                Sign up
              </Link>
            </li>

          </ul>
        </div>
      </nav>
      <div className="banner" style={{"text-align": 'center',
      "background-color": 'rgba(255, 191, 198, 0.95)',
      "height": '150px'}}>
        <div className="container">
          <h1 className="logo-font">
              React-Demo-App
          </h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    </div>
    )
  }
}

export default Welcome;
