import axios from 'axios';
import {GET_ERRORS, GET_DIETPLANS, GET_DIETPLAN, DELETE_DIETPLAN} from './types';
export const createDietPlan = (dietplan,history)=>async dispatch=>{

    try{
        const res = await axios.post("http://localhost:8080/api/dietPlan/diet",dietplan);
        history.push("/dietplandashboard");
    }catch(error){
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data,
        });
    }
}

export const getDietplans =()=> async dispatch => {
    const res = await axios.get("http://localhost:8080/api/dietPlan/all");
    dispatch({
        type:GET_DIETPLANS,
        payload:res.data
    });
}

export const getDietPlan = (foodType,history) => async dispatch =>{
    const res=await axios.get(`http://localhost:8080/api/dietPlan/diet/${foodType}`);
    dispatch({
        type:GET_DIETPLAN,
        payload:res.data
    });
}

export const deleteDietPlan = id => async dispatch =>{
    if(
        window.confirm("Are you sure? This will delete the diet plan and the data related to it.")
    ){
        await axios.delete(`http://localhost:8080/api/dietPlan/${id}`);
        dispatch({
        type:DELETE_DIETPLAN,
        payload:id
        });
    }
}
