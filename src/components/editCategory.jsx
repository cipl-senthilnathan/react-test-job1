import React,  { Component } from 'react';
import { BootstrapTable, TableHeaderColumn,InsertButton } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('categoryStore')
@observer
export default class editCategory extends Component{

 //  componentDidMount() {
 //    const { params } = this.props.match;
 //    console.log("params::",params);
 //  let category=this.props.categoryStore.category(params.id);
 //  console.log("category",category);
 // }
 handleIdChange = e => this.props.categoryStore.setId(e.target.value);
handleNameChange = e => this.props.categoryStore.setName(e.target.value);
handleStatusChange = e => this.props.categoryStore.setStatus(e.target.value);
  render(){
    const { params } = this.props.match;
    console.log("params::",params);
    let category=this.props.categoryStore.category(params.id);
    console.log("category",category);
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
              <h2  className="text-xs-center">Edit Category</h2>
              <form style={{textAlign:'center'}}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Id"
                      value={category.id}
                      onChange={event =>this.props.categoryStore.setId(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Name"
                      value={category.name}
                      onChange={event => this.props.categoryStore.setName(event.target.value)}
                    />
                  </fieldset>
                  <fieldset className="form-group">
                      <input
                        className="form-control form-control-lg"
                        type="text"
                        placeholder="Status"
                        value={category.status}
                        onChange={event =>this.props.categoryStore.setStatus(event.target.value)}
                      />
                  </fieldset>
                  <button
                  className="btn btn-success"
                  type="button"
                  onClick={() =>this.props.categoryStore.update()}
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
