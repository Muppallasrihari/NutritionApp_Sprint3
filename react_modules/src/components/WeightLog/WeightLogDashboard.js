import React, {Component } from 'react'
import WeightLogItem from './WeightLogItem'

import {connect} from 'react-redux';
import {getWeightLogs} from '../../Actions/WeightLogActions';
import PropTypes from 'prop-types';
import CreateWeightLogButton from './CreateWeightLogButton';
import {Link} from 'react-router-dom'
 class WeightLogDashboard extends Component{

    componentDidMount(){
        this.props.getWeightLogs();
    }
    render()
    {
        const {weightLogs}=this.props.weightLogs;
        return(
           
<div className="weightLogs">
        <div className="container">
            <div className="row" >
                <div className="col-md-12">
                
                    <h1 className=" text-center font-weight:normal font-style: italic">WEIGHTLOG DETAILS</h1>
                    <br />
                   <CreateWeightLogButton/>&nbsp;&nbsp;&nbsp;<Link to="dashboard" className=" btn btn-info btn-lg">Home</Link> 
                    <br />
                    <hr />
  

  {/*--------------------------------Table output method------------------------------- */}

{
    <WeightLogItem data={weightLogs}/>
}

  

                </div>
            </div>
        </div>
    </div>

          
        )
    }
}

WeightLogDashboard.propTypes={
    weightLogs:PropTypes.object.isRequired,
    getWeightLogs:PropTypes.func.isRequired
}
const mapStateToProps=state=>({
    weightLogs:state.weightLogs
});
export default connect(mapStateToProps,{getWeightLogs})(WeightLogDashboard);




