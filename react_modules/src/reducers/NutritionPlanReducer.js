import {GET_PLANS,GET_PLAN,DELETE_PLAN} from '../Actions/types';

const initialState={
    plans:[],
    plan:{}
};

export default function (state=initialState,action){
    switch(action.type){
        case GET_PLANS:
            return{
                ...state,
                plans:action.payload
            }
            case GET_PLAN:
            return{
                ...state,
                plan:action.payload
            }
            case DELETE_PLAN:
            return{
                ...state,
                plans:state.plans.filter(
                    plan=>plan.planId!=action.payload
                )
            }
            default:
                return state;
    }
    
}