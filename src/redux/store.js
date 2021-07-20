import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  customerList: {},
  customerId: {},
  financeApproval:{},
  employeeList: [],
  loanAppList: [],
  loanApp:[],
  progress: false,
  authFailure: false,
  authSuccess: false,
  updateRef: {},
  updateLoan: {},
  loanList: {},
  aggrementList: undefined,
  ApplicationList: {},
  loannList: [],
  applicationnId: [],
  deleteId: [],
  updatedref: {},
};

const CUSTOMER_GET_ALL_ACTION_TYPE = "CUSTOMER_GET_ALL_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";
const LOAN_APPLICATION_GET_ALL_ACTION_TYPE = "LOAN_APPLICATION_GET_ALL_ACTION_TYPE";
const APPLICATION_UPDATE_RENDER_ACTION_TYPE = "APPLICATION_UPDATE_RENDER_ACTION_TYPE";
const LOAN_APPLICATION_GET_SUCCESS = "LOAN_APPLICATION_GET_SUCCESS";
const CUSTOMER_UPDATE_RENDER_ACTION_TYPE = "CUSTOMER_UPDATE_RENDER_ACTION_TYPE";
const LOAN_GET_ALL_ACTION_TYPE = "LOAN_GET_ALL_ACTION_TYPE";
const FINANCE_ACCEPT_RENDER_ACTION_TYPE="FINANCE_ACCEPT_RENDER_ACTION_TYPE";
const LOAN_GET_BY_ID_ACTION_TYPE = "LOAN_GET_BY_ID_ACTION_TYPE";
const LOAN_DELETE_BY_ID_ACTION_TYPE = "LOAN_DELETE_BY_ID_ACTION_TYPE";
const STATUS_UPDATE_RENDER_ACTION_TYPE = "STATUS_UPDATE_RENDER_ACTION_TYPE";



export const createUserAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/register`;
    await axios.post(url, payload);
    console.log(payload);
  };
};

export const createCustomerAction = (payload) => {
  console.log("hii customer",payload);
  return async (dispatch) => {
    const url = `http://localhost:8085/customer/addCustomer`;
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

export const updateFinanceApprovalAction = (payload) => {
  return async (dispatch) => {
    console.log("helooooooooooo",payload)
    const url = `http://localhost:8085/update/${payload.applicationId}`;
    await axios.put(url, payload);

    updateFinanceRenderAction({});

  };
};

export const updateStatusAction = (payload) => {
  console.log(payload);
  return async (dispatch) => {
    console.log("update wala", payload.applicationnId);
    const url = `http://localhost:8080/update/${payload.applicationnId}`;
    const response = await axios.put(url, payload);
    console.log(response.data);
    alert("List updated Successfully");
    dispatch({ type: "STATUS_UPDATE_ACTION_TYPE", payload: response.data });
  };
};

export const updateFinanceRenderAction = (payload) => {
  return { type: FINANCE_ACCEPT_RENDER_ACTION_TYPE, payload: payload };
};

export const getAllLoanAction = () => {
  return async (dispatch) => {
    const url = `http://localhost:8085/viewAll`;
    const response = await axios.get(url);
    console.log(response.data);
    dispatch({ type: "LOAN_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};
export const deleteLoanByIdAction = (payload) => {
  return async (dispatch) => {
    console.log("Delete wala", payload.applicationId);
    const url = `http://localhost:8080/delete/${payload.applicationId}`;
    const response = await axios.delete(url);
    console.log(response.data);
    alert("List Deleted Successfully");
    dispatch({ type: "LOAN_DELETE_BY_ID_ACTION_TYPE", payload: response.data });
  };
};
export const getAllCustomerAction = () => {
  return async (dispatch) => {
    let userRef = JSON.parse(localStorage.getItem("customerId"));
    console.log(userRef.userId);
    localStorage.getItem("customerList");
    const url = `http://localhost:8085/customer/view1/${userRef.userId}`;
    const response = await axios.get(url);
    console.log(response.data);

    console.log(response.data);
    dispatch({ type: "CUSTOMER_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const getLoanByIdAction = (payload) => {
  return async (dispatch) => {
    let loanRef = JSON.parse(localStorage.getItem("loanId"));
    if (loanRef != null) {
      const url = `http://localhost:8085/view/${loanRef.applicationId}`;
      const response = await axios.get(url);
      console.log(response.data);

      dispatch({
        type: "LOAN_APPLICATION_GET_ALL_ACTION_TYPE",
        payload: response.data,
      });
    } else {
      alert("please apply first!!1");
    }
  };
};
export const getLoanAppByIdAction = (payload) => {
  return async (dispatch) => {
    console.log("HIii", payload.applicationId);
    const url = `http://localhost:8080/view/${payload.applicationId}`;
    const response = await axios.get(url);
    console.log(response.data);
    dispatch({ type: "LOAN_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const createApplication = (payload) => {
  return async (dispatch) => {
    console.log("i am in create application method");
    console.log("loan id", payload);
    const url = `http://localhost:8085/Agreement/addLoanAgreement`;
    const response = await axios.post(url, payload);

    console.log("agreement api called", response.data);
    dispatch({
      type: "LOAN_APPLICATION_GET_SUCCESS",
      payload: response.data,
    });
  };
};

export const createApplyLoan = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/addLoan`;
    console.log(url);

    const response = await axios.post(url, payload);
    localStorage.setItem("loanId", JSON.stringify(response.data));

    let loanRef = JSON.parse(localStorage.getItem("loanId"));
    console.log("loan id he ye", loanRef.applicationId);
    // console.log(payload);
    console.log(response.data);
    // update the ui. TODO
  };
};

export const updateCustomerAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/customer/update/${payload.customerId}`;
    await axios.put(url, payload);
    updateRenderAction({}); 
  };
};

export const updateLoanAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/update/${payload.applicationId}`;
    await axios.put(url, payload);
    ApplicationRenderAction({});
  };
};

export const UpdatedRenderAction = (payload) => {
  return { type: STATUS_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

export const authenticateUserAction = (payload) => {
  return async (dispatch) => {
    const url = `http://localhost:8085/signIn`;
    const response = await axios.post(url, payload);
    if (response.data !== "") {
      dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });
      localStorage.setItem("authSuccess", "1");
      localStorage.setItem("customerId", JSON.stringify(response.data));
      const url = `http://localhost:8085/view/customer`;
      const response1 = await axios.post(url, payload);
      if (response1.data !== "") {
        localStorage.setItem("loanId", JSON.stringify(response1.data));
      }
    } else {
      console.log("I am not authenticated");
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
    localStorage.removeItem("authSuccess");
    localStorage.removeItem("loanId");
    localStorage.removeItem("customerId");
    dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: false });
  };
};

export const updateRenderAction = (payload) => {
  return { type: CUSTOMER_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

export const ApplicationRenderAction = (payload) => {
  return { type: APPLICATION_UPDATE_RENDER_ACTION_TYPE, payload: payload };
};

function CustomerReducer(state = initState, action) {
  switch (action.type) {
    case CUSTOMER_GET_ALL_ACTION_TYPE:
      return { ...state, customerList: action.payload };
    case AUTH_FAILURE_ACTION_TYPE:
      return { ...state, authFailure: action.payload };
    case AUTH_SUCCESS_ACTION_TYPE:
      return { ...state, authSuccess: action.payload };
    case LOAN_GET_ALL_ACTION_TYPE:
      return { ...state, loanAppList: action.payload };
    case FINANCE_ACCEPT_RENDER_ACTION_TYPE:
      return { ...state, loanApp: action.payload };
    case CUSTOMER_UPDATE_RENDER_ACTION_TYPE:
      return { ...state, updateRef: action.payload };
    case LOAN_APPLICATION_GET_ALL_ACTION_TYPE:
      return { ...state, loanList: action.payload };
    case LOAN_APPLICATION_GET_SUCCESS:
      return { ...state, aggrementList: action.payload };
    case APPLICATION_UPDATE_RENDER_ACTION_TYPE:
      return { ...state, updateLoan: action.payload };
      case LOAN_GET_BY_ID_ACTION_TYPE:
        return { ...state, applicationnId: action.payload };
      case LOAN_DELETE_BY_ID_ACTION_TYPE:
        return { ...state, deleteId: action.payload };
      case STATUS_UPDATE_RENDER_ACTION_TYPE:
        return { ...state, updatedref: action.payload };
      
    default:
      return state;
  }
}


//applied middleware for async operation
const store = createStore(CustomerReducer, applyMiddleware(thunk));
export { store };
