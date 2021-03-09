import {GET_EXERCISES, GET_EXERCISE,DELETE_EXERCISE} from "../Actions/types";

const initialState = {
    exercises:[],
    exercise:{}
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_EXERCISES:
            return {
                ...state,
                exercises:action.payload
            }
        case GET_EXERCISE:
        return {
            ...state,
            exercise:action.payload
        }
        case DELETE_EXERCISE:
        return {
            ...state,
            exercises:state.exercises.filter(
                exercise=>exercise.exIdentifier!=action.payload
            )
        }

            default:
                return state;
    }
}

