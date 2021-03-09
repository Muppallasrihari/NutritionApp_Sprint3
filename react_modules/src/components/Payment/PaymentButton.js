import {Link} from  'react-router-dom';
import React, { Component } from 'react';
import { connect } from "react-redux";
import {getAllCustomers} from '../../Actions/ProjectActions';
import { PropTypes } from "prop-types";
 class PaymentButton extends Component {
  componentDidMount() {
    this.props.getAllCustomers();
   }
   cc(){
     const{Customers}=this.props.Customers;
     var name1;
     <p>
     {
       Customers.map(Customer => (
       name1=Customer.paymentIdentifier
     ))
     } 
     </p>
     return name1;
   }

  render() {
   var vv=this.cc(); 
    return(
    <React.Fragment>
    <Link to={`/payment/${vv}`} className="btn btn-lg btn-dark">
  Add Payment
    </Link>
</React.Fragment>
); 
  }
 }
PaymentButton.propTypes = {
  customers: PropTypes.object.isRequired,
  getAllCustomers: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  Customers: state.Customers,
});
export default connect(
  mapStateToProps,
  { getAllCustomers }
)(PaymentButton);
