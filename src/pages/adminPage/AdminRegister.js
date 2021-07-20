import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createAdminAction } from "../../redux/store";
import { RegNav } from "./RegNav";


export const AdminRegister = () => {
  const dispatch= useDispatch();
  
  
  const[adminName,setAdminName] = useState("");
  const[adminContact,setAdminContact] = useState("");
  const[userId,setUserId] = useState("");

  const updateAdminName = (e) => setAdminName(e.target.value);
  const updateAdminContact = (e) => setAdminContact(e.target.value);
  const updateUserId =(e) => setUserId(e.target.value);


  const addNewAdmin = () => {
    dispatch(
      createAdminAction({
        adminName,
        adminContact,
        user:{
          userId,
        },
      })
    );

    setUserId("");
    setAdminName("");
    setAdminContact("");
  };

 
  return (
    <div>
      <RegNav/>
      <div className="alert alert-secondary ">
        <h3>Register as Admin</h3>
      </div>
      <div className=" d-flex justify-content-center "
        style={{ height: "100vh" }}>
        <div className="w-50">
          <form className="mx-4 alert alert-primary">
            <div>
              <input
                type="text"
                value={userId}
                onChange={updateUserId}
                className="form-control form-control-lg mb-1"
                placeholder="Enter your UserId"
              />
            </div>
            
            <div>
              <input
                type="text"
                value={adminName}
                onChange={updateAdminName}
                className="form-control form-control-lg mb-1 "
                placeholder="Enter your name"
              />
            </div>

            <div>
              <input
                type="text"
                value={adminContact}
                onChange={updateAdminContact}
                className="form-control form-control-lg mb-1"
                placeholder="Enter Your contact number"
              />
            </div>

            <div>
              <input
                type="button"
                onClick={addNewAdmin}
                value="Register"
                className="btn btn-lg btn-dark w-100 mb-2"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
