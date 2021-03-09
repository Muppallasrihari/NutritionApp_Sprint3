import React, { Component } from 'react';
import NewTest from './NewTest';

 class New1 extends React.Component {

    render() {
       const{Name}=this.props; 
       console.log(Name);
        return (
            <div>
                <h1>gh{Name}</h1>
              <NewTest/>  
            </div>
        )
    }
}
export default New1;