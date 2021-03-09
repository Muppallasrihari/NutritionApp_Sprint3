import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createCustomer } from "../../Actions/ProjectActions";
import classnames from "classnames";

class AddCustomer extends Component {
    constructor(props){
        super(props);
        this.state = {
            contact:"",
            name:"",
            gender:"",
            planId:"",
            foodType:"",
            exIdentifier:'',
            createdDate:"",
            updatedDate:"",
            errors: {},
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

    }
 
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    onChange(event){  
      this.setState(
          {[event.target.name]:event.target.value}
      ); 
    }

    onSubmit(event){
      let i=0;
      let va=this.state.name.charAt(0);
        event.preventDefault(); 
       const newProject = {
        contact:this.state.contact,
        name:this.state.name,
        gender:this.state.gender,  
        planId:this.state.planId,
        foodType:this.state.foodType,
        exIdentifier:this.state.exIdentifier,
        createdDate:this.state.createdDate,
        updatedDate:this.state.updatedDate
       };
       
       if(this.state.contact.length!==10){
        i=i+1;
        window.alert("Contact Numbmer should be exact 10 digits");
      
      }
     if(this.state.name.charAt(0)!==va.toUpperCase()){
       i=i+1;
      window.alert("Names First Letter Should be Capital");
     }
     if(this.state.planId==='' ||this.state.planId==="PLANS"){
       i=i+1;
       window.alert("PlanId Should Not be Null");
     }
     if(this.state.foodType===''||this.state.foodType==='FOOD-TYPES'){
      i=i+1;
      window.alert("FoodType Should Not be Null");
    }
     console.log(i+" "+va.toUpperCase()+" "+this.state.planId);
     if(i===0){
       this.props.createCustomer(newProject, this.props.history);
     }
    //   console.log(newProject);
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="project ">
                <div className="container">
               
                    <div className="row">
                        <div className="col-md-7 m-auto">
                            <h5 className="display-4 text-center text-dark">Customer Registration form</h5>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                              <fieldset>
                                <div className="form-group">
                                    <input type="text"
                                  className={classnames("form-control form-control-lg ", {
                                    "is-invalid": errors.contact
                                  })}
                                    name="contact"
                                    value={this.state.projectName}
                                    placeholder="Customer Contact" 
                                    onChange={this.onChange}/>
                                     {errors.contact && (
                            <div className="invalid-feedback">
                                       {errors.contact}
                                              </div>
                  )}
                                </div>
                                
                                <div className="form-group">
                                    <input type="text" 
                                     className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.name,
                                     })} 
                                    name="name"
                                   value={this.state.name}
                                    placeholder="Customer Name"
                                    onChange={this.onChange} />
                                     {errors.name && (
                            <div className="invalid-feedback">
                                       {errors.name}
                                              </div>
                  )}
                                </div>
                                <div className="form-group">
                                    <input type="text" 
                                     className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.gender,
                                     })} 
                                    name="gender"
                                    value={this.state.gender}
                                    placeholder="Gender"
                                    onChange={this.onChange} />
                                     {errors.gender && (
                            <div className="invalid-feedback">
                                       {errors.gender}
                                              </div>
                  )}
                                </div>
                      
                                  
                              <div className="form-group">
                                    <select name="planId" className={classnames("form-control form-control-lg ", {
                                        "is-invalid": errors.planId,
                                     })}
                                    value={this.state.planId}
                                    onChange={this.onChange} >
                                      {errors.planId && (
                                        <div className="invalid-feedback">
                                            {errors.planId}
                                              </div>
                  )}
                               <option >Nutrition Plans</option>
                                 <option value="SILVER">SILVER</option>
                                 <option value="GOLD">GOLD</option>
                                 <option value="PLATINUM">PLATINUM</option>
                                 
                               
                     </select>
                                </div>

                              <div className="form-group">
                              <select name="foodType" 
                                     className="form-control form-control-lg "
                                    value={this.state.foodType}
                                    onChange={this.onChange}>
                                   <option >Food Type</option>
                                     <option value="VEG">VEG</option>
                                     <option value="NONVEG">NONVEG</option>
                 
                         </select>

                                  </div>
                                  <div className="form-group">
                              <select name="foodType" 
                                     className="form-control form-control-lg "
                                    value={this.state.exIdentifier}
                                    onChange={this.onChange}>
                                   <option >Exercise Plans</option>
                                     <option value="CARDIO1">CARDIO 1</option>
                                     <option value="CARDIO2">CARDIO 2</option>
                                     <option value="CARDIO3">CARDIO 3</option>
                                     <option value="STRENGTH1">STRENGTH 1</option>
                                     <option value="STRENGTH2">STRENGTH 2</option>
                                     <option value="STRENGTH3">STRENGTH 3</option>
                                     

                         </select>
                         
                                  </div>
                              <div className="form-group">
                                    <input type="date" 
                                    className="form-control form-control-lg" 
                                    name="createdDate"
                                    value={this.state.createdDate}
                                    placeholder="Create Date"
                                    onChange={this.onChange} />
                              </div>
                              <div className="form-group">
                                    <input type="date" 
                                    className="form-control form-control-lg" 
                                    name="updatedDate"
                                    value={this.state.updatedDate}
                                    placeholder="Update Date"
                                    onChange={this.onChange} />
                              </div>
                                <div className="text-center">
                                <input type="submit" value="SIGN-UP" className="btn btn-primary btn-lg " />
                                </div>
                             </fieldset>
                          </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
AddCustomer.propTypes = {
    createCustomer: PropTypes.func.isRequired,
  };
const mapStateToProps = (state) => ({
    errors: state.errors,
  });
  
  export default connect(
    mapStateToProps,
    { createCustomer }
  )(AddCustomer);
