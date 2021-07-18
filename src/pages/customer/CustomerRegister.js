import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomerAction } from "../../redux/store";
import { RegNav } from "../adminPage/RegNav";

export const CustomerRegister = () => {
  const dispatch = useDispatch();
  
  const [aadharNumber, setAadharNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nationality, setNationality] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [userId, setUserId] = useState("");
  // const [role, setRole] = useState("");

  // const updateRole = (e) => setRole(e.target.value);
  const updateAadharNumber = (e) => setAadharNumber(e.target.value);
  const updateCustomerName = (e) => setCustomerName(e.target.value);
  const updateDateOfBirth = (e) => setDateOfBirth(e.target.value);
  const updateEmail = (e) => setEmail(e.target.value);
  const updateGender = (e) => setGender(e.target.value);
  const updateMobileNumber = (e) => setMobileNumber(e.target.value);
  const updateNationality = (e) => setNationality(e.target.value);
  const updatePanNumber = (e) => setPanNumber(e.target.value);
  const updateUserId = (e) => setUserId(e.target.value);

  const addNewCustomer = () => {
    dispatch(
      createCustomerAction({
        aadharNumber,
        customerName,
        dateOfBirth,
        email,
        gender,
        mobileNumber,
        nationality,
        panNumber,
        user: {
          userId,
          // role,
        },
      })
    );

    // clear the form
    setUserId("");
    setAadharNumber("");
    setCustomerName("");
    setDateOfBirth("");
    setEmail("");
    setGender("");
    setMobileNumber("");
    setNationality("");
    setPanNumber("");
  };

  return (
    <div>
      <RegNav/>
      <div className="alert alert-secondary ">
        <h3>Register as Customer</h3>
      </div>
      <div className="container  pt-1 pb-5 w-50 ">
        <form className="mx-4 alert alert-primary">
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>aadhar :</h4>
            </label>
            <input
              type="text"
              value={aadharNumber}
              onChange={updateAadharNumber}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your aadhar number"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Name :</h4>
            </label>
            <input
              type="text"
              value={customerName}
              onChange={updateCustomerName}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your customer name"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>D.O.B :</h4>
            </label>
            <input
              type="text"
              value={dateOfBirth}
              onChange={updateDateOfBirth}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Date of Birth"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Email :</h4>
            </label>
            <input
              type="text"
              value={email}
              onChange={updateEmail}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Gender :</h4>
            </label>
            <input
              type="text"
              value={gender}
              onChange={updateGender}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your gender"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Mobile no :</h4>
            </label>
            <input
              type="text"
              value={mobileNumber}
              onChange={updateMobileNumber}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Nationality :</h4>
            </label>
            <input
              type="text"
              value={nationality}
              onChange={updateNationality}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Enter your nationality"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Pancard No :</h4>
            </label>
            <input
              type="text"
              value={panNumber}
              onChange={updatePanNumber}
              className="form-control form-control-lg mb-1  col-sm-7"
              placeholder="Enter your pan"
            />
          </div>
          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>UserId :</h4>
            </label>
            <input
              type="text"
              value={userId}
              onChange={updateUserId}
              className="form-control form-control-lg mb-1  col-sm-7"
              placeholder="Enter userid"
            />
          </div>
          {/* <div>
            <input
              type="text"
              value={role}
              onChange={updateRole}
              className="form-control form-control-lg mb-1"
              placeholder="Enter Your role id"
            />
          </div> */}

          <div>
            <input
              type="button"
              onClick={addNewCustomer}
              value="Add Customer"
              className="btn btn-lg btn-dark w-100 mb-2"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
