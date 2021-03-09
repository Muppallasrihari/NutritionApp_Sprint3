import React, { Component } from 'react';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
class Creditcard extends Component {
    constructor(props) {    
        super(props);    
        this.state = {    
            fullName:'',
            cardNumber:'',
            cvv:'',
            month:'',
            year:'',
            upiId:'',
            netBankingId:'',
            password:'',
            formErrors: {}    
        };    
        this.initialState = this.state;    
    }   
    handleValidation(){
        const{fullName,cardNumber,cvv,month,year}=this.state;
        let formErrors={};
        let formIsValid=true;
        
        if(!fullName){
            
            formIsValid=false;
            formErrors["fullNameError"] = "Full Name cannot be null";
        }
        else{
            if(!(/^[a-zA-Z ]{5,15}/g).test(fullName)){
                formIsValid=false;
                formErrors["fullNameError"] = "Full Name should only contain alphabets";

            }
        }
 
        if(!cardNumber){
            
            formIsValid=false;
            formErrors["cardNumberError"] = "Card Number cannot be null";
        }
        else{
            if(!(/^[0-9]{16}/g).test(cardNumber)){
                formIsValid=false;
                formErrors["cardNumberError"] = "Card Number should contain only numbers and should be 16 digits";

            }
        }
        
        if(!cvv){
            
            formIsValid=false;
            formErrors["cvvError"] = "cvv cannot be null";
        }
        else{
            if(!(/^[0-9]{3}$/).test(cvv)){
                formIsValid=false;
                formErrors["cvvError"] = "CVV should only be 3 digit";

            }
        }
          
        if (month === '' || month === "MM") {    
            formIsValid = false;    
            formErrors["monthError"] = "Select Month";    
        }   
        if (year === '' || year === "YY") {    
            formIsValid = false;    
            formErrors["yearError"] = "Select Year";    
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
    
        
        if (this.handleValidation()) {    
            alert('Payment done succesfully')    
            this.setState(this.initialState)    
        }    
    }
    onSubmit1 = (event) => {    
        event.preventDefault();

        if (this.handleValidation1()) {    
            alert('Payment done succesfully');   
            this.setState(this.initialState)    
        }   
           
    
    }

    handleChange1 = (event) => {    
        // const { name, value } = e.target;    
        this.setState({ 
        [event.target.name]: event.target.value 
        });    
    }    
    handleValidation1(){
        const{upiId}=this.state;
        let formErrors={};
        let formIsValid=true;

        if(!upiId){
            formIsValid =false;
            formErrors["upiIdError"]="UPI Id is required";
        }
        else if (!(/[a-z0-9A-Z]+@[a-zA-Z0-9]/g).test(upiId)) {    
            formIsValid = false;    
            formErrors["upiIdError"] = "Invalid UPI Id.Should start with name or mobile number";    
        }    

        this.setState({ formErrors: formErrors });    
        return formIsValid; 
    }
    handleChange2 = (event) => {    
        // const { name, value } = e.target;    
        this.setState({ 
        [event.target.name]: event.target.value 
        });    
    }   
    onSubmit2 = (event) => {    
        event.preventDefault();

        if (this.handleValidation2()) {    
            alert('Payment done succesfully')   
            
            this.setState(this.initialState)    
        }   
    } 

    handleValidation2(){
        const{netBankingId,password}=this.state;
        let formErrors={};
        let formIsValid=true;

        if(!netBankingId){
            formIsValid=false;
            formErrors["netBankingError"]="Cannot be null";
        }
        else{
            if(!(/^[0-9]{8}$/).test(netBankingId))
            {
                formIsValid=false;
                formErrors["netBankingError"]="ID should contain only numbers and  8 digits only"
            }
        }


        if(!password){
            formIsValid=false;
            formErrors["passwordError"]="Password cannot be null";
        }
        else{
            if(!(/^[0-9A-Za-z@$]{5,10}$/).test(password))
            {
                formIsValid=false;
                formErrors["passwordError"]="Password can have numbers,alphabets and special characters,Minimum length 5"
            }
        }

        
        this.setState({ formErrors: formErrors });    
        return formIsValid; 

    }

    render() {
        const{fullNameError,cardNumberError,cvvError,monthError,yearError}=this.state.formErrors;
        const{upiIdError}=this.state.formErrors;
        const{netBankingError,passwordError}=this.state.formErrors;
        
        return (
            
            <div className="container"><br/><br/>
            <article className="card">
            <div className="card-body p-5">
            <ul className="nav bg-light nav-pills rounded nav-fill mb-3" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" data-toggle="pill" href="#nav-tab-card">
                    <i className="fa fa-credit-card"></i> Credit Card</a></li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#nav-tab-paypal">
                    <i className="fab fa-paypal"></i>  UPI ID</a></li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="pill" href="#nav-tab-bank">
                    <i className="fa fa-university"></i>  Net Banking</a></li>
            </ul>

            <div className="tab-content">
            <div className="tab-pane fade show active" id="nav-tab-card">
                
                <form role="form" onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label for="username">Full name (on the card)</label>
                    <input type="text" 
                     className={classnames("form-control form-control-lg",{
                 "is-invalid":fullNameError}) }                
                     name="fullName" 
                    placeholder="Enter your Full Name" 
                    onChange={this.handleChange}   
                    value={this.state.fullName} />
                    
                 {fullNameError &&    
                  <div className="invalid-feedback">{fullNameError}</div>
                 }
                </div> 

                <div className="form-group">
                    <label for="cardNumber">Card number</label>
                    <div className="input-group">
                        <input type="text" 
                            className={classnames("form-control form-control-lg",{
                              "is-invalid":cardNumberError}) } 
                             name="cardNumber" 
                        placeholder="0000 0000 0000 0000"
                        onChange={this.handleChange}   
                        value={this.state.cardNumber}
                       
                        />
                        {cardNumberError &&    
                  <div className="invalid-feedback">{cardNumberError}</div>
                 }
                        {/* <div className="input-group-append">
                            <span className="input-group-text text-muted">
                                <i className="fab fa-cc-visa"></i>   <i className="fab fa-cc-amex"></i>   
                                <i className="fab fa-cc-mastercard"></i> 
                            </span>
                        </div> */}
                    </div>
                </div> 
	<div className="row">
	    <div className="col-sm-8">
	        <div className="form-group">
	            <label><span className="hidden-xs">Expiry Date</span> </label>
	        	<div className="input-group">
                <select name="month" id="month"
                value={this.state.month}   
                className={classnames("form-control form-control-lg",{
                    "is-invalid":monthError}) }  
                onChange={this.handleChange}>
				  
                  <option value="MM">MM</option>
				  <option>01 - January</option>
				  <option>02 - February</option>
				  <option>03 - March</option>
                  <option>04 - April</option>
				  <option>05 - May</option>
				  <option>06 - June</option>
                  <option>07 - July</option>
				  <option>08 - August</option>
				  <option>09 - September</option>
                  <option>10 - October</option>
				  <option>11 - November</option>
				  <option>12 - December</option>

				</select>
                {monthError &&    
                 <div className="invalid-feedback" >{monthError}</div>
                }
                <select name="year" id="year"
className={classnames("form-control form-control-lg",{
    "is-invalid":yearError}) }  
                    value={this.state.year}    
                onChange={this.handleChange}>
                 
				  <option value="YY">YY</option>
				  <option>2021</option>
				  <option>2022</option>
				  <option>2023</option>
                  <option>2024</option>
				  <option>2025</option>
				  <option>2026</option>
				</select>
                {yearError &&    
                 <div className="invalid-feedback" >{yearError}</div>
                }
	        	</div>
                
	        </div>
	    </div>
	    <div className="col-sm-4">
	        <div className="form-group">
	            <label data-toggle="tooltip" title="" data-original-title="3 digits code on back side of the card">CVV <i className="fa fa-question-circle"></i></label>
	            <input type="number" name="cvv"
                className={classnames("form-control form-control-lg",{
                "is-invalid":cvvError}) }   
                             
                placeholder="123" 
                value={this.state.cvv}    
                onChange={this.handleChange} />
                {cvvError &&    
                  <div className="invalid-feedback">{cvvError}</div>
                 }
	        </div> 
                 </div>
                </div> 
                <button className="subscribe btn btn-primary btn-block" type="submit"> Confirm  </button>
                </form>
            </div>

        <div className="tab-pane fade" id="nav-tab-paypal">
        <form onSubmit={this.onSubmit1} >
        <p>UPI ID </p>
        
        <input  type="text"
        className={classnames("form-control form-control-lg",{
            "is-invalid":upiIdError}) }  
        name="upiId" id="upiId"
        value={this.state.upiId}
        
        placeholder="Enter your UPI ID"
        onChange={this.handleChange1} />
         {upiIdError &&    
            <div className="invalid-feedback" >{upiIdError}</div>
            }<br/>

        <button type="submit" 
        className="btn btn-primary btn-lg">Pay</button>
        </form>     
        </div>
<div className="tab-pane fade" id="nav-tab-bank">
<form onSubmit={this.onSubmit2}>
<dl className="param">
  <dt>NetBanking Id: </dt>
  <input 
  className={classnames("form-control form-control-lg",{
    "is-invalid":netBankingError}) } 
  name="netBankingId"
  type="text"  id="netBankingId"
  onChange={this.handleChange2}
  value={this.state.netBankingId}
  placeholder="Enter the ID"/>
  {netBankingError &&    
            <div className="invalid-feedback" >{netBankingError}</div>
            }<br/>

</dl>
<dl className="param">
  <dt>Password  </dt>
  <input className={classnames("form-control form-control-lg",{
                 "is-invalid":passwordError}) }
  name="password"
  type="password" onChange={this.handleChange2}
  value={this.state.password}
   placeholder="Enter your password"/>
   {passwordError &&    
            <div className="invalid-feedback" >{passwordError}</div>
            }<br/><br/>
  <button className="btn btn-primary btn-lg">Login</button>
 
</dl>

</form>
</div>
</div>

</div> 
</article> 

</div>
            
        )
    }
}
export default Creditcard;
