import React, { Component } from "react";
import { createExercise } from "../../Actions/ExerciseActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class AddExerciseForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      fields: {},
    };

    this.handleValidation = this.handleValidation.bind(this);
    this.onSubmitForFrontEndError = this.onSubmitForFrontEndError.bind(this);
  }

  onChange(field, event) {
    let fields = this.state.fields;
    fields[field] = event.target.value;
    this.setState({ fields });
  }

  // ----------------------------------FRONT END VALIDATION-----------------------
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    let cPattern = /^CARDIO[0-9]+$/; //for exIdentifier
    let sPattern = /^STRENGTH[0-9]+$/; //for exIdentifier

    let ctPattern = /^CARDIO$/;
    let stPattern = /^STRENGTH$/;

    //ExSets
    if (!fields["exSets"]) {
      formIsValid = false;
      errors["exSets"] = "Exercise Sets Required";
    }
    if (fields["exSets"] > 7) {
      formIsValid = false;
      errors["exSets"] = "Sets should be less than 7";
    }
    if (fields["exSets"] < 0 || fields["exSets"] == 0) {
      formIsValid = false;
      errors["exSets"] = "Sets should not be negative or zero";
    }

    //ExReps
    if (!fields["exReps"]) {
      formIsValid = false;
      errors["exReps"] = "Exercise Reps Required";
    }
    if (fields["exReps"] > 40) {
      formIsValid = false;
      errors["exReps"] = "Reps should be less than 40";
    }
    if (fields["exReps"] < 4 || fields["exReps"] == 0) {
      formIsValid = false;
      errors["exReps"] =
        "Reps should be greater than 4 and cannot be negative or zero";
    }

    //exType
    if (!fields["exType"]) {
      formIsValid = false;
      errors["exType"] = "Exercise Type Required";
    } else if (
      !ctPattern.test(fields["exType"]) &&
      !stPattern.test(fields["exType"])
    ) {
      formIsValid = false;
      errors["exType"] = "Exercise Type should be CARDIO or STRENGTH";
    }

    //--------------------exIdentifier validation--------------------
    if (!fields["exIdentifier"]) {
      formIsValid = false;
      errors["exIdentifier"] = "Exercise Identifier Required";
    } else if (
      !cPattern.test(fields["exIdentifier"]) &&
      !sPattern.test(fields["exIdentifier"])
    ) {
      //"^CARDIO\d+"  //^CARDIO[0-9]+$  if (fields["exIdentifier"] != pattern)
      formIsValid = false;
      errors["exIdentifier"] =
        "Exercise Identifier should be CARDIO or STRENGTH followed by a Number";
    }
    //--------------------exIdentifier validation--------------------

    //Workout1
    if (!fields["exPlan1"]) {
      formIsValid = false;
      errors["exPlan1"] = "Workout 1 Required";
    }

    //Workout2
    if (!fields["exPlan2"]) {
      formIsValid = false;
      errors["exPlan2"] = "Workout 2 Required";
    }

    //Workout3
    if (!fields["exPlan3"]) {
      formIsValid = false;
      errors["exPlan3"] = "Workout 3 Required";
    }

    //Workout4
    if (!fields["exPlan4"]) {
      formIsValid = false;
      errors["exPlan4"] = "Workout 4 Required";
    }

    //Workout5
    if (!fields["exPlan5"]) {
      formIsValid = false;
      errors["exPlan5"] = "Workout 5 Required";
    }

    //Setting State Front end validation
    this.setState({ errors: errors });
    return formIsValid;
  }

  //========================================FRONT END VALIDATION OVER==================

  onSubmitForFrontEndError(e) {
    e.preventDefault();
    this.handleValidation();

    const newExercise = {
      exType: this.state.fields["exType"],
      exIdentifier: this.state.fields["exIdentifier"],
      exSets: this.state.fields["exSets"],
      exReps: this.state.fields["exReps"],
      exPlan1: this.state.fields["exPlan1"],
      exPlan2: this.state.fields["exPlan2"],
      exPlan3: this.state.fields["exPlan3"],
      exPlan4: this.state.fields["exPlan4"],
      exPlan5: this.state.fields["exPlan5"],
    };
    this.props.createExercise(newExercise, this.props.history);
  }

  //  --------------------------- RENDER-------------------------------
  render() {
    return (
      <div>
        <div className="exercise">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">Add Exercise Routine</h5>
                <hr />
                <form onSubmit={this.onSubmitForFrontEndError}>
                  {/* EXERCISE_TYPE */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg bg-light" //"form-control form-control-lg"  //col-sm-6 for reduce
                      placeholder="Exercise Type"
                      name="exType"
                      onChange={this.onChange.bind(this, "exType")}
                      value={this.state.fields["exType"]}
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
                      onChange={this.onChange.bind(this, "exIdentifier")}
                      value={this.state.fields["exIdentifier"]}
                    />
                    <span style={{ color: "red" }}>
                      {this.state.errors["exIdentifier"]}
                    </span>
                  </div>

                  {/* EXERCISE_Sets */}
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control form-control-lg bg-light"
                      placeholder="Sets"
                      name="exSets"
                      onChange={this.onChange.bind(this, "exSets")}
                      value={this.state.fields["exSets"]}
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
                      onChange={this.onChange.bind(this, "exReps")}
                      value={this.state.fields["exReps"]}
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
                      onChange={this.onChange.bind(this, "exPlan1")}
                      value={this.state.fields["exPlan1"]}
                    >
                      <option value="" disabled selected hidden>
                        Workout 1
                      </option>
                      <option value="Barbell Press">Barbell Press</option>
                      <option value="Bench Press">Bench Press</option>
                      <option value="Butt Kicks">Butt Kicks</option>
                      <option value="High Knees">High Knees</option>
                      <option value="Lateral Shuffles">Lateral Shuffles</option>
                      <option value="Push Ups">Push Ups</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan1"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan2"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange.bind(this, "exPlan2")}
                      value={this.state.fields["exPlan2"]}
                    >
                      <option value="" disabled selected hidden>
                        Workout 2
                      </option>
                      <option value="Crab Walk">Crab Walk</option>
                      <option value="Front Raise">Front Raise</option>
                      <option value="Oblique Crunch">Oblique Crunch</option>
                      <option value="Shoulder Press">Shoulder Press</option>
                      <option value="Speed Skaters">Speed Skaters</option>
                      <option value="Lateral Raise">Lateral Raise</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan2"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan3"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange.bind(this, "exPlan3")}
                      value={this.state.fields["exPlan3"]}
                    >
                      <option value="" disabled selected hidden>
                        Workout 3
                      </option>
                      <option value="Burpees">Burpees</option>
                      <option value="DeadLift">Dead Lift</option>
                      <option value="Dumbell Row">Dumbell Row</option>
                      <option value="Jumping Jacks">Jumping Jacks</option>
                      <option value="Lateral PullDowns">Lat Pulldowns</option>
                      <option value="Toe Taps">Toe Taps</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan3"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan4"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange.bind(this, "exPlan4")}
                      value={this.state.fields["exPlan4"]}
                    >
                      <option value="" disabled selected hidden>
                        Workout 4
                      </option>
                      <option value="Dips">Dips</option>
                      <option value="Dumbell Curls">Dumbell Curls</option>
                      <option value="Lunge Jumps">Lunge Jumps</option>
                      <option value="Squat Jumps">Squat Jumps</option>
                      <option value="Toe Touch">Toe Touch</option>
                      <option value="Tricep Extension">Tricep Extension</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan4"]}
                    </span>
                  </div>

                  <div class="form-group">
                    <select
                      name="exPlan5"
                      className="form-control form-control-lg  bg-light"
                      onChange={this.onChange.bind(this, "exPlan5")}
                      value={this.state.fields["exPlan5"]}
                    >
                      <option value="" disabled selected hidden>
                        Workout 5
                      </option>
                      <option value="Barbell Squats">Barbell Squats</option>
                      <option value="Box Jumps">Box Jumps</option>
                      <option value="Leg Press">Leg Press</option>
                      <option value="Bulgarian Squats">Bulgarian Squats</option>
                      <option value="Plank Jacks">Plank Jacks</option>
                      <option value="Skipping">Skipping</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {this.state.errors["exPlan5"]}
                    </span>
                  </div>

                  <div className="text-center">
                    <input
                      type="submit"
                      value="ADD EXERCISE"
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

AddExerciseForm.propTypes = {
  createExercise: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { createExercise })(AddExerciseForm);
