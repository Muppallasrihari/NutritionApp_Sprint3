import React from 'react';
import { connect } from "react-redux";
import { createNutritionPlan } from '../../Actions/NutritionPlanAction';
import PropTypes from 'prop-types';
import { getPlan } from '../../Actions/NutritionPlanAction';
import classnames from "classnames";

class UpdateNutritionPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            planId: "",
            name: "",
            description: "",
            price: "",
            errors: {}
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onSubmit = (event) => {
        event.preventDefault();
 
            const updatedPlan = {
                id: this.state.id,
                planId: this.state.planId,
                name: this.state.name,
                description: this.state.description,
                price: this.state.price,
                createdAt:this.state.createdAt,
                updatedAt:this.state.updatedAt
            }
            this.props.createNutritionPlan(updatedPlan, this.props.history);
        
    }
    componentWillReceiveProps(nextProps) {
        const {
            id,
            planId,
            name,
            description,
            price,
            createdAt,
            updatedAt
        } = nextProps.plan;
        this.setState({
            id,
            planId,
            name,
            description,
            price,
            createdAt,
            updatedAt
        })
      
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.getPlan(id, this.props.history);
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        
        const {errors} = this.state;
        return (
            <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center font-weight-lighter btn-outline-dark">Update NutritionPlan Form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit} >
                            
                            <div className="form-group">
                                {/* <label>Nutrition Plan Id:</label> */}
                                <input type="text"
                                    className={classnames("form-control form-control-lg ",
                                    {
                                    "is-invalid":errors.planId})}
                                    placeholder=" Enter Nutrition Plan Id"
                                    name="planId"
                                    value={this.state.planId}
                                    onChange={this.onChange}
                                />
                                {errors.planId && (
                                        <div className="invalid-feedback">
                                        {errors.planId}
                                        </div>
                                        )}
                            </div>
                            <div className="form-group">
                                {/* <label>Nutrition Plan Name:</label> */}
                                <input type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Name"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                                />
                                {errors.name && (
                                        <div className="invalid-feedback">
                                        {errors.name}
                                        </div>
                                        )}
                            </div>

                            <div className="form-group">
                                {/* <label>Plan Description:</label> */}
                                <input type="text"
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Description"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}
                                />
                                {errors.description && (
                                        <div className="invalid-feedback">
                                        {errors.description}
                                        </div>
                                        )}
                            </div>

                            <div className="form-group">
                                {/* <label>Nutrition Plan Price:</label> */}
                                <input type="number"
                                    className="form-control form-control-lg "
                                    placeholder="Enter Nutrition Plan Price"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.onChange}
                                
                                />
                                {errors.price && (
                                        <div className="invalid-feedback">
                                        {errors.price}
                                        </div>
                                        )}
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
UpdateNutritionPlan.propTypes = {
    getPlan: PropTypes.func.isRequired,
    createNutritionPlan: PropTypes.func.isRequired,
    plan: PropTypes.object.isRequired

}

const mapStateToProps = state => ({
    plan: state.plans.plan,
    errors:state.errors
});
export default connect(mapStateToProps, { getPlan, createNutritionPlan })(UpdateNutritionPlan);