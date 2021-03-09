import React from 'react';
import {Link} from 'react-router-dom';
import {deleteDietPlan} from '../../Actions/DietPlanActions'
import {connect} from 'react-redux'
import {PropTypes} from 'prop-types'

class DietPlanItem extends React.Component{
    onDeleteClick = (id)=>{
        this.props.deleteDietPlan(id);
    }
    render(){
        return(
            <table className="table table-bordered table-color">
                <thead className="btn-primary">
                    <tr>
                        <th>S.No</th>
                        <th>Food Type</th>
                        <th>Description</th>
                        <th>Fat Ratio</th>
                        <th>Carbs Ratio</th>
                        <th>Protein Ratio</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((value, index) => {
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.foodType}</td>
                                <td>{value.description}</td>
                                <td>{value.fatRatio}</td>
                                <td>{value.carbsRatio}</td>
                                <td>{value.proteinRatio}</td>
                                <td>{<Link to={`/updateDietPlan/${value.foodType}`} className="btn btn-success">
                                Update
                                </Link>}&nbsp;
                                {<Link className="btn btn-danger" onClick={this.onDeleteClick.bind(this,value.foodType)}>
                                Delete
                                </Link>}</td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        );
    }
}
DietPlanItem.propTypes = {
    deleteDietPlan:PropTypes.func.isRequired
}
export default connect(null,{deleteDietPlan})(DietPlanItem);
