import React,  { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('categoryStore')
@observer
export default class App extends Component{

  render(){
    let values = this.props.categoryStore.fullName;
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
        <div>
          <BootstrapTable data={ values }>
                  <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='date'>Product Price</TableHeaderColumn>
          </BootstrapTable>
        </div>
      </div>

    )
  }
}
