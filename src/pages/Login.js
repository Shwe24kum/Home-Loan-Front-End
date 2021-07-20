import { useRef, useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody,MDBModalFooter } from 'mdbreact';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { authenticateUserAction } from "../redux/store";
import { Navigation } from "./Navigation";


export const Login = () => {

    const formEl = useRef();

    const dispatch = useDispatch();
  const state = useSelector((state) => state);
  let history = useHistory();

  const [userId, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const updateUserName = (e) => setUserName(e.target.value);
  const updatePassword = (e) => setPassword(e.target.value);
  const updateRole = (e) => setRole(e.target.value);

  const signInUser = (e) => {
    e.preventDefault();
    const isFormValid = formEl.current.checkValidity();
    if (isFormValid) {
      dispatch(
        authenticateUserAction({ 
          userId, 
          password, 
          role
        })
        );
        setUserName("");
    setPassword("");
    setRole("");
    } 
    else {
      e.stopPropagation();
      formEl.current.classList.add("was-validated");
    }
    if (state.authSuccess === true) {
    switch(document.getElementById('s1').value){

      case "admin":
        history.push("/AdminRegister");
        break;

        case "customer":
          history.push("/customer-list");
          break;

          case "financeOfficer":
          history.push("/AppNavs");
          break;

      default:
        history.push("/contact");
        break;
    }
  }
  };
    // REACT ROUTE DOM

    return (      
        <div>
      <Navigation />
    <MDBContainer 
    className='mt-4 d-flex justify-content-center'>
    <MDBRow style={{backgroundColor: 'black'}}>
      <MDBCol>
        <MDBCard className='bg-info' style={{
          width: '24rem',height: '31rem'
        }}>
          <MDBCardBody>
           <form className="needs-validation"
          ref={formEl}
          noValidate>
        <h1 
        className="text-center alert alert-info"> 
        Login </h1>

        {state.authFailure && (
          <h6 className="text-center alert alert-danger">
            Invalid Credentials
          </h6>
        )}

            <div className="form-group text-md-left">
            <label>User Id</label>
                <input type="text" 
                 value={userId}
                 onChange={updateUserName}
                placeholder="Enter UserId" 
                className="form-control"
                required
                 />
            </div>
            <div className="form-group text-md-left">
            <label>Password</label>
                <input type="password" 
                 value={password}
                 onChange={updatePassword}
                placeholder="Enter Password" 
                className="form-control"
                required
                 />
            </div>

            {/* dropdown is here */}
           <div className="form-group text-md-left">
           <label>Select Role</label>
              <select id="s1" onChange={updateRole} className="form-control" required >      
                <option value="admin" placeholder= "Select Role">Admin</option>
                <option value="customer">Customer</option>
                <option value="landOfficer">Land Officer</option>
                <option value="financeOfficer">Finance Officer</option>
              </select>
              </div>

              <div>
              
                <input 
                type="button"
                 value="Login"
                  onClick={signInUser}
                  className="btn btn-dark text-light" />
                 
            </div>       
        </form>
        <br></br>
        <MDBModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                  Not a member? 
                <a href="/register" style={{color:'#2e2e2e'}} className="ml-1">
                  Register
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
