import React, { Component } from 'react';
import CustomerItem from './CustomerItem';
import SignIn from './SignIn';
import PaymentButton from './Payment/PaymentButton';
import { connect } from "react-redux";
import {getAllCustomers} from '../Actions/ProjectActions';
import { PropTypes } from "prop-types";
import CreateWeightLogButton from './WeightLog/CreateWeightLogButton';
import CreateCaloriesLogButton from './CaloriesLog/CreateCaloriesLogButton';

class Dashboard extends Component {

  componentDidMount() {
   this.props.getAllCustomers();
  }
  cc(){
    const{Customers}=this.props.Customers;
    var name1;
    <p>
    {
     
      Customers.map(Customer => (
      name1=Customer.name
    ))} 
    </p>
    return name1;
  }
  cc1(){
    const{Customers}=this.props.Customers;
    var id1;
   for(const Customer of Customers){ 
      id1=Customer.id
  } 
    return id1;
  }
  cc2(){
    const{Customers}=this.props.Customers;
    var paymentIdentifier;
   for(const Customer of Customers){ 
    paymentIdentifier=Customer.paymentIdentifier
  } 
    return paymentIdentifier;
  }
    render() {
        var id1=this.cc1();
        var name1=this.cc();
        var payId=this.cc2();
        return (
        <div className="projects ">
            <div className="container text-center">
                <div className="row">
                  
                    <div className="col-md-12">
                        <h1 className="display-4 text-center  text-secondary">&nbsp;
                        Welcome {name1}</h1>
                        <br/>
                        &nbsp;<PaymentButton/>
                        &nbsp;&nbsp;&nbsp;&nbsp;<CreateWeightLogButton/> &nbsp;&nbsp;&nbsp;&nbsp;<CreateCaloriesLogButton/>
                        <br />
                     &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<CustomerItem key={id1,name1,payId} id1={id1} name1={name1} payId={payId}/>
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}
Dashboard.propTypes = {
    customers: PropTypes.object.isRequired,
    getAllCustomers: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    Customers: state.Customers,
  });
  export default connect(
    mapStateToProps,
    { getAllCustomers }
  )(Dashboard);
