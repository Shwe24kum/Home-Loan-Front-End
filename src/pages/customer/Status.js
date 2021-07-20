import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { AppNav } from "./AppNav";
import { useSelector, useDispatch } from "react-redux";
import { getLoanByIdAction, createApplication, ApplicationRenderAction} from "../../redux/store";
import { useHistory } from "react-router-dom";

export function Status() {
  const history = useHistory();
  const { aggrementList, loanList } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getLoanByIdAction()), []);
  const [applicationId, setApplicationId] = useState("");
  const updateApplicationId = (e) => setApplicationId(e.target.value);
  console.log("phele", aggrementList);
  const AddApplication = () => {
    dispatch(
      createApplication({
        loanApplication: {
          applicationId,
        },
      })
    );
  };

  const updateLoan = (loanList) => {
    // console.log("Update Record", customerList);
    dispatch(ApplicationRenderAction(loanList));
    history.push("/apply-loan");
  };
  return (
    <div>
      <AppNav />
      <h1>I am in status page</h1>
      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Application Id</th>
            <th scope="col">Admin Approval</th>
            <th scope="col">Application Date</th>
            <th scope="col">Finance Approval</th>
            <th scope="col">Land Approval</th>
            <th scope="col">Applied Amount</th>
            <th scope="col">Approved Amount</th>
            </tr>
        </thead>
        <tbody className="alert alert-primary">
          <tr>
            <td>{loanList.applicationId}</td>
            <td>{loanList.adminApproval?.toString()}</td>
            <td>{loanList.applicationDate}</td>
            <td>{loanList.finananceVerificationApproval?.toString()}</td>
            <td>{loanList.landVerificationApproval?.toString()}</td>
            <td>{loanList.loanAppliedAmount}</td>
            <td>{loanList.loanApprovedAmount}</td>
            </tr>
        </tbody>
        <thead className="thead-dark">
            <tr>
            <th scope="col">Monthly Expense</th>
            <th scope="col">Other Expense</th>
            <th scope="col">Rate Of Interest</th>
            <th scope="col">Tenure</th>
            <th scope="col">Annual Income</th>
            <th scope="col">Customer Id</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
            <tr>
            <td>{loanList.monthlyExpenses}</td>
            <td>{loanList.otherMonthlyExpenses}</td>
            <td>{loanList.rateOfInterest}</td>
            <td>{loanList.tenure}</td>
            <td>{loanList.totalAnnualIncome}</td>
            <td>{loanList.customer?.customerId}</td>
            <td>{loanList.status}</td>
          </tr>
        </tbody>
      </table>
              <input
                type="button"
                value="update"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateLoan(loanList)}/>
      <br />
      <br />
      <br />
      <div>
        <label>Enter your Loan Application Id:-</label>
        <input
          type="text"
          placeholder="Application Id"
          onChange={updateApplicationId}
        />
        <input type="button" value="View" onClick={AddApplication} />
      </div>
      {aggrementList && (
        <table className="table ml-10">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Loan Agreement</th>
              <th scope="col">Due Date</th>
              <th scope="col">Loan Amount</th>
              <th scope="col">Emi Amount</th>
              <th scope="col">Interset Amount</th>
            </tr>
          </thead>
          <tbody className="alert alert-primary">
            <tr>
              <td>{aggrementList.loanAgreementId}</td>
              <td>{aggrementList.emi?.dueDate}</td>
              <td>{aggrementList.emi?.loanAmount}</td>
              <td>{aggrementList.emi?.emiAmount}</td>
              <td>{aggrementList.emi?.interestAmount}</td>

             
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}
