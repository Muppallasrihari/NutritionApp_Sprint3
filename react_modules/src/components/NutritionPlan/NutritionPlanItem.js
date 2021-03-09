import React from 'react';
import { Link } from 'react-router-dom';
import { deletePlan } from '../../Actions/NutritionPlanAction';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';

class NutritionPlanItem extends React.Component {
    onDeleteClick = (id) => {
        this.props.deletePlan(id);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <table className="table table-bordered data">
                                <thead className="btn-info">
                                    <tr>
                                        <th>S.No</th>
                                        <th>NutritonPlan Id</th>
                                        <th>NutritonPlan Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                        <th>Operations</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.props.data.map((value, index) => {
                                        return (
                                            <tr key={index.id}>
                                                <td>{value.id}</td>
                                                <td>{value.planId}</td>
                                                <td>{value.name}</td>
                                                <td>{value.description}</td>
                                                <td>{value.price}</td>
                                                <td>{<Link to={`/UpdateNutritionPlan/${value.planId}`} className="btn btn-info">
                                                    Update
                                    </Link>}&nbsp;
                                    {<Link className="btn btn-danger" onClick={this.onDeleteClick.bind(this, value.planId)}>

                                                        Delete
                                    </Link>}</td>
                                            </tr>
                                        )
                                    })

                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}
NutritionPlanItem.propTypes = {
    deletePlan: PropTypes.func.isRequired
}

export default connect(null, { deletePlan })(NutritionPlanItem);