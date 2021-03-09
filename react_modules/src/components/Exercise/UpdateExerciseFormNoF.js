import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getExercise } from "../../Actions/ExerciseActions";
import { createExercise } from "../../Actions/ExerciseActions";

class UpdateExerciseFormNoF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      id: "",
      exIdentifier: "",
      exType: "",
      exSets: "",
      exReps: "",
      exPlan1: "",
      exPlan2: "",
      exPlan3: "",
      exPlan4: "",
      exPlan5: "",
    };

    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleValidation=this.handleValidation.bind(this);
  }

  handleValidation(){
      const{id,
      exIdentifier,
      exType,
      exSets,
      exReps,
      exPlan1,
      exPlan2,
      exPlan3,
      exPlan4,
      exPlan5
  }=this.state;
  let errors={};
  let formIsValid =true;
  if(!exIdentifier){
      formIsValid=false;
      errors["exIdentifierError"] = "exIdentifier Required"
  }
this.setState({errors:errors});
return formIsValid=true;


}

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    if(this.handleValidation()){
    const updateExercise = {
      id: this.state.id,
      exIdentifier: this.state.exIdentifier,
      exType: this.state.exType,
      exSets: this.state.exSets,
      exReps: this.state.exReps,
      exPlan1: this.state.exPlan1,
      exPlan2: this.state.exPlan2,
      exPlan3: this.state.exPlan3,
      exPlan4: this.state.exPlan4,
      exPlan5: this.state.exPlan5,
    };
    this.props.createExercise(updateExercise, this.props.history);
}

   
  }

  componentWillReceiveProps(nextProps) {
    const {
      id,
      exIdentifier,
      exType,
      exSets,
      exReps,
      exPlan1,
      exPlan2,
      exPlan3,
      exPlan4,
      exPlan5,
    } = nextProps.exercise;
    this.setState({
      id,
      exIdentifier,
      exType,
      exSets,
      exReps,
      exPlan1,
      exPlan2,
      exPlan3,
      exPlan4,
      exPlan5,
    });
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getExercise(id, this.props.history);
  }

  //  --------------------------- RENDER-------------------------------

  render() {
    const { errors } = this.state;
    const {exIdentifierError} = this.state.errors;
    return (
      <div>
        <div className="exercise">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Update Exercise Routine
                </h5>
                <hr />
                <form onSubmit={this.onSubmit}>
                  {/* EXERCISE_TYPE */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light" //"form-control form-control-lg"  //col-sm-6 for reduce
                      placeholder="Exercise Type"
                      name="exType"
                      // disabled
                      onChange={this.onChange}
                      value={this.state.exType}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["exType"]}
                    </span>
                  </div>

                  {/* EXERCISE_Identifier */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg  bg-light"
                      placeholder="Exercise Identifier"
                      name="exIdentifier"
                      //disabled
                      onChange={this.onChange}
                      value={this.state.exIdentifier}
                      />
                      
                      {exIdentifierError&&(<div className="invalid-feedback">
                         {exIdentifierError}</div> )} 
                   
                    {/* <span style={{ color: "red" }}>
                      {this.state.errors["exIdentifier"]}
                    </span> */}
                  </div>

                  {/* EXERCISE_Sets */}
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control form-control-lg bg-light"
                      placeholder="Sets"
                      name="exSets"
                      onChange={this.onChange}
                      value={this.state.exSets}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["exSets"]}
                    </span>
                  </div>

                  {/* EXERCISE_Reps */}
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control form-control-lg bg-light"
                      placeholder="Reps"
                      name="exReps"
                      onChange={this.onChange}
                      value={this.state.exReps}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["exReps"]}
                    </span>
                  </div>
                  {/*------------------- Text Field Workouts ------------------*/}
                  {/* saved below */}

                  {/*------------------- select tag Workouts ------------------*/}
                  <div class="form-group">
                    <select
                      name="exPlan1"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange}
                      value={this.state.exPlan1}
                    >
                      <option value="" disabled selected hidden>
                        Workout 1
                      </option>
                      <option value="BarbellPress">Barbell Press</option>
                      <option value="BenchPress">Bench Press</option>
                      <option value="ButtKicks">Butt Kicks</option>
                      <option value="HighKnees">High Knees</option>
                      <option value="LateralShuffles">Lateral Shuffles</option>
                      <option value="PushUps">Push Ups</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan1"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan2"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange}
                      value={this.state.exPlan2}
                    >
                      <option value="" disabled selected hidden>
                        Workout 2
                      </option>
                      <option value="CrabWalk">Crab Walk</option>
                      <option value="FrontRaise">Front Raise</option>
                      <option value="ObliqueCrunch">Oblique Crunch</option>
                      <option value="ShoulderPress">Shoulder Press</option>
                      <option value="SpeedSkaters">Speed Skaters</option>
                      <option value="LateralRaise">Lateral Raise</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan2"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan3"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange}
                      value={this.state.exPlan3}
                    >
                      <option value="" disabled selected hidden>
                        Workout 3
                      </option>
                      <option value="Burpees">Burpees</option>
                      <option value="DeadLift">Dead Lift</option>
                      <option value="DumbellRow">Dumbell Row</option>
                      <option value="JumpingJacks">Jumping Jacks</option>
                      <option value="LateralPullDowns">Lat Pulldowns</option>
                      <option value="ToeTaps">Toe Taps</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan3"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan4"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange}
                      value={this.state.exPlan4}
                    >
                      <option value="" disabled selected hidden>
                        Workout 4
                      </option>
                      <option value="Dips">Dips</option>
                      <option value="DumbellCurls">Dumbell Curls</option>
                      <option value="LungeJumps">Lunge Jumps</option>
                      <option value="SquatJumps">Squat Jumps</option>
                      <option value="ToeTouch">Toe Touch</option>
                      <option value="TricepExtension">Tricep Extension</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan4"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan5"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange}
                      value={this.state.exPlan5}
                    >
                      <option value="" disabled selected hidden>
                        Workout 5
                      </option>
                      <option value="BarbellSquats">Barbell Squats</option>
                      <option value="BoxJumps">Box Jumps</option>
                      <option value="LegPress">Leg Press</option>
                      <option value="BulgarianSquats">Bulgarian Squats</option>
                      <option value="PlankJacks">Plank Jacks</option>
                      <option value="Skipping">Skipping</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan5"]}
                    </span>
                  </div>

                  <div className="text-center">
                    <input
                      type="submit"
                      value="UPDATE EXERCISE"
                      className="btn btn-dark"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateExerciseFormNoF.propTypes = {
  getExercise: PropTypes.func.isRequired,
  createExercise: PropTypes.func.isRequired,
  exercise: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  exercise: state.exercises.exercise,
});

export default connect(mapStateToProps, { getExercise, createExercise })(
  UpdateExerciseFormNoF
);
