import React, {Component } from 'react'
import {deleteWeightLog} from '../../Actions/WeightLogActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
class WeightLogItem extends Component{

    
     onDeleteClick=(id)=>{
         this.props.deleteWeightLog(id);
     }
    render()
    {
        const {weightLog}=this.props;
        return(
            <table className="table table-bordered table-dark">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Weight Id</th>
                        <th> Weight</th>
                      <th>Created On</th>
                        <th>Updated On</th>
                        <th>Update WeightLog</th>
                        <th>Delete WeightLog</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{value.id}</td>
                                <td>{value.weightId}</td>
                                <td>{value.weight}</td>
                                
                                <td>{value.created_At}</td>
                                <td>{value.updated_At}</td>                  
                                <td>
                                            <Link to={`/updateWeightLog/${value.weightId}`}>
                                          
                                            <button type="button" class="btn btn-success">UPDATE WEIGHTLOG</button>
                                            </Link>    
                                     </td>  
                                     <td>       
                                            <button type="button" class="btn btn-danger"
                                             onClick={this.onDeleteClick.bind(this,value.weightId)}>DELETE WEIGHTLOG</button>
                                    </td>   
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>
          
        );

       }
}


WeightLogItem.propTypes={
    deleteWeightLog:PropTypes.func.isRequired
}
export default connect(null,{deleteWeightLog})(WeightLogItem);





 