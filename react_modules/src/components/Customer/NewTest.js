import React, { Component } from 'react';
import New1 from './New1';
import {getAllCustomers} from '../../Actions/ProjectActions';
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
 
class NewTest extends React.Component {
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
    render() {  
        var Name=this.cc();    
          return (
              <h1>{Name}  
              <New1 key={Name} Name={Name}/>
              </h1>
          )
        }
    }
    NewTest.propTypes = {
        Customers: PropTypes.object.isRequired,
        getAllCustomers: PropTypes.func.isRequired,
      };
      const mapStateToProps = (state) => ({
        Customers: state.Customers,
      });
      export default connect(
        mapStateToProps,
        { getAllCustomers }
      )(NewTest);