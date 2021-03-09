import {GET_CALORIESLOGS,GET_CALORIESLOG, DELETE_CALORIESLOG} from "../Actions/types";

const initialState={
    calorieslogs:[],
    calorieslog:{}
};
export default function (state=initialState,action){
    switch(action.type){
        case GET_CALORIESLOGS:
            return{
                ...state,
                calorieslogs:action.payload
            }
            case GET_CALORIESLOG:
            return{
                ...state,
                calorieslog:action.payload
            }
            case DELETE_CALORIESLOG:
              return {
            ...state,
            calorieslogs:state.calorieslogs.filter(
                calorieslog=>calorieslog.caloriesLogIdentifier!=action.payload
            )
        }
            default:
                return state;
    }
}
