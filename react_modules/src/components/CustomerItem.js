import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import{deleteCustomer} from '../Actions/ProjectActions';
import '../../src/App.css';

 class CustomerItem extends Component {
      onDeleteClick = (id)=>{
     //   this.props.deleteCustomer(id);
     console.log(id);
     }
     
    render() {
       const{name1,id1,payId}=this.props;
        return (
            <div>
            <table className="table table-dark ">
  <thead className="">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">NAME</th>
      <th scope="col">UPDATE</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{id1}</th>
      <td >{name1}</td>
      <td>
       <Link to={`/updateCustomer/${id1}`}><button className="btn  btn-success">Update</button></Link>
    </td>
      <td>
      <button className="btn  btn-danger" onClick = {this.onDeleteClick.bind(this,id1)}>
          Delete</button></td>
      </tr>
  </tbody>
</table>
<Link to="logOut"  className="btn btn-danger btn-lg float-right">LogOut</Link>
        </div>
        )
    }
}
CustomerItem.propTypes = {
    deleteCustomer:PropTypes.func.isRequired
  };
  export default connect(null,{deleteCustomer})(CustomerItem);
