import React from 'react';
import { RegNav } from '../adminPage/RegNav';

export const FinanceOfficerReg=()=> {
    return (
      <div>
        <RegNav/>
       <div className="row bg-dark text-light d-flex align-items-center"
       style={{height: "100vh"}}>
       <div className="col-md-4 col-sm-4 col-xs-12"> </div>
         <div className="col=md-4 col-sm-5 col-xs-12">
          <form>
             <h1 className="bg-dark text-light p-3">
               FinanceOfficerRegistration  </h1>
            
             <div className="form-group">
              <label>UserId</label>
              <input type="userid" className="form-control"
              placeholder="Enter UserId" />
             </div>
             <div className="form-group">
              <label>FinOfficerName</label>
              <input type="finofficername" className="form-control" 
              placeholder="Enter FinOfficerName" />
              </div>
              <div className="form-group">
              <label>FinOfficerContact</label>
              <input type="finofficercontact" className="form-control" 
              placeholder="Enter FinOfficerContact" />
              </div>
              
              <input type="button" className="bg-dark text-light p-3" 
              value="SignUp" />
         </form>
         
        </div>
      </div>
   </div> 
        
    );
};