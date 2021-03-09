import React, { Component } from 'react';
import { Link } from 'react-router-dom';

 class HeaderComponent extends Component {
    render() {
        
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <Link className="navbar-brand" to="/home">Healthify</Link>
            <button className="navbar-toggler" type="button" 
                data-toggle="collapse" 
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse "></div>

            <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <li className="nav-item ">
            <Link  to="/home" className="nav-link" >Home <span className="sr-only">(current)</span>
            </Link>
            </li>
            
            {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Plans
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a href="/nutritionform" className="dropdown-item" >Nutrition Plan</a>
                <a className="dropdown-item" href="#">Diet Plan</a>
                <a className="dropdown-item" href="#">Exercise Plan</a>
            </div>
            </li> */}
            <li className="nav-item">
            <a className="nav-link " href="/custInfo">Plans</a>
            </li>
            
            <li className="nav-item">
            <Link to="/sign" className="nav-link " >Our Customers</Link>
            </li>
            </ul>
            <ul className="navbar-nav">
            <div className="collapse navbar-collapse navbar-right"></div>
          
            <li className="nav-item">
            <Link to="/addcustomer" className="nav-link " >Register</Link>
            </li>
            <li className="nav-item">
            <Link to="/SignIn" className="nav-link ">Login </Link>
            </li>
            <li className="nav-item">
            <Link to="/Admin" className="nav-link ">Admin Login </Link>
            </li>
        </ul>
        </div>
        


    </nav>
        )
    }
}
export default HeaderComponent;