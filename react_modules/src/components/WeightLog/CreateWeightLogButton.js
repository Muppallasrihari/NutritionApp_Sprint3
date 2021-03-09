import React from 'react';
import {Link} from 'react-router-dom';

const CreateWeightLogButton=()=>{
    return(
<React.Fragment>
        <Link to="addWeightLog" className=" btn btn-dark btn-lg">
        Add WeightLog
    </Link>                 
    </React.Fragment>
    );
}
export default CreateWeightLogButton;


