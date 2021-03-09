import React, { Component } from 'react'
import CreateDietPlanButton from './DietPlan/CreateDietPlanButton';
import NutritionPlanButton from './NutritionPlan/NutritionPlanButton';
import { connect } from "react-redux";
import {getAllCustomers} from '../Actions/ProjectActions';
import { PropTypes } from "prop-types";
import AddExerciseButton from './Exercise/AddExerciseButton';


class AdminDashboard extends Component {
    componentDidMount() {
        //This lifecyclehook is used to get the customers from redux store's state
        this.props.getAllCustomers();
      }
    render() {
        return (
        <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <h1 className="display-4 text-dark font-weight text-center">ADMIN</h1>
                        <br />
                        &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
                        <CreateDietPlanButton/> &nbsp;&nbsp;&nbsp;<NutritionPlanButton/>
                        &nbsp;&nbsp;&nbsp;<AddExerciseButton/>
                        <br />
                        <hr />
                    </div>
                </div>
            </div> 
        </div>
        )
    }
}
AdminDashboard.propTypes = {
    customers: PropTypes.object.isRequired,
    getAllCustomers: PropTypes.func.isRequired,
  };
  const mapStateToProps = (state) => ({
    Customers: state.Customers,
  });
  export default connect(
    mapStateToProps,
    { getAllCustomers }
  )(AdminDashboard);
