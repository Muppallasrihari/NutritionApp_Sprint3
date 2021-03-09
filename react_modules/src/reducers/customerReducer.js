import { GET_CUSTOMERS ,GET_CUSTOMER,DELETE_CUSTOMER} from "../Actions/types";
const initialState = {
  Customers: [],
  Customer: {},
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMERS:
      return {
        ...state,
        Customers:action.payload,
      };
      case GET_CUSTOMER:
        return {
          ...state,
          Customer:action.payload,
        };
        case DELETE_CUSTOMER:
        return {
            ...state,
            Customers:state.Customers.filter(
                Customer=>Customer.id!==action.payload
            )
        };
    default:
      return state;
    }
}