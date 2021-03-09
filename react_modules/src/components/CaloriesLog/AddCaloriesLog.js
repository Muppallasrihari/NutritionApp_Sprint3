import React, {Component} from 'react';
import {createCaloriesLog} from '../../Actions/CaloriesLogActions';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import classNames from 'classnames';

class AddCaloriesLog extends Component{
    constructor(props){
        super(props);
        this.state={
            calories:"",
            caloriesLogIdentifier:"",
            createdAt:"",
            updatedAt:"",
            errors:{}
        }
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.initialState=this.state;
    }
    /*----------------react validation ------------------------*/
handleFormValidation(){
    const {caloriesLogIdentifier,calories}=this.state;
    let errors={};
    let formIsValid=true;
    if(!caloriesLogIdentifier){
        formIsValid=false;
        errors["caloriesLogIdentifierErr"]="Identifier is required";
    }
    else{
         if(caloriesLogIdentifier.length<2 || caloriesLogIdentifier.length>4)
        {
            formIsValid = false;    
        errors["caloriesLogIdentifierErr"] = "Please enter valid Identifier Eg: abxx";
        }
    }
    if(!calories){
        formIsValid=false;
        errors["caloriesErr"]="Calories is required";
    }
    else{
        if(calories<=0 || calories>20000)
        {
            formIsValid = false;    
        errors["caloriesErr"] = "Please enter valid calories value";
        }
    }
    this.setState({errors:errors});
    return formIsValid;
}


/*------------------------------------------------------*/
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
        if (this.handleFormValidation()) {   
       const newCaloriesLog = {
        calories:this.state.calories,
        caloriesLogIdentifier:this.state.caloriesLogIdentifier,
        createdAt:this.state.createdAt,
        updatedAt:this.state.updatedAt
       }

       //console.log(newCaloriesLog);
       this.props.createCaloriesLog(newCaloriesLog,this.props.history);
       alert('Your CaloriesLog Data has been created successfully .') 
    }
}
    render(){
        const {caloriesLogIdentifierErr,caloriesErr}=this.state.errors;
        const {errors}=this.state;
        return(
            <div className="calorieslog">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h3 className="display-5 text-center">Create CaloriesLog form</h3>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                        <h6>CaloriesLog Identifier</h6>
                        <div className="form-group">
                            <input type="text" 
                            /*--------------front to back------------------------- */
                           className={classNames("form-control form-control-lg   ",{
                               "is-invalid":errors.caloriesLogIdentifier})
                           } 
                           /*------------------------------------------------ */

                           /*--------------react validation part---------------- */
                            className={classNames("form-control form-control-lg   ",{
                                "is-invalid":caloriesLogIdentifierErr})
                            }
                            /*----------------------------------------------------- */
                            name="caloriesLogIdentifier"
                            value={this.state.caloriesLogIdentifier}

                            /*--------------react validation part---------------- */
                      
                            onChange={this.onChange}
                        /*-------------------------------------- */
                            placeholder="CaloriesLog Identifier" />
                            
                         
                           {caloriesLogIdentifierErr&&(
                                <div className="invalid-feedback">
                                    {caloriesLogIdentifierErr}
                                    </div>
                            )}
                     
                            </div>
                            <h6>Calories</h6>
                        <div className="form-group">
                            <input type="text"  
                            
                            className={classNames("form-control form-control-lg ",{
                               "is-invalid":caloriesErr})
                           } 
                            name="calories"
                            value={this.state.calories}
                            
                            onChange={this.onChange}
                            placeholder="Calories"
                                />
                              
                             {caloriesErr&&(
                                <div className="invalid-feedback">
                                    {caloriesErr}
                                    </div>
                            )}
                        </div>
                            
                            <h6>Created Date</h6>
                            <div className="form-group">
                                <input type="datetime-local" className="form-control form-control-lg" 
                                name="createdAt" 
                                value={this.state.createdAt}
                                onChange={this.onChange}/>
                                
                            </div>
                            <h6>Updated Date</h6>
                            <div className="form-group">
                                <input type="datetime-local" className="form-control form-control-lg"
                                 name="updatedAt" 
                                 value={this.state.updatedAt}
                                 onChange={this.onChange}/>
                                 
                            </div>
    
                            <input type="submit" className="btn btn-dark btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
AddCaloriesLog.propTypes={
    createCaloriesLog:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    errors:state.errors
});
export default connect(mapStateToProps,{createCaloriesLog})(AddCaloriesLog);