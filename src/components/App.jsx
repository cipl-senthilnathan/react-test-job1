import React,  { Component } from 'react';
import { BootstrapTable, TableHeaderColumn,InsertButton } from 'react-bootstrap-table';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory';
import categoryPreview from './categoryPreview';

const history = createBrowserHistory();

@inject('categoryStore')
@observer
export default class App extends Component{
  handleDelete=(id) => {
    alert("Are Sure want to delete!");
    console.log("id",id);
    this.props.categoryStore.deleteCategory(id);
  };

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
      <div className="form-group">
       <Link to={'/addCategory'} className="btn btn-success"  style={{marginLeft:'220px'}}>
       <span className="glyphicon glyphicon-plus"/>     New
       </Link>
     </div>
      <div className="container">
        <div className="row">
            <table className="table table-bordered">
              <thead className="thead-inverse">
                <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
              </thead>
            <tbody>{
             values.map((category,index ) => {
                           return (
                          <tr key={index}>
                          <td key={category.id}>{category.id}</td>
                          <td>{category.name}</td>
                          <td>{category.status}</td>
                          <td>  <Link to={`editCategory/${category.id}`} className="btn btn-info">
                              <span className="glyphicon glyphicon-pencil"/> Edit
                            </Link>
                            <button className="btn btn-danger" style={{marginLeft:'5px'}}
                              onClick={() =>this.handleDelete(category.id)}>
                                <span className="glyphicon glyphicon-trash"/> Delete
                              </button>
                          </td>


                          </tr>

                          );
                         })
                       }
              </tbody>
            </table>
          </div>
        </div>
      </div>

    );
  }
}
