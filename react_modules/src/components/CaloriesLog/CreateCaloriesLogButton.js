import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const CreateCaloriesLogButton =() => {
    return(
        <React.Fragment>
            <Link to="addCaloriesLog" className='btn btn-lg btn-dark'>
                Add CaloriesLog
            </Link>
        </React.Fragment>
    );
}
export default CreateCaloriesLogButton;