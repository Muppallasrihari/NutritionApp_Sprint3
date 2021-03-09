import React, { Component } from 'react';

import {createWeightLog,getWeightLog} from '../../Actions/WeightLogActions';
import {connect} from 'react-redux';
import propTypes from 'prop-types';
import classNames from 'classnames';

class UpdateWeightLog extends Component{
  constructor(props){
      super(props);
      this.state={
          id:"",
        weightId:"",
        weight:"",
        created_At:"",
        updated_At:"",
          errors:{}
         
      };
      this.onChange=this.onChange.bind(this);
      this.onSubmit=this.onSubmit.bind(this);
  
      this.initialState=this.state;
  }  
/*----------------react validation ------------------------*/
handleFormValidation(){
    const {weightId,weight}=this.state;
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
    this.setState({errors:errors});
    return formIsValid;
}


/*------------------------------------------------------*/
onChange(event){
    this.setState({[event.target.name]:event.target.value}
        );
}

onSubmit(event)
{
    event.preventDefault();
    if (this.handleFormValidation()) {   
        const updateWeightLog={
            id:this.state.id,
            weightId:this.state.weightId,
            weight:this.state.weight,
            created_At:this.state.created_At,
            updated_At:this.state.updated_At,
        }
        console.log(updateWeightLog);
        this.props.createWeightLog(updateWeightLog,this.props.history); 
                alert('Your WeightLog Data has been Updated successfully.')    
        //         this.setState(this.initialState)    
            } 
    
}

componentWillReceiveProps(nextProps){
    const {
        id,
        weightId,
        weight,
        created_At,
        updated_At
    }=nextProps.weightLog;
    this.setState({
        id,
        weightId,
        weight,
        created_At,
        updated_At
    })
}

componentDidMount(){
    const{id}=this.props.match.params;
    this.props.getWeightLog(id,this.props.history);
}
    render()
{
     const {weightIdErr,weightErr}=this.state.errors;
    const {errors}=this.state;
    return(
        <div className="weightLog">
        <div className="container p-3 my-3 bg-dark text-white">
            <div className="row">
                <div className="col-md-8 m-auto">
                    <h5 className="display-4 text-center">Create WeightLog Form</h5>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                    <h6>Weight ID</h6>
                        <div className="form-group">
                            <input type="text" 
                            

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
                            placeholder="Weight ID" disabled/>
                           
                         
                           {weightIdErr&&(
                                <div className="invalid-feedback" >
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
                            className="form-control form-control-lg" 
                            name="created_At"
                            value={this.state.created_At}
                            onChange={this.onChange} />
                            
                            
                        </div>
                        <h6>Update Date</h6>
                        <div className="form-group">
                            <input type="datetime-local"
                             className="form-control form-control-lg" 
                             name="updated_At"
                             value={this.state.updated_At}
                             onChange={this.onChange} />
                             
                        </div>

                        <input type="submit" 
                        className="btn btn-success btn-block mt-4 " />
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}
}

UpdateWeightLog.propTypes={
    getWeightLog: propTypes.func.isRequired,
    createWeightLog:propTypes.func.isRequired,
    weightLog: propTypes.object.isRequired
}
const mapStateToProps=state=>({
    weightLog:state.weightLogs.weightLog,
    errors:state.errors
});
export default connect(mapStateToProps,{getWeightLog,createWeightLog})(UpdateWeightLog);