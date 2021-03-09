import React from 'react';
import {Link} from  'react-router-dom';

const AddExerciseButton = () => {
  return(
   <React.Fragment>
        <Link to="/addExercise" className="btn btn-lg btn-dark ">
        Add Exercise Plan
        </Link>
   </React.Fragment>
  );  
}
export default AddExerciseButton;