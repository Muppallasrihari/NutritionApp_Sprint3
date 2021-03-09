import React, { Component } from 'react';
import {createCustomer1,getAllCustomers} from "../Actions/ProjectActions";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import Dashboard from './Dashboard';
import CustomerItem from './CustomerItem';
import _default from 'react-bootstrap/esm/CardColumns';
class SignIn extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          items: [],
          isLoaded: false,
          id:"",
          contact:"",
          password:"",
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
      }
      onChange(event){
       
        this.setState(
            {[event.target.name]:event.target.value}
        );
     
      }
  
      componentWillReceiveProps(nextProps){
          if(nextProps.errors){
              this.setState({errors:nextProps.errors})
          }
      }
  
      onSubmit(event){
          let i=0;
          event.preventDefault();
         const {items}  = this.state;
         const newProject = {
            contact:this.state.contact,
            password:this.state.password,
            id:this.state.id,
           }
         for(const item of items){
          console.log(item.name+" "+item.password+" "+this.state.password);
          if(this.state.contact===item.contact & this.state.password===item.password){
            console.log("Hellooooooo"+item.name+" "+item.id);
            this.props.createCustomer1(newProject,this.props.history);
          }
          else{
              i=i+1;
              continue;
          }
         }
         if(i===items.length){
         window.alert("Wrong Credentials");
         }
        console.log(this.state.password); 
      }
      componentDidMount() {
        fetch(`http://localhost:8080/api/customer/all`)
          .then(res => res.json())
          .then(result => {
            this.setState({
              isLoaded: true,
              items: result
            });
          });
      }
      render() {
    return (
       <div className="login">
        <br/>
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="display-4 text-center text-dark">Customer Login</h1><br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Customer ID/Phone Number" name="contact"onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={this.onChange} />
                        </div>
                        <div className="text-center">
                        <input type="submit" className="btn btn-dark btn-lg" value="LOGIN"  />
                        </div>
                    </form>
                </div>
            </div>
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
    </div> 
           
    );
    }
}
SignIn.propTypes = {
  customers: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  Customers: state.Customers, 
  errors: state.errors,
  });  
export default connect(  
    mapStateToProps,{createCustomer1})(SignIn); 
