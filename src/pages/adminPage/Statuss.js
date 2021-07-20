import React, { useEffect, useRef, useState } from "react";
import { LoanApplicationDetails } from "./LoanApplicationDetails";
import { useDispatch, useSelector } from "react-redux";
import updatedref, { updateStatusAction } from "../../redux/store";
import { AppNav } from "./AppNav";


export function Statuss() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const formEl = useRef();

  const [user_id, setUser_Id] = useState(
    state.updatedref.customer?.user?.userId
  );
  const [applicationId, setApplicationId] = useState(
    state.updatedref.applicationId
  );
  const [adminApproval, setAdminApproval] = useState(
    state.updatedref.adminApproval
  );
  const [applicationDate, setApplicationDate] = useState(
    state.updatedref.applicationDate
  );
  const [financeVerificationApproval, setFinanceVerificationApproval] =
    useState(state.updatedref.finananceVerificationApproval);
  const [landVerificationApproval, setLandVerificationApproval] = useState(
    state.updatedref.landVerificationApproval
  );
  const [customerId, setCustomerId] = useState(
    state.updatedref.customer?.customerId
  );
  const [status, setStatus] = useState(state.updatedref.status);

  const updateStatus = (e) => setStatus(e.target.value);
  const updateApproval = (e) => setAdminApproval(e.target.value);

  //  dispatch(updateStatusAction(state.updateref))
  const putUpdate = () => {
    console.log("ankur");
    state.updatedref.adminApproval = true
    state.updatedref.status = status;
    dispatch(updateStatusAction(state.updatedref));
  };

  return (
    <div>
      <AppNav />
      <div className="App p-5 ">
        <input
          type="text"
          value={user_id}
          placeholder="UserID"
          className="p-2 container mb-3"
        />
        <br />

        <input
          type="text"
          value={applicationId}
          placeholder="applicationId"
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="text"
          value={adminApproval}
          placeholder="adminApproval"
          onChange={updateApproval}
          className="p-2 container mb-3"
        />
        <br />

        <input
          type="text"
          value={applicationDate}
          placeholder="applicationDate"
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="text"
          value={financeVerificationApproval}
          placeholder="financeVerificationApproval"
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="text"
          value={landVerificationApproval}
          placeholder="landVerificationApproval"
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="text"
          value={customerId}
          placeholder="customerId"
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="text"
          value={status}
          placeholder="status"
          onChange={updateStatus}
          className="p-2 container mb-3"
        />
        <br />
        <input
          type="button"
          value="update"
          className="bg-dark text-light"
          onClick={putUpdate}
        />
      </div>
    </div>
  );
}
