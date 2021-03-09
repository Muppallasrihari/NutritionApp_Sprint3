import React from 'react'
import DietPlanItem from './DietPlanItem'
import CreateDietPlanButton from './CreateDietPlanButton';
import {connect} from 'react-redux';
import {getDietplans} from '../../Actions/DietPlanActions'
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

class DietDashboard extends React.Component{
    componentDidMount(){
        this.props.getDietplans();
    }
    render(){
        const {dietplans} = this.props.dietplans;
        return (
        <div className="dietplans dietplan-background"> 
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="display-4 text-center">DIET PLAN</div>
                        <br />
                        <CreateDietPlanButton/>&nbsp;&nbsp;&nbsp;<Link to="/admindashboard">
                          <button className="btn btn-lg btn-info">Home</button>  </Link>
                        <br />
                        <hr />
                        {
                            <DietPlanItem data = {dietplans}/>
                        }    
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

DietDashboard.propTypes = {
    dietplans:PropTypes.object.isRequired,
    getDietplans:PropTypes.func.isRequired
}
const mapStateToProps = state => ({
    dietplans:state.dietplans
})
export default connect(mapStateToProps,{getDietplans})(DietDashboard);
