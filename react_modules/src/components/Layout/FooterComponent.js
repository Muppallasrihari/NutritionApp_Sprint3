import React, { Component } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

 class FooterComponent extends Component {
            render()
            {
              return (
               // <nav className=" text-align-center navbar navbar-expand-sm navbar-dark bg-aqua mb-3 FooterColor">
              //  <footer  className=" text-center bg-dark  FooterColor footer">
              //     <h4 className="text-white">NutritionApp Pvt. Ltd</h4>
              //   </footer>
              <React.Fragment>
              <footer className="bg-dark text-center text-white">
  
            <div className="container p-4 pb-0">
    
          <section className="mb-4">
      
      <a className="btn  btn-floating m-1 " 
      href="#!" role="button" 
      style={{backgroundColor: "#3b5998" , borderRadius:"70px"}}
        ><i className="fab fa-facebook-f"></i
      ></a>

      
      <a className="btn  btn-floating m-1" 
       style={{'background-color': '#55acee', borderRadius:"70px" }}
      href="#!" role="button"
        ><i className="fab fa-twitter"></i
      ></a>

      
      <a className="btn btn-floating m-1" href="#!"
       role="button"
       style={{backgroundColor: "#dd4b39" , borderRadius:"70px"}}
        ><i className="fab fa-google"></i
      ></a>

     
      <a className="btn btn-floating m-1" 
      href="#!" role="button"
      style={{backgroundColor: "#ac2bac", borderRadius:"70px" }}
        ><i className="fab fa-instagram"></i
      ></a>

     
      <a className="btn  btn-floating m-1" href="#!" 
      role="button"
      style={{backgroundColor: "#0082ca" , borderRadius:"70px"}}
        ><i className="fab fa-linkedin-in"></i
      ></a>

     
      <a className="btn  btn-floating m-1" 
      href="#" role="button"
      style={{backgroundColor: "#333333" , borderRadius:"70px"}}
        ><i className="fab fa-github"></i
      ></a>
    </section>
   
 
  <div className="text-center p-3" style={{'background-color': "rgba(0, 0, 0, 0.2)"}}>
    © 2021 Copyright :
    <a className="text-white" href="#"> Healthify App</a>
  </div>
  
      </div>
      </footer>
      </React.Fragment>
              )
            }
          }
export default FooterComponent;