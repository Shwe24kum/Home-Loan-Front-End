import React from "react";
import { useRef } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBModalFooter } from 'mdbreact';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { createUserAction } from "../redux/store";
import { Navigation } from "./Navigation";


export const Register = ()=> {
  const dispatch = useDispatch();
  const formEl = useRef();
  let hist = useHistory();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const updateUserId = (e) => setUserId(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) =>setRole(e.target.value);

  const addNewUser = (e) => {
    e.preventDefault();
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
    dispatch(
      createUserAction({
          userId,
          password,
          role,
      })
    );
    setUserId("");
    setPassword("");
    setRole("");
    }
    else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
    switch(document.getElementById('s1').value){

      case "admin":
        hist.push("/AdminRegister");
        break;

      case "customer":
        hist.push("/customer-upsert");
        break;

      case "landofficer":
        hist.push("/LandOfficerReg");
        break;
      
      case "financeofficer":
        hist.push("/FinanceOfficerReg");
        break;
  

      default:
        hist.push("/register");
        break;

    }
    
  };


  return (
    <div >
      <Navigation />
    <MDBContainer className='mt-4 d-flex justify-content-center'>
    <MDBRow style={{backgroundColor: 'black'}}>
      <MDBCol > 
        <MDBCard className='bg-info' style={{
          width: '24rem',height: '31rem'
        }}>
          <MDBCardBody>
           <form className="needs-validation"
           
          ref={formEl}
          noValidate>
              <h1 className="text-center alert alert-info">
                Register </h1>
              
              <div className="form-group text-md-left">
                <label>User Id</label>
                <input type="text" 
                className="form-control"
                value={userId}
                onChange={updateUserId}
                placeholder="User Id" />
              </div>

              <div className="form-group text-md-left">
                <label>Password</label>
                <input type="password" 
                value={password}
                onChange={updatePassword}
                className="form-control" 
                placeholder="Enter Password" />
                </div>

                <div className="form-group text-md-left">
                <label>Select Role</label>
                <select id="s1" className="form-control" onChange={updateRole}>
                <option value="select role">-Select Role-</option>
                  <option value="admin">Admin</option>
                  <option value="customer">Customer</option>
                  <option value="landofficer">Land Officer</option>
                  <option value="financeofficer">Finance Officer</option>
                </select>
                </div>
                
                <input 
                type="button"  
                onClick={addNewUser}
                className="btn btn-dark text-light " 
                value="Register" />
           </form>
           <br></br>
           <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
              Have an account?
                <a href="/login" style={{color:'#2e2e2e'}} className="ml-1">
                  Login
                </a>
              </p>
            </MDBModalFooter>
     </MDBCardBody>
    </MDBCard>
    
  </MDBCol>
  </MDBRow>
  
  </MDBContainer> 
  </div>
  );
};