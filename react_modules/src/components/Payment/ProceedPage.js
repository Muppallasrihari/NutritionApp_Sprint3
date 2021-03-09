import React, { Component } from 'react'

 class ProceedPage extends Component {
    constructor(props) {    
        super(props);    
        this.state = {  
            id:'',  
            items:[],  
            isLoaded:false
        };    
        this.initialState = this.state;    
    }   
    

componentDidMount(){
    fetch('http://localhost:8080/payment/allpayments')
    .then(res => res.json())
    .then(result =>{
            this.setState({
                isLoaded:true,
                items:result
            });
        });
    }

    render() {
       const{items} =this.state;
      
        return (
            <div >
                
                <div className="jumbotron ">
                <h1 className=" display-4 text-center">Your Payment Information</h1>
                <br/>
                <div className="lead text-center">
                                 
                        {items.map(item =>(
                            
                        <p  key={item.id}>
                        Transaction ID : <strong>{item.transactionId}</strong>  <br/>  
                        Payment done using : <strong>{item.paymentGateway}</strong> <br/>
                        Mobile Number : <strong>{item.paytmNumber}</strong><br/>
                        Amount Paid : <strong>{item.actualAmount}</strong><br/>
                        
                        </p>
                        
                        ))} 
                      
                

                    {/* <p>Payment done using - <strong></strong> </p>
                    <p>UPI ID - <strong> </strong></p>
                    <p>Mobile Number - <strong></strong></p>
                    <p>Amount Paid - <strong></strong> </p> */}

                </div>
                </div>
               
                
            </div>
        )
    }
}
export default ProceedPage;