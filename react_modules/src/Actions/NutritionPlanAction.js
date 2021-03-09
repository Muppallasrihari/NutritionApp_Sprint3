import axios from 'axios';
import {GET_ERRORS,GET_PLANS,GET_PLAN,DELETE_PLAN} from './types';

export const createNutritionPlan =(project,history)=>async dispatch=>{
    try {
        const res =await axios.post("http://localhost:8080/api/healthify/nutritionplan",project);
        history.push("/nutridash");
    } catch (error) {
        dispatch({
            type:GET_ERRORS,
            payload:error.response.data
        });
    }
}

export const getPlans=()=>async dispatch=>{
    const res=await axios.get("http://localhost:8080/api/healthify/nutritionplan/all");
    dispatch({
        type:GET_PLANS,
        payload:res.data
    });
}

export const getPlan = (id,history) => async dispatch =>{
    const res=await axios.get(`http://localhost:8080/api/healthify/nutritionplan/${id}`);
    dispatch({
        type:GET_PLAN,
        payload:res.data
    });
}

export const deletePlan=id=>async dispatch=>{
    if(
        window.confirm("Are you sure? This will delete the nutrition plan and the data related to it.")
    ){ 
        await axios.delete(`http://localhost:8080/api/healthify/nutritionplan/${id}`);
        dispatch({
            type:DELETE_PLAN,
            payload:id
        });
    }
}