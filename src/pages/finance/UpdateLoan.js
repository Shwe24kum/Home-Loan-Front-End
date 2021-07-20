import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFinanceApprovalAction } from "../../redux/store";
import { AppNavs } from "./AppNavs";

export const UpdateLoan = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  console.log("heloo",state.loanApp);
  console.log("Application Id",state.loanApp[0].applicationId);

  const [applicationId, setApplicationId] = useState(state.loanApp[0].applicationId);
  const [loanAppliedAmount, setLoanAppliedAmount] = useState(state.loanApp[0].loanAppliedAmount);
  const [loanApprovedAmount, setLoanApprovedAmount] = useState(state.loanApp[0].loanApprovedAmount);
  const [applicationDate, setApplicationDate] = useState(state.loanApp[0].applicationDate);
  const [landVerificationApproval, setLandVerificationApproval] = useState(state.loanApp[0].landVerificationApproval);
  const [finananceVerificationApproval, setFinananceVerificationApproval] = useState(state.loanApp[0].finananceVerificationApproval);
  const [adminApproval, setAdminApproval] = useState(state.loanApp[0].adminApproval);
  const [totalAnnualIncome, setTotalAnnualIncome] = useState(state.loanApp[0].totalAnnualIncomer);
  const [monthlyExpenses, setMonthlyExpenses] = useState(state.loanApp[0].monthlyExpenses);
  const [otherMonthlyExpenses, setOtherMonthlyExpenses] = useState(state.loanApp[0].otherMonthlyExpenses);
  const [rateOfInterest, setRateOfInterest] = useState(state.loanApp[0].rateOfInterest);
  const [tenure, setTenure] = useState(state.loanApp[0].tenure);
  const [status, setStatus] = useState(state.loanApp.status);
  const [customerId, setCustomerId] = useState(state.loanApp[0].customer.customerId);


  
  const updateFinananceVerificationApproval = (e) => setFinananceVerificationApproval(e.target.value);
  


  const updateApproval = () => {
    dispatch(
      updateFinanceApprovalAction([{
        applicationId,
        loanAppliedAmount,
        loanApprovedAmount,
        applicationDate,
        landVerificationApproval,
        finananceVerificationApproval,
        adminApproval,
        totalAnnualIncome,
        monthlyExpenses,
        otherMonthlyExpenses,
        rateOfInterest,
        tenure,
        status,
        customer:{
          customerId,
        },
      }])
    );
  };

  return (
    <div>
      <AppNavs />
      <div className="alert alert-secondary ">
          <h3>Approval</h3>
      </div>
      <div className="container  pt-1 pb-5 w-50 ">
        <form className="mx-4 alert alert-primary">

        <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Customer Id :</h4>
            </label>
            <input
              type="text"
              value={customerId}
              className="form-control form-control-lg mb-1  col-sm-7"/>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Application Id:</h4>
            </label>
            <input
              type="text"
              value={applicationId}
              className="form-control form-control-lg mb-1 col-sm-7"/>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Loan Approved Amount:</h4>
            </label>
            <input
              type="text"
              value={loanApprovedAmount}
              className="form-control form-control-lg mb-1 col-sm-7"/>
          </div>

          <div className="form-group row">
            <label className="col-sm-4 col-form-label">
              <h4>Finanance Verification Approval:</h4>
            </label>
            <input
              type="text"
              value={finananceVerificationApproval}
              onChange={updateFinananceVerificationApproval}
              className="form-control form-control-lg mb-1 col-sm-7"
              placeholder="Approval Status"/>
          </div>
          
          <div>
              <input
                type="button"
                onClick={updateApproval}
                value="ACCEPT"
                className="btn btn-lg btn-secondary w-100"
              />
          </div>
        </form>
      </div>
    </div>
  );
};