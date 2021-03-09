import React, { Component } from 'react'
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import ProceedPage from './ProceedPage';

class OtpPage extends Component {
    constructor(props){
        super(props);
        this.state={
            text1:'',
            text2:'',
            text3:'',
            text4:'',
            errors:{}
        };
        this.initialState = this.state;    
    }

    handleValidation(){
        const{text1,text2,text3,text4}=this.state;
        let errors={};
        let formIsValid=true;

        if (!text1) {    
            formIsValid = false;    
            errors["text1Error"] = "OTP is required.";    
          }
        else{
            if(!(/^[0-9]{1}$/).test(text1)){
              formIsValid=false;
              errors["text1Error"] ="Enter only number"
            }
          }     

        if (!text2) {    
            formIsValid = false;    
            errors["text2Error"] = "OTP is required.";    
        }
        else{
            if(!(/^[0-9]{0,1}$/).test(text2)){
              formIsValid=false;
              errors["text2Error"] ="Enter only number"
            }
          }     

        if (!text3) {    
            formIsValid = false;    
            errors["text3Error"] = "OTP is required.";    
        }
        else{
            if(!(/^[0-9]{1}$/).test(text3)){
              formIsValid=false;
              errors["text3Error"] ="Enter only number"
            }
          }     

        if (!text4) {    
            formIsValid = false;    
            errors["text4Error"] = "OTP is required.";    
        }
        else{
            if(!(/^[0-9]{1}$/).test(text4)){
              formIsValid=false;
              errors["text4Error"] ="Enter only number"
            }
          }     
        this.setState({ errors: errors });    
        return formIsValid; 
      

    }
    
   
onSubmit = (event) => {    
    event.preventDefault();    
  
    const newOtp={
     text1:this.state.text1,
     text2:this.state.text2,
     text3:this.state.text3,
     text4:this.state.text4

    };
    console.log(newOtp);
    if (this.handleValidation()) {    
        alert('Payment done succesfully')    
        this.setState(this.initialState)    
    }    
  
  }    


  handleChange = (event) => {    
    // const { name, value } = e.target;    
     this.setState({ 
     [event.target.name]: event.target.value 
     });    
   }      
    
componentWillReceiveProps(nextProps){
    if(nextProps.errors){
        this.setState({errors:nextProps.errors})
    }
  }

    render() {
        const{text1Error,text2Error,text3Error,text4Error}=this.state.errors;

        return (
            <form autoComplete="off"  onSubmit={this.onSubmit} >
              <div className="container">
           <Link to="/proceed">
            <button>View Payment info</button>
            </Link>
            </div>
                <div  >
                <h1 className=" display-4 text-center">Enter your OTP</h1><br/>
                </div>
            <div className="d-flex justify-content-center align-items-center container">
            <div className="card py-5 px-3">
          <h5 className="">Mobile phone verification</h5>
          <span className="mobile-text">Enter the code we just send on your mobile phone <b className="text-danger">+91-9989087299</b></span>
          <div className="d-flex flex-row mt-5">
              <input type="text" name="text1" id="text1"  placeholder="0" 
                className={classnames("form-control ",{
                    "is-invalid":text1Error}) }            
                onChange={this.handleChange}    
                value={this.state.text1}    
                autoFocus=""  
                />
                {text1Error &&    
                 <div className="invalid-feedback">{text1Error}</div>
                }
              <input type="text" name="text2" id="text2"  placeholder="0" 
                    className={classnames("form-control ",{
                    "is-invalid":text2Error}) } 
                    value={this.state.text2}    

                  onChange={this.handleChange}  />
                   {text2Error &&    
                 <div className="invalid-feedback">{text2Error}</div>
                }
              <input type="text" name="text3" id="text3"  placeholder="0"
                className={classnames("form-control ",{
                     "is-invalid":text3Error}) }             
                value={this.state.text3}    
                onChange={this.handleChange} />
                 {text3Error &&    
                 <div className="invalid-feedback">{text3Error}</div>
                 }
             <input type="text" name="text4" id="text4"  placeholder="0" 
                 className={classnames("form-control ",{
             "is-invalid":text4Error}) }            
             value={this.state.text4}    
             onChange={this.handleChange} />
                {text4Error &&    
                 <div className="invalid-feedback">{text4Error}</div>
                 }
             
             </div>
            
            <div className="text-center mt-5"><span className="d-block mobile-text">Didn't receive the code?</span><span className="font-weight-bold text-danger cursor">Resend</span></div><br/>
            <div className="text-center ">
                
                <button className="btn btn-danger btn-lg" >Submit</button>
                
            </div>
           
        </div>
        </div>
        </form>
        )
    }
}
export default OtpPage;
