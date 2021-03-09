import {GET_DIETPLAN, GET_DIETPLANS, DELETE_DIETPLAN} from '../Actions/types';

const initialState = {
    dietplans:[],
    dietplan:{}
};

export default function(state=initialState, action){
    switch(action.type){
        case GET_DIETPLANS:
            return{
                ...state,
                dietplans:action.payload
            }
        case GET_DIETPLAN:
            return {
                ...state,
                dietplan:action.payload
            }
        case DELETE_DIETPLAN:
            return {
                ...state,
                dietplans:state.dietplans.filter(
                    dietplan=>dietplan.foodType!=action.payload
                )
            }
            default:
                return state;
    }
}
