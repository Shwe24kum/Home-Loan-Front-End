import React from 'react';

export function LandOfficerReg() {
    return (
      <div>
       <div className="row bg-dark text-light d-flex align-items-center"
       style={{height: "100vh"}}>
       <div className="col-md-4 col-sm-4 col-xs-12"> </div>
         <div className="col=md-4 col-sm-5 col-xs-12">
          <form>
             <h1 className="bg-dark text-light p-3">LandOfficerRegistration  </h1>
            
             <div className="form-group">
              <label>UserId</label>
              <input type="userid" className="form-control"placeholder="Enter UserId" />
             </div>
             <div className="form-group">
              <label>OfficerName</label>
              <input type="officername" className="form-control" placeholder="Enter OfficerName" />
              </div>
              <div className="form-group">
              <label>OfficerContact</label>
              <input type="officercontact" className="form-control" placeholder="Enter OfficerContact" />
              </div>
              
              <input type="button" className="bg-dark text-light p-3" value="SignUp" />
         </form>
         
        </div>
      </div>
   </div> 
        
    );
};