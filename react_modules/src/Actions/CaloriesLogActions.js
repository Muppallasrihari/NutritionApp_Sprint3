import axios from 'axios';
import {GET_CALORIESLOGS, GET_ERRORS,GET_CALORIESLOG,DELETE_CALORIESLOG} from './types';

export const createCaloriesLog =(calorieslog,history)=>async dispatch=>{
    try{
        const res =await axios.post("http://localhost:8080/caloriesLog",calorieslog);
        history.push("/caloriesdashboard");
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        });
    }
};

export const getCaloriesLogs=()=> async dispatch=>{
    const res =await axios.get("http://localhost:8080/caloriesLog/all");
    dispatch({
        type:GET_CALORIESLOGS,
        payload:res.data
    });
}
export const getCaloriesLog =(id,history)=>async dispatch=>{
    const res=await axios.get(`http://localhost:8080/caloriesLog/${id}`);
    dispatch({
        type:GET_CALORIESLOG,
        payload:res.data
    });
}
export const deleteCaloriesLog =  id => async dispatch =>{
    if(
        window.confirm("Are you sure? This will delete the CaloriesLog and the data related to it.")
    ){
        await axios.delete(`http://localhost:8080/caloriesLog/${id}`);
        dispatch({
            type:DELETE_CALORIESLOG,
            payload:id
        });
    }
}