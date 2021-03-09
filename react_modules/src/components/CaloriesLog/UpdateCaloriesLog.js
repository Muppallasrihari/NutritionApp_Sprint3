import React,{Component} from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import classNames from "classnames";
import {getCaloriesLog,createCaloriesLog} from '../../Actions/CaloriesLogActions';
class UpdateCaloriesLog extends Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            calories:"",
            caloriesLogIdentifier:"",
            createdAt:"",
            updatedAt:"",
            errors:{}
        };
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
       
        this.setState({[event.target.name]:event.target.value});
      }
      onSubmit(event){
        event.preventDefault();
        if (this.handleFormValidation()) { 
        const updateCaloriesLog = {
        id:this.state.id,
        calories:this.state.calories,
        caloriesLogIdentifier:this.state.caloriesLogIdentifier,
        createdAt:this.state.createdAt,
        updatedAt:this.state.updatedAt
       }
       this.props.createCaloriesLog(updateCaloriesLog,this.props.history);
    
       alert('Your CaloriesLog Data has been Updated successfully.')    
  
   } 
    }
    componentWillReceiveProps(nextProps){
        const{
            id,
            calories,
            caloriesLogIdentifier,
            createdAt,
            updatedAt

        }=nextProps.calorieslog;
        this.setState({
           id,
           calories,
           caloriesLogIdentifier,
           createdAt,
           updatedAt
        })
    }
    componentDidMount(){
        const {id}= this.props.match.params;
        this.props.getCaloriesLog(id,this.props.history);
    }
    render(){
        const {caloriesLogIdentifierErr,caloriesErr}=this.state.errors;
        const {errors} =this.state;
        return (
            <div>
                <div className="calorieslog">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h3 className="display-5 text-center">Update CaloriesLog form</h3>
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
                            placeholder="CaloriesLog Identifier" disabled/>
                            
                         
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
        </div>
        )
    }
}
UpdateCaloriesLog.propTypes={
    getCaloriesLog:PropTypes.func.isRequired,
    createCaloriesLog:PropTypes.func.isRequired,
    calorieslog:PropTypes.object.isRequired
}
const mapStateToProps=state=>({
    calorieslog:state.calorieslogs.calorieslog,
    errors:state.errors
});
export default connect(mapStateToProps,{getCaloriesLog,createCaloriesLog})(UpdateCaloriesLog);
