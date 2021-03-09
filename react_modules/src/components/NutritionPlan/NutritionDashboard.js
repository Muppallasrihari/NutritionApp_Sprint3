import React from 'react';
import NutritionPlanItem from './NutritionPlanItem';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getPlans} from '../../Actions/NutritionPlanAction';
import NutritionPlanButton from './NutritionPlanButton';
import AdminDashBoard from '../AdminDashBoard';



class NutritionDashboard extends React.Component {
    componentDidMount() {
        this.props.getPlans();
    }
    render() {
        const { plans } = this.props.plans;
        return (
            <React.Fragment>
            <div className="plans">
                
            <div className="conatainer">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center btn-outline-info" >Nutrition Plans</h1>
                        <div className="text-center text-info"><NutritionPlanButton/>&nbsp; &nbsp;<Link to="/admindashboard">
                          <button className="btn btn-lg btn-info">Home</button>  
                        </Link>
                        </div>
                        <br />
                        <br/>
                        <hr/>
                        {
                               <NutritionPlanItem data={plans}/>
                            }       
                    </div>
                </div>
            </div>
            </div> 
            </React.Fragment>
        );
    }
}
NutritionDashboard.propTypes = {
    plans: PropTypes.object.isRequired,
    getPlans: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    plans: state.plans
})
export default connect(mapStateToProps,{getPlans})(NutritionDashboard);