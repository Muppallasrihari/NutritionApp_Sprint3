import React from 'react';
import {createDietPlan} from '../../Actions/DietPlanActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class AddDietPlan extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {foodType:'',description:'',fatRatio:'',carbsRatio:'',proteinRatio:''},
            errors: {foodType:'',description:'',fatRatio:'',carbsRatio:'',proteinRatio:''},
        };
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
    }

    handleChange(field, e){
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({fields});
    }

    onSubmit=(event)=>{
        event.preventDefault();
        if(this.handleValidation()){
            const newDietPlan = {
                foodType:this.state.fields["foodType"],
                description:this.state.fields["description"],
                fatRatio:this.state.fields["fatRatio"],
                carbsRatio:this.state.fields["carbsRatio"],
                proteinRatio:this.state.fields["proteinRatio"]
            };
            this.props.createDietPlan(newDietPlan,this.props.history);
        }
    }
    onChange(event){
        this.setState(
            {[event.target.name]:event.target.value}
        );
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(!fields["foodType"]){
            formIsValid = false;
            errors["foodType"] = "Food Type Required";
        }
        if(typeof fields["foodType"] !== "undefined"){
            if(!fields["foodType"].match(/^[A-Z]+$/g)){
                formIsValid = false;
                errors["foodType"] = "Food type must be in caps";
            }
        }

        if(!fields["description"]){
            formIsValid = false;
            errors["description"] = "Nutrition Plan Description Required";
         }
   
         if(typeof fields["description"] !== "undefined"){
            if(!fields["description"].match(/^[a-zA-Z ]+$/)){
               formIsValid = false;
               errors["description"] = "Only Strings are allowed";
            }        
         }

        if(!fields["fatRatio"]){
            formIsValid = false;
            errors["fatRatio"] = "Fat ratio is required";
        }
        if(typeof fields["fatRatio"] !== "undefined"){
            if(!fields["fatRatio"].match(/^[0-9].[0-9]/g)){
                formIsValid = false;
                errors["fatRatio"] = "Fat ratio must be decimal number";
            }
        }

        if(!fields["carbsRatio"]){
            formIsValid = false;
            errors["carbsRatio"] = "Carbs ratio is required";
        }
        if(typeof fields["carbsRatio"] !== "undefined"){
            if(!fields["carbsRatio"].match(/^[0-9].[0-9]/g)){
                formIsValid = false;
                errors["carbsRatio"] = "Carbs ratio must be decimal number";
            }
        }

        if(!fields["proteinRatio"]){
            formIsValid = false;
            errors["proteinRatio"] = "Protein ratio is required";
        }
        if(typeof fields["proteinRatio"] !== "undefined"){
            if(!fields["proteinRatio"].match(/^[0-9].[0-9]/g)){
                formIsValid = false;
                errors["proteinRatio"] = "Protein ratio must be decimal number";
            }
        }
        this.setState({errors: errors});
        return formIsValid;
    }
    render(){
        //const {errors} = this.state;
        return(
            <div className="dietplans add-dietplan-background"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Diet Plan</h5>
                        <hr />
                        <form onSubmit = {this.onSubmit} >
                            <div className = "form-group">
                                {/* <label>Food Type</label> */}
                                <input type = "text" 
                                className = "form-control form-control-lg "
                                placeholder="Food Type" 
                                name="foodType" 
                                onChange = {this.handleChange.bind(this, "foodType")}
                               />
                               <span style = {{color:"red"}}>{this.state.errors["foodType"]}</span>
                            </div>

                            <div className = "form-group">
                                {/* <label>Description</label> */}
                                <input type = "text" 
                                className = "form-control form-control-lg "
                                placeholder="Description" 
                                name="description" 
                                onChange = {this.handleChange.bind(this, "description")}
                               />
                               <span style = {{color:"red"}}>{this.state.errors["description"]}</span>
                            </div>

                            <div className = "form-group">
                                {/* <label>Fat Ratio</label> */}
                                <input type = "text" 
                                className = "form-control form-control-lg "
                                placeholder="Fat Ratio" 
                                name="fatRatio" 
                                onChange = {this.handleChange.bind(this, "fatRatio")}
                               />
                               <span style = {{color:"red"}}>{this.state.errors["fatRatio"]}</span>
                            </div>

                            <div className = "form-group">
                                {/* <label>Carbs Ratio</label> */}
                                <input type = "text" 
                                className = "form-control form-control-lg "
                                placeholder="Carbs Ratio" 
                                name="carbsRatio" 
                                onChange = {this.handleChange.bind(this, "carbsRatio")}
                               />
                               <span style = {{color:"red"}}>{this.state.errors["carbsRatio"]}</span>
                            </div>

                            <div className = "form-group">
                                {/* <label>Protein Ratio</label> */}
                                <input type = "text" 
                                className = "form-control form-control-lg "
                                placeholder="Protein Ratio" 
                                name="proteinRatio" 
                                onChange = {this.handleChange.bind(this, "proteinRatio")}
                               />
                               <span style = {{color:"red"}}>{this.state.errors["proteinRatio"]}</span>
                            </div>

                            <input type="submit" className="btn btn-dark btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

AddDietPlan.propTypes ={
    createDietPlan : PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
}

export default connect(null,{createDietPlan})(AddDietPlan);
