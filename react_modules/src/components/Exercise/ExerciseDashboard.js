import React, { Component } from "react";
import AddExerciseButton from "../../components/Exercise/AddExerciseButton";
import { deleteExercise } from "../../Actions/ExerciseActions";
import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { getExercises } from "../../Actions/ExerciseActions";
import { connect } from "react-redux";

class ExerciseDashboard extends Component {
  componentDidMount() {
    this.props.getExercises();
  }

  onDeleteClick = (id) => {
    this.props.deleteExercise(id);
  };

  render() {
    const exercises = this.props.exercises.exercises;
    return (
      <div className="exercise">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-122">
              <h1 className="display-4 text-center"></h1>
              <h5 className="display-4 text-center">Exercise Dashboard</h5>
              <br />

              <div className="text-center">
                <AddExerciseButton />
              </div>
              <br />
              <hr />

              
              <div className=" table-responsive-xl">
                <table className="table table-hover">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col" className="text-center">
                        ID
                      </th>
                      <th scope="col" className="text-center">
                        PLAN
                      </th>
                      <th scope="col" className="text-center">
                        TYPE
                      </th>
                      <th scope="col" className="text-center">
                        SETS
                      </th>
                      <th scope="col" className="text-center">
                        REPS
                      </th>
                      <th scope="col" className="text-center text-nowrap">
                        WORKOUT 1
                      </th>
                      <th scope="col" className="text-center text-nowrap">
                        WORKOUT 2
                      </th>
                      <th scope="col" className="text-center text-nowrap">
                        WORKOUT 3
                      </th>
                      <th scope="col" className="text-center text-nowrap">
                        WORKOUT 4
                      </th>
                      <th scope="col" className="text-center text-nowrap">
                        WORKOUT 5
                      </th>
                      <th scope="col" className="text-center">
                        UPDATE
                      </th>
                      <th scope="col" className="text-center">
                        DELETE
                      </th>
                    </tr>
                  </thead>

                  {exercises.map((exercise) => (
                    <tbody>
                      <tr>
                        <td className="text-center">{exercise.id}</td>
                        <td className="text-center">{exercise.exIdentifier}</td>
                        <td className="text-center">{exercise.exType}</td>
                        <td className="text-center">{exercise.exSets}</td>
                        <td className="text-center">{exercise.exReps}</td>
                        <td className="text-center">{exercise.exPlan1}</td>
                        <td className="text-center">{exercise.exPlan2}</td>
                        <td className="text-center">{exercise.exPlan3}</td>
                        <td className="text-center">{exercise.exPlan4}</td>
                        <td className="text-center">{exercise.exPlan5}</td>
                        <td>
                          <Link
                            to={`/updateExercise/${exercise.exIdentifier}`}
                            style={{ textDecoration: "none" }}
                          >
                            <span className=" update btn btn-outline-success">
                              <b>UPDATE</b>
                            </span>
                          </Link>
                        </td>
                        <td
                          onClick={this.onDeleteClick.bind(
                            this,
                            exercise.exIdentifier
                          )}
                        >
                          <span className="delete btn btn-outline-danger">
                            <b>DELETE</b>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ExerciseDashboard.propTypes = {
  exercises: PropTypes.object.isRequired,
  getExercises: PropTypes.func.isRequired,
  deleteExercise: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  exercises: state.exercises,
});
export default connect(mapStateToProps, { deleteExercise, getExercises })(
  ExerciseDashboard
);
