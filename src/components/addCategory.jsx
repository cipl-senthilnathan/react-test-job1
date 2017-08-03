import React,  { Component } from 'react';
import { BootstrapTable, TableHeaderColumn,InsertButton } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('categoryStore')
@observer
export default class addCategory extends Component{
  render(){
    const { values, errors, inProgress } = this.props.categoryStore;
    return(
      <div>
      <nav className="navbar navbar-light">
        <div className="container">
          <Link to="/" className="navbar-brand">
              React App
          </Link>
          <ul className="nav navbar-nav pull-xs-right" style={{float: 'right'}}>
            <li className="nav-item">
              <Link to={'/welcome'} className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to={'/signin'} className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="auth-page" >
        <div className="container page">
          <div className="row">
            <div className="col-md-4 offset-md-3 col-xs-12">
              <h2  className="text-xs-center">Add Category</h2>
              <form style={{textAlign:'center'}}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Id"
                      onChange={event =>this.props.categoryStore.setId(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Name"
                      onChange={event => this.props.categoryStore.setName(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Status"
                        onChange={event =>this.props.categoryStore.setStatus(event.target.value)}
                      />
                  </fieldset>
                  <button
                  className="btn btn-success"
                  type="button"
                  onClick={() =>this.props.categoryStore.save()}
                  >Save</button>
                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
