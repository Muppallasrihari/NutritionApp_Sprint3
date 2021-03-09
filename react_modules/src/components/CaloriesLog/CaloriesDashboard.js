import React, {Component} from 'react'
import CreateCaloriesLogButton from './CreateCaloriesLogButton'
import CaloriesLogItem from './CaloriesLogItem'
import {connect} from 'react-redux';
import {getCaloriesLogs} from '../../Actions/CaloriesLogActions';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';

class CaloriesDashboard extends Component {
    componentDidMount(){
        this.props.getCaloriesLogs();
    }
    render(){   
        const {calorieslogs}=this.props.calorieslogs;
        return(
            <div className="calorieslog">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-5 text-center">CALORIES LOG</h1>
                        <br />
                        <CreateCaloriesLogButton/>&nbsp;&nbsp;&nbsp;<Link to="dashboard" className=" btn btn-info btn-lg">Home</Link>
                        <br />
                        <hr />
                        {  
                            <CaloriesLogItem data={calorieslogs}/>
                        
                        }
                    </div>
                </div>
            </div>
        </div>

        )
    }
}
CaloriesDashboard.propTypes={
    calorieslogs:PropTypes.object.isRequired,
    getCaloriesLogs:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    calorieslogs:state.calorieslogs
});
export default connect(mapStateToProps,{getCaloriesLogs})(CaloriesDashboard);