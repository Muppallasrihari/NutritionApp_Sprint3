import React from 'react';
import {Link} from  'react-router-dom';

const CreateCustomerButton = () => {
  return(
   <React.Fragment>
        <Link to="addcustomer" className="btn btn-lg btn-secondary">
      Add Customer Data
        </Link>
   </React.Fragment>
  );  
}
export default CreateCustomerButton;