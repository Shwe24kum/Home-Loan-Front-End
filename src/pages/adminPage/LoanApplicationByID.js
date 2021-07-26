import { AppNav } from "./AppNav";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoanAppByIdAction } from "../../redux/store";

export const LoanApplicationByID = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [applicationId, setApplicationId] = useState("");

  const update = (e) => setApplicationId(e.target.value);

  const addLoan = () => {
    dispatch(
      getLoanAppByIdAction({
        applicationId,
      })
    );
  };
  return (
    <div>
      <AppNav />
      <div>
      <h1 className="App">Loan Application By ID.</h1>
      <input
       
        type="text"
        value={applicationId}
        placeholder="search Id"
        onChange={update}
      />
      <input type="button" value="Search" onClick={addLoan} />

      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">applicationId</th>
            <th scope="col">adminApproval</th>
            <th scope="col">applicationDate</th>
            <th scope="col">financeVerificationApproval</th>
            <th scope="col">landVerificationApproval</th>
            </tr>
            </thead>
            <tbody className="alert alert-primary">
          {state.loannList && (
            <tr>
              <td>{state.loannList.applicationId}</td>
              <td>{state.loannList.adminApproval?.toString()}</td>
              <td>{state.loannList.applicationDate}</td>
              <td>{state.loannList.finananceVerificationApproval?.toString()}</td>
              <td>{state.loannList.landVerificationApproval?.toString()}</td>
              </tr>
              )}
              </tbody>
            <thead className="thead-dark">
            <tr>
            <th scope="col">loanAppliedAmount</th>
            <th scope="col">loanApprovedAmount</th>
            <th scope="col">monthlyExpenses</th>
            <th scope="col">othetMonthlyExpenses</th>
            <th scope="col">rateOfInterest</th>
            </tr>
            </thead>
            <tbody className="alert alert-primary">
          {state.loannList && (
            <tr>
              <td>{state.loannList.loanAppliedAmount}</td>
              <td>{state.loannList.loanApprovedAmount}</td>
              <td>{state.loannList.monthlyExpenses}</td>
              <td>{state.loannList.otherMonthlyExpenses}</td>
              <td>{state.loannList.rateOfInterest}</td>
              </tr>
              )}
              </tbody>
            <thead className="thead-dark">
            <tr>
            <th scope="col">status</th>
            <th scope="col">tenure</th>
            <th scope="col">totalAnnualIncome</th>
            <th scope="col">customerId</th>
            <th scope="col">user_id</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          {state.loannList && (
            <tr>
              <td>{state.loannList.status}</td>
              <td>{state.loannList.tenure}</td>
              <td>{state.loannList.totalAnnualIncome}</td>
              <td>{state.loannList.customer?.customerId}</td>
              <td>{state.loannList.customer?.user?.userId}</td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
};
