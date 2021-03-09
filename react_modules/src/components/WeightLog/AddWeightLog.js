import React, { Component } from 'react';

import {createWeightLog} from '../../Actions/WeightLogActions';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';


class AddWeightLog extends Component{
  constructor(props){
      super(props);
      this.state={
        weightId:"",
        weight:"",
        created_At:"",
        updated_At:"",
          errors:{}
         
      }
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  
      this.initialState=this.state;
  }  
/*----------------react validation ------------------------*/
handleFormValidation(){
    const {weightId,weight,created_At,updated_At}=this.state;
    let errors={};
    let formIsValid=true;
    if(!weightId){
        formIsValid=false;
        errors["weightIdErr"]="Weight Id is required";
    }
    else
         if(weightId.length<2 || weightId.length>4)
        {
            formIsValid = false;    
        errors["weightIdErr"] = "WeightId must be between the size [min=2 max=4]";
        }
    
    else {    
        var pattern = /^[a-zA-z0-9]+$/;    
        if (!pattern.test(weightId)) {    
            formIsValid = false;    
            errors["weightIdErr"] = "Id must contains only alphabets and numbers Eg:Aa12 ";    
        }    
    } 


    if(!weight){
        formIsValid=false;
        errors["weightErr"]="Weight is required";
    }
    else
        if(weight<=0 || weight>1000)
        {
            formIsValid = false;    
        errors["weightErr"] = "Give valid weight Eg:50,70";
        }
        else {    
            var pattern = /^[0-9]+$/;    
            if (!pattern.test(weight)) {    
                formIsValid = false;    
                errors["weightErr"] = "Weight must contain only numbers Eg:78 ";    
            }    
        }

        if(!created_At){
            formIsValid=false;
            errors["createDateErr"]="Date is required";
        }
        if(!updated_At){
            formIsValid=false;
            errors["updateDateErr"]="Date is required";
        }
    this.setState({errors:errors});
    return formIsValid;
}
/*------------------------------------------------------*/
onChange(event){
    this.setState({[event.target.name]:event.target.value}
        );
}
componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
}
onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {    
             const newWeightLog={
        weightId:this.state.weightId,
        weight:this.state.weight,
        created_At:this.state.created_At,
        updated_At:this.state.updated_At
    }
    console.log(newWeightLog);
    this.props.createWeightLog(newWeightLog,this.props.history);   
    alert('Your WeightLog Data has been created successfully .')   
            }     
}
    render()
{
   
          
       
    const {weightIdErr,weightErr,createDateErr,updateDateErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="weightLog">
        <div className="container p-3 my-3 bg-dark text-white "
        
        >
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4  text-center" > WeightLog Form</h5>
                    <hr />
                    
                    <form onSubmit={this.onSubmit}   
                   
                    >
                    <h6>Weight ID</h6>
                        <div className="form-group">
                            <input type="text" 
                            /*--------------front to back------------------------- */
                           className={classNames("form-control form-control-lg   ",{
                               "is-invalid":errors.weightId})
                           } 
                           /*------------------------------------------------ */

                           /*--------------react validation part---------------- */
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":weightIdErr})
                            }
                            /*----------------------------------------------------- */
                            name="weightId"
                            value={this.state.weightId}

                            /*--------------react validation part---------------- */
                      
                            onChange={this.onChange}
                        /*-------------------------------------- */
                            placeholder="Weight ID" />
                            
                         
                           {weightIdErr&&(
                                <div className="invalid-feedback">
                                    {weightIdErr}
                                    </div>
                            )}
                     

                        </div>
                        <h6>Weight</h6>
                        <div className="form-group">
                            <input type="text"  
                            
                            className={classNames("form-control form-control-lg ",{
                               "is-invalid":weightErr})
                           } 
                            name="weight"
                            value={this.state.weight}
                            
                            onChange={this.onChange}
                            placeholder="Weight"
                                />
                              
                             {weightErr&&(
                                <div className="invalid-feedback">
                                    {weightErr}
                                    </div>
                            )}
                        </div>
                       
                        
                        <h6>Create Date</h6>
                        <div className="form-group">
                            <input type="datetime-local" 
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":createDateErr})
                            }
                            name="created_At"
                            value={this.state.created_At}
                            onChange={this.onChange} />
                              {createDateErr&&(
                                <div className="invalid-feedback">
                                    {createDateErr}
                                    </div>
                            )}
                            
                        </div>
                        <h6>Update Date</h6>
                        <div className="form-group">
                            <input type="datetime-local"
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":updateDateErr})
                            }
                             name="updated_At"
                             value={this.state.updated_At}
                             onChange={this.onChange} />
                               {updateDateErr&&(
                                <div className="invalid-feedback">
                                    {updateDateErr}
                                    </div>
                            )}
                        </div>

                        <input type="submit" 
                        className="btn btn-success btn-block mt-4 alert alert-success " 
                        
                        />
                        
                        
                    </form>
                    
                </div>
            </div>
        </div>
    </div>
    )
}
}
AddWeightLog.propTypes={
    createWeightLog: propTypes.func.isRequired,
    errors: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    errors:state.errors
});
export default connect(mapStateToProps,{createWeightLog})(AddWeightLog);