
import {DELETE_WEIGHTLOG, GET_WEIGHTLOG, GET_WEIGHTLOGS} from "../Actions/types";
const initialState={
    weightLogs:[],
    weightLog:{}
};
export default function(state=initialState,action){
    switch(action.type){
        case GET_WEIGHTLOGS:
            return {
                ...state,
                weightLogs:action.payload
            }
            case DELETE_WEIGHTLOG:
                return{
                    ...state,
                    weightLogs:state.weightLogs.filter(
                        weightLog=>weightLog.weightId!=action.payload
                    )
                }
                case GET_WEIGHTLOG:
                    return{
                        ...state,
                        weightLog:action.payload
                    }
            default:
                return state;

    }
}