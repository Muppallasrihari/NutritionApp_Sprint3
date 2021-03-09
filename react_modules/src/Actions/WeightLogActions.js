import axios from 'axios';
import {GET_ERRORS,GET_WEIGHTLOGS,DELETE_WEIGHTLOG,GET_WEIGHTLOG} from './types';

export const createWeightLog=(weightLog,history)=> async dispatch=>{
    try{
const res=await axios.post("http://localhost:8080/weightLog",weightLog);
history.push("/weightLogDashboard");
    }catch(err){
dispatch({
    type:GET_ERRORS,
    payload:err.response.data
});

    }
}

export const getWeightLogs=()=> async dispatch =>{
    const res=await axios.get("http://localhost:8080/weightLog/all");
    dispatch({
        type:GET_WEIGHTLOGS,
        payload:res.data
    });

}



export const deleteWeightLog = id=>async dispatch =>{
    if(
        window.confirm("Are you sure to delete your weightLog. ")
    ){
        await axios.delete(`http://localhost:8080/weightLog/${id}`);
        dispatch({
            type:DELETE_WEIGHTLOG,
            payload:id
        });
    }
}


export const getWeightLog=(id,history)=> async dispatch=>{
    const res=await axios.get(`http://localhost:8080/weightLog/${id}`);
    dispatch({
        type:GET_WEIGHTLOG,
        payload:res.data
    });
}