import React, { useState } from 'react';
import { RegNav } from '../adminPage/RegNav';
import { useDispatch } from "react-redux";
import { createFinanceAction } from "../../redux/store";

export const FinanceOfficerReg = () => {

  const dispatch= useDispatch();
  
  
  const[finOfficerName,setFinOfficerName] = useState("");
  const[finOfficerContact,setFinOfficerContact] = useState("");
  const[userId,setUserId] = useState("");

  const updateFinOfficerName = (e) => setFinOfficerName(e.target.value);
  const updateFinOfficerContact = (e) => setFinOfficerContact(e.target.value);
  const updateUserId =(e) => setUserId(e.target.value);


  const addNewFinOfficer = () => {
    dispatch(
      createFinanceAction({
        finOfficerName,
        finOfficerContact,
        users:{
          userId,
        },
      })
    );

    setUserId("");
    setFinOfficerName("");
    setFinOfficerContact("");
  };


    return (
      <div>
        <RegNav/>
        <div className="alert alert-secondary ">
          <h3>Finance Officer Registration</h3>
        </div>
        <div className=" d-flex justify-content-center "
        style={{ height: "100vh" }}>
          <div className="w-50">
            <form className="mx-4 alert alert-primary">
            
             <div className="form-group">
              <label>UserId</label>
              <input 
              type="text"
              value={userId}
              onChange={updateUserId} 
              className="form-control"
              placeholder="Enter UserId" />
             </div>

             <div className="form-group">
              <label>FinOfficerName</label>
              <input 
              type="text"
              value={finOfficerName}
              onChange={updateFinOfficerName}
              className="form-control" 
              placeholder="Enter Your Name" />
              </div>

              <div className="form-group">
              <label>FinOfficerContact</label>
              <input 
              type="text"
              value={finOfficerContact}
              onChange={updateFinOfficerContact} 
              className="form-control" 
              placeholder="Enter Contact" />
              </div>
              
              <div>
              <input 
              type="button" 
              onClick={addNewFinOfficer}
              className="btn btn-lg btn-dark w-100 mb-2" 
              value="SignUp" />
              </div>
         </form>
        </div>
      </div>
   </div> 
        
    );
};