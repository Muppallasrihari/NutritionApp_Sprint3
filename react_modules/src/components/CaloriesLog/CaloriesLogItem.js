import React from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {PropTypes} from 'prop-types';
import {deleteCaloriesLog, getCaloriesLogs} from '../../Actions/CaloriesLogActions';


class CaloriesLogItem extends React.Component {
        
    onDeleteClick = (id)=>{
        // console.log('-------Delete Button Clicked-------'+id);
        this.props.deleteCaloriesLog(id);
     }

    render(){
         return(
             <React.Fragment>
        <table className="table table-bordered">
        <thead>
            <tr>
                <th>S.No</th>
                <th>CaloriesLog Identifier</th>
                <th> Calories</th>
                 <th>Created At</th>
                <th>Updated At</th>
                <th>Update CaloriesLog</th>
                <th>Delete CaloriesLog</th>
            </tr>
        </thead>
        <tbody>
            {this.props.data.map((value,index)=>{
                return(
                    <tr key={index}>
                        <td>{value.id}</td>
                        <td>{value.caloriesLogIdentifier}</td>
                        <td>{value.calories}</td>
                        <td>{value.createdAt}</td>
                        <td>{value.updatedAt}</td>
                                                    
                        <td>
                              <Link to={`/updateCaloriesLog/${value.caloriesLogIdentifier}`}>
                               <button type="button" className="btn btn-outline-dark">   Update CaloriesLog</button>
                                </Link>                         
                         </td> 
                          
                         <td>
                             <button type="button" className="btn btn-outline-danger"
                            onClick={this.onDeleteClick.bind(this,value.caloriesLogIdentifier)}>  Delete CaloriesLog</button>
                        </td>
                           
                    </tr>
                )
            })

            }
        </tbody>
    </table>
   </React.Fragment>
    );
}
}
CaloriesLogItem.propTypes={
    deleteCaloriesLog:PropTypes.func.isRequired
}
export default connect(null,{deleteCaloriesLog})(CaloriesLogItem);
