import React from 'react';
import { connect } from "react-redux";
import {createNutritionPlan} from '../../Actions/NutritionPlanAction';
import PropTypes from 'prop-types';
class AddNutritionPlan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            planId: "",
            name: "",
            description: "",
            price:"",
            fields: {},
            errors: {}
        }
        this.onSubmit=this.onSubmit.bind(this);
        this.onChange=this.onChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleChange(field, e){         
        let fields = this.state.fields;
         fields[field] = e.target.value;        
         this.setState({fields});
     }
    onSubmit = (event) => {
        event.preventDefault();
         if(this.handleValidation()){
        const newNutritionPlan = {
            planId: this.state.fields["planId"],
            name: this.state.fields["name"],
            description: this.state.fields["description"],
            price:this.state.fields["price"]
        };
        this.props.createNutritionPlan(newNutritionPlan, this.props.history);
    }

    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Nutrition Plan Id
        if(!fields["planId"]){
           formIsValid = false;
           errors["planId"] = "Nutrition Plan Id Required";
        }
  
        if(typeof fields["planId"] !== "undefined"){
           if(!fields["planId"].match(/^[a-zA-Z ]+$/)){
              formIsValid = false;
              errors["planId"] = "Only Strings are allowed";
           }        
        }
        //Nutrition Plan Name
        if(!fields["name"]){
            formIsValid = false;
            errors["name"] = "Nutrition Plan Name Required";
         }
   
         if(typeof fields["name"] !== "undefined"){
            if(!fields["name"].match(/^[a-zA-Z ]+$/)){
               formIsValid = false;
               errors["name"] = "Only Strings are allowed";
            }        
         }
         //Nutrition Plan Description
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
          //Nutrition Plan Price
        if(!fields["price"]){
            formIsValid = false;
            errors["price"] = "Nutrition Plan Price Required";
         }
   
         if(typeof fields["price"] !== "undefined"){
            if(!fields["price"].match(/^[0-9]+$/)){
               formIsValid = false;
               errors["price"] = "Price can not be negative";
            }        
         }
       this.setState({errors: errors});
       return formIsValid;
   }

    render() {
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                    <h4 className="display-4 text-center font-weight-lighter btn-outline-dark">Create NutritionPlan Form</h4>
                        <hr /><br/>
                        <form onSubmit={this.onSubmit} >
                        
                            <div className="form-group">
                                {/* <label className="label">Nutrition Plan Id:</label> */}
                                <input type="text" 
                                    className="form-control form-control-lg "
                                    placeholder=" Enter Nutrition Plan Id"
                                    name="planId"
                                    onChange={this.handleChange.bind(this, "planId")} value={this.state.fields["planId"]}
                                    
                                />
                                <span style={{color: "red"}}>{this.state.errors["planId"]}</span>
                                
                            </div>
                            <div className="form-group">
                                {/* <label>Nutrition Plan Name:</label> */}
                                <input type="text" 
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Name" 
                                    name="name"
                                    onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}
                                />
                                <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                            </div>

                            <div className="form-group">
                                {/* <label>Plan Description:</label> */}
                                <input type="text" 
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Description"
                                    name="description" 
                                    onChange={this.handleChange.bind(this, "description")} value={this.state.fields["description"]}
                                />
                                <span style={{color: "red"}}>{this.state.errors["description"]}</span>
                            </div>

                            <div className="form-group">
                                {/* <label>Nutrition Plan Price:</label> */}
                                <input type="number" 
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Price" 
                                    name="price"
                                    onChange={this.handleChange.bind(this, "price")} value={this.state.fields["price"]}
                                />
                                <span style={{color: "red"}}>{this.state.errors["price"]}</span>
                            </div>
                            <input type="submit" className="btn btn-dark btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}
createNutritionPlan.propTypes = {
    createNutritionPlan: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired

}

export default connect(null,{createNutritionPlan})(AddNutritionPlan);