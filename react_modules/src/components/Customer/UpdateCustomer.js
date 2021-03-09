import React, { Component } from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classnames from "classnames";
import {getProject,createCustomer} from '../../Actions/ProjectActions';
 class UpdateCustomer extends Component {
     constructor(props){
         super(props);
         this.state={
             id:"",
             contact:"",
             name:"",
             gender:"",
             planId:"",
             foodType:"",
             createdDate:"",
             updatedDate:"",
             errors: {},
         };
         this.onChange=this.onChange.bind(this);
         this.onSubmit=this.onSubmit.bind(this);

     }

     onChange(event){
         this.setState({[event.target.name]:event.target.value});
     }
     onSubmit(event){
      let i=0;
      let va=this.state.name.charAt(0);
         event.preventDefault();
         const UpdateCustomer = {
            id:this.state.id,
            contact:this.state.contact,
            name:this.state.name,
            gender:this.state.gender,  
            planId:this.state.planId,
            foodType:this.state.foodType,
            createdDate:this.state.createdDate,
            updatedDate:this.state.updatedDate,
         }
         if(this.state.contact.length!==10){
            i=i+1;
            window.alert("Contact Numbmer should be exact 10 digits");
          
          }
          if( this.state.contact===''){
          i=i+1;
          window.alert("Contact Number Should Not be empty");
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
            this.props.createCustomer(UpdateCustomer,this.props.history);
         }
         
     }

     componentWillReceiveProps(nextProps){
    
         const {
            id,
            contact,
            name,
            gender,
            planId,
            foodType,
            createdDate,
            updatedDate
         
         } = nextProps.Customer;
         this.setState({
            id,
            contact,
            name,
            gender,
            planId,
            foodType,
            createdDate,
            updatedDate
            
         })
     };
     componentDidMount(){
         const {id}= this.props.match.params;
         this.props.getProject(id,this.props.history);
     }
    render() {
        const {errors} = this.state;
        const{Customer}=this.props;
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                          
                            <h5 className="display-4 text-center">Update Customer form</h5>
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
                               <option >PLANS</option>
                                 <option value="SILVER">SILVER</option>
                                 <option value="GOLD">GOLD</option>
                               
                     </select>
                                </div>

                              <div className="form-group">
                              <select name="foodType" 
                                     className="form-control form-control-lg "
                                    value={this.state.foodType}
                                    onChange={this.onChange}>
                                   <option >FOOD-TYPES</option>
                                     <option value="VEG">VEG</option>
                                     <option value="NONVEG">NONVEG</option>
                 
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

                                <input type="submit" value="Update" className="btn btn-primary btn-block mt-4" />
                             </fieldset>
                          </form>
                        </div>
                    </div>
                </div>
                    </div>
               )
    }
}
                            
                            
                                       
UpdateCustomer.propTypes ={
    getProject:PropTypes.func.isRequired,
    createCustomer:PropTypes.func.isRequired,
    project: PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    Customer:state.Customers.Customer,
    errors:state.errors
});
export default connect(mapStateToProps,{getProject,createCustomer})(UpdateCustomer);
