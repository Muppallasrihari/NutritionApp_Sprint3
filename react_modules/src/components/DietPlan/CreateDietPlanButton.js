import React from 'react';
import {Link} from  'react-router-dom';

const CreateDietPlanButton = () => {
  return(
    <React.Fragment>
        
        <Link to="addDietPlan" className="btn btn-lg btn-dark create-button">
        Add Diet Plan
        </Link>
    </React.Fragment>
  );  
}
export default CreateDietPlanButton;
