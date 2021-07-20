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
      <h1 className="App">Loan Application By ID.</h1>
      <input
       
        type="text"
        value={applicationId}
        placeholder="search Id"
        onChange={update}
      />
      <input className="App-header" type="button" value="Search" onClick={addLoan} />

      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">applicationId</th>
            <th scope="col">adminApproval</th>
            <th scope="col">applicationDate</th>
            <th scope="col">financeVerificationApproval</th>
            <th scope="col">landVerificationApproval</th>
            <th scope="col">loanAppliedAmount</th>
            <th scope="col">loanApprovedAmount</th>
            <th scope="col">monthlyExpenses</th>
            <th scope="col">othetMonthlyExpenses</th>
            <th scope="col">rateOfInterest</th>
            <th scope="col">status</th>
            <th scope="col">tenure</th>
            <th scope="col">totalAnnualIncome</th>
            <th scope="col">customerId</th>
            <th scope="col">user_id</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          {state.loanList && (
            <tr>
              {/* <th scope="row">1</th> */}
              <td>{state.loanList.applicationId}</td>
              <td>{state.loanList.adminApproval?.toString()}</td>
              <td>{state.loanList.applicationDate}</td>
              <td>
                {state.loanList.finananceVerificationApproval?.toString()}
              </td>
              <td>{state.loanList.landVerificationApproval?.toString()}</td>
              <td>{state.loanList.loanAppliedAmount}</td>
              <td>{state.loanList.loanApprovedAmount}</td>
              <td>{state.loanList.monthlyExpenses}</td>
              <td>{state.loanList.otherMonthlyExpenses}</td>
              <td>{state.loanList.rateOfInterest}</td>
              <td>{state.loanList.status}</td>
              <td>{state.loanList.tenure}</td>
              <td>{state.loanList.totalAnnualIncome}</td>
              <td>{state.loanList.customer?.customerId}</td>
              <td>{state.loanList.customer?.user?.userId}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
