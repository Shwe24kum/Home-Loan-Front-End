import React, { useState } from 'react';
import { RegNav } from '../adminPage/RegNav';
import { useDispatch } from "react-redux";
import { createLandAction } from '../../redux/store';



export const LandOfficerReg = () => {

  const dispatch= useDispatch();
  
  
  const[officerName,setOfficerName] = useState("");
  const[officerContact,setOfficerContact] = useState("");
  const[userId,setUserId] = useState("");

  const updateOfficerName = (e) => setOfficerName(e.target.value);
  const updateOfficerContact = (e) => setOfficerContact(e.target.value);
  const updateUserId =(e) => setUserId(e.target.value);


  const addNewLandOfficer = () => {
    dispatch(
      createLandAction({
        officerName,
        officerContact,
        users:{
          userId,
        },
      })
    );

    setUserId("");
    setOfficerName("");
    setOfficerContact("");
  };
    return (
      <div>
        <RegNav/>
        <div className="alert alert-secondary ">
          <h3>Land Officer Registration</h3>
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
              <label>Officer Name</label>
              <input 
              type="text" 
              value={officerName}
              onChange={updateOfficerName}
              className="form-control" 
              placeholder="Enter OfficerName" />
              </div>
              <div className="form-group">
              <label>Officer Contact</label>
              <input 
              type="text"
              value={officerContact}
              onChange={updateOfficerContact}
               className="form-control"
               placeholder="Enter OfficerContact" />
              </div>
              <div>
              <input 
              type="button" 
              onClick={addNewLandOfficer}
              className="bg-dark text-light p-3"
               value="SignUp" />
               </div>
         </form>
         
        </div>
      </div>
   </div> 
        
    );
};