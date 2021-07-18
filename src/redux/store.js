import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: [],
  employeeList: [],
  progress: false,
  authFailure: false,
  authSuccess: false,
};

const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";



export const createUserAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/register`;
    await axios.post(url, payload);
    console.log(payload);
  };
};

export const createAdminAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/addAdmin`;
    await axios.post(url, payload);
    console.log(payload);
  };
};

export const createFinanceAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/financers/addFinanceUser`;
    await axios.post(url, payload);
    console.log(payload);
  };
};

export const createLandAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/landUser/addLandUser`;
    await axios.post(url, payload);
    console.log(payload);
  };
};

export const authenticateUserAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/signIn`;
    const response = await axios.post(url, payload);
    if (response.data !== "") {
      console.log("I am authenticated")
      dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });
    } else {
      console.log("I am not authenticated")
      dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });
      setTimeout(() => {
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
      }, 5000);
    }
  };
};

export const signOutAction = () => {
  return async (dispatch) => {
    console.log("signout");
    dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: false });
  };
};

export const getAllCustomerAction = () => {
  return async (dispatch) => {
    const url = `http://localhost:8085/customer/viewCustomer/`;
    const response = await axios.get(url);
    console.log(response.data);
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const createCustomerAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/customer/addCustomer`;
    await axios.post(url, payload);
    console.log(payload);
    // update the ui. TODO
  };
};

export const createApplyLoan = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8080/addLoan`;
    await axios.post(url, payload);
    console.log(payload);
    // update the ui. TODO
  };
};

function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };
    default:
      return state;
  }
}


//applied middleware for async operation
const store = createStore(CustomerReducer, applyMiddleware(thunk));
export { store };
