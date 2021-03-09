import React, { Component } from 'react'

class CalculateBMI extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          heightFeet: '',
          heightInch: '',
          weight: '',
        }
        this.handleHeightFeetChange = this.handleHeightFeetChange.bind(this);
        this.handleHeightInchChange = this.handleHeightInchChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.calBMI = this.calBMI.bind(this);
    }

    handleHeightFeetChange(event){
        this.setState({
          heightFeet: event.target.value
        });
      }
    
    handleHeightInchChange(event){
        this.setState({
          heightInch: event.target.value
        });
    }  

    handleWeightChange(event){
        this.setState({
          weight: event.target.value
        });
      }

    calBMI(){
        if (this.state.weight && this.state.heightFeet && this.state.heightInch){
          // BMI Formula = (WEIGHT[in pounds] / (HEIGHT[in inches] * HEIGHT[in inches])) * 703;
        let INCHES_IN_FEET = 12;
    
        var height = Number(this.state.heightFeet);
              // convert feet to inches
            height *= INCHES_IN_FEET;
              // add the inches input field
            height += Number(this.state.heightInch);
    
        let weight = this.state.weight;
    
        var bmi = (weight * 2.2 / (height * height)) * 703;
            bmi = bmi.toFixed(2);

        return bmi;
        }
      }  
      getBMIResults(bmi){
        let bmiResults = {
          label: '',
          alertClass: '',
        };
        if (bmi <= 16.0){
            bmiResults.label = 'Severly Underweight';
            bmiResults.alertClass = 'alert-danger';
          } 
        else if (bmi <= 18.5){
          bmiResults.label = 'Underweight';
          bmiResults.alertClass = 'alert-warning';
        } 
        else if (bmi <= 24.9) {
          bmiResults.label = 'Normal weight';
          bmiResults.alertClass = 'alert-success';
        }
        else if (bmi <= 29.9){
          bmiResults.label = 'Overweight';
          bmiResults.alertClass = 'alert-warning';
        }
        else if (bmi >= 30) {
          bmiResults.label = 'Obesity';
          bmiResults.alertClass = 'alert-danger';
        } else {
          bmiResults.label = '';
          bmiResults.alertClass = 'alert-dark';
        }
    
        return bmiResults;
      }
    // onSubmit=(event)=>{
    //     event.preventDefault();
    //    // alert('BMI INDEX '+this.calBMI());  

    //   console.log( this.calBMI());
    //   console.log(this.getBMIResults(this.bmi));

    // }
    render() {
        let bmi = this.calBMI();
        let results = this.getBMIResults(bmi);
        return (
            
            <div className="container">
                 <form autoComplete="off" onSubmit={this.onSubmit} >
                <h1 className="text-center">Calculate BMI Index</h1>
                <div className="jumbotron">
                <div className="container">
                <div className="row">
                <div className="form-group  col-md-5">
               
                <label >Enter your weight(in kg)</label>
                <input  className="form-control"
                 type="text"  id="bmiWeight"
                 placeholder="Enter your weight in kgs"
                 value={this.state.weight}
                 onChange={this.handleWeightChange}/>
                </div>
                </div>
                <div className="row">
                <div className="form-group  col-md-4">

                <label >Enter your Height</label>          
                <input  className="form-control" min="0"
                max="11"
                type="number"  id="bmiHeightFeet"
                value={this.state.heightFeet}
                onChange={this.handleHeightFeetChange}
                placeholder="Feet" />
                
                </div>
                <div className="form-group  col-md-4">

                <label >Enter your height</label>
                <input  className="form-control" min="0" max="11" 
                type="number" id="bmiHeightInch"
                value={this.state.heightInch}
                onChange={this.handleHeightInchChange}
                placeholder="Inches" />
                
                </div>
                </div>
                <div className={this.getBMIResults(bmi).alertClass}>
                    <h1 className=" text-center font-weight-normal"> BMI Index = {this.calBMI()}</h1>
                    <h1 className="text-center">{this.getBMIResults(bmi).label}</h1>

                </div>
              </div>
              </div>
              </form>
              <div className="container text-center">
                <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col" className="table-dark">BMI</th>
                    <th scope="col" className="table-dark">Category</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="table-danger"> &lt;16.0</td>
                        <td className="table-danger">Severly Underweight</td>
                    </tr>
                    <tr>
                        <td className="table-warning">16.0-18.4</td>
                        <td className="table-warning">Underweight</td>
                    </tr>
                    <tr>
                        <td className="table-success">18.5-24.9</td>
                        <td className="table-success">Normal</td>
                    </tr>
                    <tr>
                        <td className="table-warning">25-29.9</td>
                        <td className="table-warning">Overweight</td>
                    </tr>
                    <tr>
                        <td className="table-danger"> &gt;= 30.0</td>
                        <td className="table-danger"> Obese</td>
                    </tr>
                </tbody>
                </table>
                </div>
            </div>

           
               
                
          
        );
    }

}
export default CalculateBMI;
