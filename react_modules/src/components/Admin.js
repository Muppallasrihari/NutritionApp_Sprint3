import React, { Component } from 'react';
import {createCustomer1admin} from "../Actions/ProjectActions";
import { connect } from "react-redux";

class Admin extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
          name:"",
          password:"",
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
      }
      onChange(event){
        //console.log('----------onChange Triggered----------');  
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
          event.preventDefault();
         // console.log('-------onSubmit Called-------');
         // Create new Project and call the backend service using action
         const newProject = {
            name:this.state.name,
            password:this.state.password,
           }
           if(this.state.name==="ShriHari" & this.state.password==="shri123" ||this.state.name==="JoelJacob" & this.state.password==="Jacob123"){
            this.props.createCustomer1admin(newProject,this.props.history);
         }
         else{
             window.alert("Not Authorised to Login as Admin");
         }
         }
        
       //  console.l(this.state.password);  
      render() {
    return (
       <div className="login">
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                <h1 className="display-4 text-dark  text-center">Admin Login</h1><br/>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Admin name" name="name"onChange={this.onChange} />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={this.onChange} />
                        </div>
                        <div className="text-center">
         
                        <input type="submit" className="btn btn-dark  btn-lg" value="LOGIN" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
           
    );
    }
}
const mapStateToProps = (state) => ({
    errors: state.errors,
  });
export default connect(  
    mapStateToProps,
    { createCustomer1admin }
  )(Admin); 
