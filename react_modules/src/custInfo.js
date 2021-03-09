import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class custInfo extends Component {
    render() {
        return (
            
            <div className="container-fluid">
                <br/>
                <h1 className="display-4 text- text-center">Healthify Plans</h1>
                <div className="text-center">
            <blockquote className="blockquote">
            <small>  Walk through Healthify - Build your health </small>
            </blockquote>
            </div>
            <br/>
            <div className="text-center">
              <Link to={`/nutriplans/`}>
                  <button className="btn btn-dark btn-lg">Nutrition Plans</button></Link><br/><br/><br/>
             <Link to={`/dietplans/`}>
                 <button className="btn btn-dark btn-lg">Diet Plans </button></Link><br/><br/><br/>
                 <Link to={`/explans/`}>
                 <button className="btn btn-dark btn-lg">Exercise Plans</button></Link>
           </div>
           </div>
        )
    }
}
