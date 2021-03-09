import axios from 'axios';
import {GET_ERRORS,GET_EXERCISES,GET_EXERCISE,DELETE_EXERCISE} from './types';

export const createExercise = (exercise,history)=>async dispatch=>{

    try{
        const res = await axios.post("http://localhost:8080/healthify/exercise",exercise);
        history.push("/exercisedashboard");
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });

    }
};

export const getExercises =()=> async dispatch => {
    const res = await axios.get("http://localhost:8080/healthify/exercise/all");
    dispatch({
        type:GET_EXERCISES,
        payload:res.data
    });
}


export const getExercise = (id,history) => async dispatch => {
    const res = await axios.get(`http://localhost:8080/healthify/exercise/${id}`);
    dispatch({
        type:GET_EXERCISE,
        payload:res.data
    });
}

export const deleteExercise =  id => async dispatch =>{
    if(
        window.confirm("Are you sure? This will delete your Workout Routine")
    ){
        await axios.delete(`http://localhost:8080/healthify/exercise/${id}`);
        dispatch({
            type:DELETE_EXERCISE,
            payload:id
        });
    }
}

















// export const getExercise = (id,history) => async dispatch =>{
//     const res=await axios.get(`/healthify/exercise/${exIdentifier}`);
//     dispatch({
//         type:GET_EXERCISE,
//         payload:res.data
//     });
// }

// export const deleteExercise =  id => async dispatch =>{
//     if(
//         window.confirm("Are you sure? This will delete all your Workouts")
//     ){
//         await axios.delete(`/healthify/exercise/${id}`);
//         dispatch({
//             type:DELETE_EXERCISE,
//             payload:id
//         });
//     }
// }
