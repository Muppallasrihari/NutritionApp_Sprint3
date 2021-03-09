import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import classnames from 'classnames';
import {PropTypes} from 'prop-types';
import {connect} from "react-redux";
import {makePayment} from '../../Actions/ProjectActions';

class Payment extends Component {
  constructor(props) {    
    super(props);    
    this.state = {    
        paymentIdentifier: '',    
        paymentGateway: '',    
        upiId: '',       
        paytmNumber: '',    
        items:[],  
        isLoaded:false,
        formErrors: {}    
    };    
    this.initialState = this.state;    
}   

handleValidation(){
  const{paymentIdentifier,paymentGateway,upiId,paytmNumber}=this.state;
  let formErrors={};
  let formIsValid=true;

  if (!paymentIdentifier) {    
    formIsValid = false;    
    
    formErrors["paymentIdentifierError"] = "Payment Identifier is required.";    
  }
  else{
    if(!(/^[Pp][0-9]{1}[0-9]{1}/g).test(paymentIdentifier)){
      formIsValid=false;
      formErrors["paymentIdentifierError"] ="Payment Identifier must start with PXX"
    }
  }    

   
  if (paymentGateway === '' || paymentGateway === "select") {    
    formIsValid = false;    
    formErrors["paymentGatewayError"] = "Select Payment Gateway";    
  }    

  if (!paytmNumber) {    
    formIsValid = false;    
    formErrors["paytmNumberError"] = "Mobile Number is required.";    
  }   
  else{
    if(!(/^[6-9]{1}[0-9]{9}$/g).test(paytmNumber)){
      formIsValid =false;
      formErrors["paytmNumberError"] = "Phone number is invalid,Should start from 6-9 with 10 digits ";    
    }
  }


  if (!upiId) {    
    formIsValid = false;    
    formErrors["upiIdError"] = "UPI Id is required.";    
}    
else if (!(/[a-z0-9A-Z]+@[a-zA-Z0-9]/g).test(upiId)) {    

    formIsValid = false;    
    formErrors["upiIdError"] = "Invalid UPI Id.Should start with name or mobile number";    
}    

this.setState({ formErrors: formErrors });    
return formIsValid; 

}

handleChange = (event) => {    
 // const { name, value } = e.target;    
  this.setState({ 
  [event.target.name]: event.target.value 
  });    
}    

onSubmit = (event) => {    
  event.preventDefault();    

  const newPayment={
    paymentIdentifier: this.state.paymentIdentifier,    
    paymentGateway: this.state.paymentGateway,    
    upiId: this.state.upiId,       
    paytmNumber: this.state.paytmNumber  
  };
  console.log(newPayment);
  if (this.handleValidation()) {    
      //alert('Payment done succesfully')    
      this.setState(this.initialState)    
  }    
  const{paymentIdentifier}=this.props.match.params;
  this.props.makePayment(paymentIdentifier,newPayment,this.props.history);

}    

componentDidMount(){
  fetch('http://localhost:8080/api/customer/all')
  .then(res => res.json())
  .then(result =>{
          this.setState({
              isLoaded:true,
              items:result
          });
      });
  }
componentWillReceiveProps(nextProps){
  if(nextProps.formErrors){
      this.setState({formErrors:nextProps.formErrors})
  }
}

render() {
  const{items} =this.state;

  const{paymentIdentifierError,paymentGatewayError,upiIdError,paytmNumberError}=this.state.formErrors;
      return (
          <div className="payment">
            {items.map(item =>(
                <h1 className="display-4 text-center">Welcome {item.name}</h1>        ))}                      
                <div className="jumbotron bg-transparent">
                <h1 className="text-center ">Your Plan Details</h1>
            
                {items.map(item =>(
                       <p className="text-center size">
                       Customer ID : <strong>{item.customerIdentifier}</strong> <br/>
                       Nutrition Plan : <strong>{item.planId}</strong><br/>
                       Food Type : <strong>{item.foodType}</strong><br/>
                       Exercise Plan : <strong>{item.exIdentifier}</strong><br/>
                       Payment Identifer : <strong>{item.paymentIdentifier}</strong>
                        </p>
                           ))}
                               
                {/* <p className="text-center">Your Nutrition Plan - GOLD/SILVER/BRONZE</p>
                <p className="text-center">Your Diet Plan - VEG/NON-VEG </p>
                <p className="text-center">Price of your Plan -  </p>
                <p className="text-center">Payment Identifier - P01 </p>
                */}
                <div className="text-center">
                <Link to="/getallpayments" className="btn btn-dark " >Get All Payments</Link>
                </div>
                </div>
            
                <form autoComplete="off"   onSubmit={this.onSubmit} >
                <div className="container">
                <div className="row">
                <div className="form-group col-md-6">

                <label className="font-weight-bold" >Payment Identifer</label>
                <input type="text" 
                className={classnames("form-control form-control-lg",{
                  "is-invalid":paymentIdentifierError}) }
                id="paymentIdentifer"           
                placeholder="Enter the Payment Identifier"
                name="paymentIdentifier"
                value={this.state.paymentIdentifier}    
                onChange={this.handleChange}    
               
                />

                 {paymentIdentifierError &&    
                  <div className="invalid-feedback">{paymentIdentifierError}</div>
                 }
                 </div>
              <div className="form-group col-md-6">
                <label className="font-weight-bold">Payment Options</label>
                <select id="paymentGateway" 
                name="paymentGateway" 
                className={classnames("form-control form-control-lg",{
                  "is-invalid":paymentGatewayError}) }            
                value={this.state.paymentGateway}    
                onChange={this.handleChange}>
                  <option value="select">Choose...</option>
                  <option  value="UPI"  >UPI</option>
                  <option value="PAYTM" >PAYTM</option>
                  <option value="CARD" >CARD</option>

                </select>
               
                {paymentGatewayError &&    
                 <div className="invalid-feedback" >{paymentGatewayError}</div>
                }
              </div>
              
            </div>
{/*             
             <div id="extra" name ="extra" className="row " style={{display :''}}>
            <div className=" form-group col-md-4 "   >
              <label >UPI ID</label>
              <input type="text" 
              className={classnames("form-control form-control-lg",{
                "is-invalid":upiIdError}) } 
              placeholder="Enter your UPI ID (abc@sbi)" 
              name="upiId"
              id ="upiId"
              value={this.state.upiId}    
              
                onChange={this.handleChange}
             // pattern="[a-zA-Z0-9-_]{5,20}@[a-zA-Z]{2,10}"
              />
              {upiIdError &&    
                 <div className="invalid-feedback">{upiIdError}</div>
                }
              
              </div>
              </div> */}
               <div  className="row">
              <div className=" form-group col-md-4 ">
              <label className="font-weight-bold" >Mobile Number</label>
              <input type="text" 
              className={classnames("form-control form-control-lg",{
                "is-invalid":paytmNumberError}) } 
              placeholder="Enter your Mobile Number"
              name="paytmNumber"
              value={this.state.paytmNumber}    
                onChange={this.handleChange}
              />
              {paytmNumberError &&    
                 <div className="invalid-feedback">{paytmNumberError}</div>
                }
              </div>

              </div>  <br/>

            </div>
            
            <div className="text-center">
            <button type="submit" className="btn btn-danger btn-lg" > Proceed </button>&nbsp;&nbsp;
            <Link to="/credit">
            <button type ="button" className="btn btn-dark btn-lg">CheckOut with Credit Card</button>  
            </Link>
            </div>
          <br/><br/>
          
            </form>
          
            </div>
            
           
        )
    }
 }
Payment.propTypes={
  makePayment:PropTypes.func.isRequired,
  formErrors:PropTypes.object.isRequired
}
const mapStateToProps=state =>({
  formErrors:state.formErrors
})
//export default Payment;
export default connect(mapStateToProps,{makePayment}) (Payment) ;