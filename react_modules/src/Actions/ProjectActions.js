import axios from "axios";
import { GET_ERRORS,GET_CUSTOMERS,GET_CUSTOMER, DELETE_CUSTOMER} from "./types";
export const createCustomer = (Customer, history) => async (dispatch) => {
  try {
   const res = await axios.post("http://localhost:8080/api/customer",Customer);
    history.push("/SignIn");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const createCustomer2 = (Customer, history) => async (dispatch) => {
try {
  const res = await axios.get("http://localhost:8080/api/customer/all",Customer);
   history.push("/dashboard");
 } catch (error) {
   dispatch({
     type: GET_ERRORS,
     payload: error.response.data,
   });
 }
};
export const createCustomer1 = (Customer, history) => async (dispatch) => {
  try{ 
  history.push("/dashboard");
   } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getProject = (id,history) => async dispatch =>{
  const res=await axios.get(`http://localhost:8080/api/customer/${id}`);
  dispatch({
      type:GET_CUSTOMER,
      payload:res.data
  });
}
export const createCustomer1admin = (Customer, history) => async (dispatch) => {
  try{ 
  history.push("/admindashboard");
   } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
export const getAllCustomers = () => async (dispatch) => {
  const res = await axios.get("http://localhost:8080/api/customer/all");
  dispatch({
    type: GET_CUSTOMERS,
    payload: res.data,
  });
};

export const deleteCustomer =id => async(dispatch)=>{
  await axios.delete(`http://localhost:8080/api/customer/${id}`);
  dispatch({
    type:DELETE_CUSTOMER,
    payload:id,
  });
}
export const createDietPlan = (DietPlan, history) => async (dispatch) => {
  try {
    const res = await axios.post(
      "http://localhost:8080/api/dietPlan/diet",
      DietPlan
    );
    history.push("/dashboard");
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const makePayment = (paymentIdentifier,Payment,history) => async (dispatch) => {
    try {
      const res = await axios.post(`http://localhost:8080/payment/${paymentIdentifier}`,
        Payment
      );
      history.push("/otppage");
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };
  export const takePayment = (paymentIdentifier,history) => async (dispatch) => {
    try {
      const res = await axios.get(`http://localhost:8080/payment/${paymentIdentifier}`
      );
      history.push("/dashboard");
    } catch (error) {
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  };

