import React, { Component } from 'react';
import FooterComponent from './components/Layout/FooterComponent';
import {Link} from 'react-router-dom';

class homePage extends React.Component {
    render() {
        return (
            <React.Fragment>
            <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/><br/><br/><br/><br/>
            <h1 className="display-4 text-dark font-weight-bold text-center">Welcome to Healthify</h1>
            <div className="text-center">
            <blockquote class="blockquote">
            <small>- Push harder than yesterday if you want a different tomorrow.</small>
            </blockquote>
            </div>
        
            </div>
           <div className="container text-center"><br></br><br></br>
               <Link to="/bmi"><button className="btn btn-dark btn-lg">Calculate BMI</button>
               </Link>
           </div>

            </React.Fragment>
        )
    }
}
export default homePage;