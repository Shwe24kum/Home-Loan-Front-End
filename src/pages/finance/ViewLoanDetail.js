import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllLoanAction, updateFinanceRenderAction } from "../../redux/store";
import { AppNavs } from "./AppNavs";

export const ViewLoanDetail = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  // const [id, setId]= useState(1);
  useEffect(() => dispatch(getAllLoanAction()), []);
  let hist = useHistory();
  

  const accept = (loannList) => {
    console.log("Update Record", loannList);
    state.loannList.finananceVerificationApproval= true;
    dispatch(updateFinanceRenderAction(loannList));
    hist.push("/updateloan");
  };

  return (
    <div>
      <AppNavs/>
      <div className=" alert alert-secondary ">
        <h3 style={{ textAlign: "center", fontSize: "150" }}>
          {" "}
          Loan Application Details
        </h3>
      </div>
      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Application Id</th>
            <th scope="col">Admin Approval</th>
            <th scope="col">Application Date</th>
            <th scope="col">Finance Verification Approval</th>
            <th scope="col">Land Verification Approval</th>
            </tr>
            </thead>
            <tbody className="alert alert-primary">
          {state.loannList.map((item, index) => (
            <tr key={index}>
              <td>{item.applicationId}</td>
              <td>{item.adminApproval?.toString()}</td>
              <td>{item.applicationDate}</td>
              <td>{item.finananceVerificationApproval?.toString()}</td>
              <td>{item.landVerificationApproval?.toString()}</td>
              </tr>
              ))}
              </tbody>
            <thead className="thead-dark">
            <tr>
            <th scope="col">Loan Applied Amount</th>
            <th scope="col">Loan Approved Amount</th>
            <th scope="col">Monthly Expenses</th>
            <th scope="col">Other Monthly Expenses</th>
            <th scope="col">Rate Of Interest</th>
            </tr>
            </thead>
            <tbody className="alert alert-primary">
          {state.loannList.map((item, index) => (
            <tr key={index}>
              <td>{item.loanAppliedAmount}</td>
              <td>{item.loanApprovedAmount}</td>
              <td>{item.monthlyExpenses}</td>
              <td>{item.otherMonthlyExpenses}</td>
              <td>{item.rateOfInterest}</td>
              </tr>
              ))}
              </tbody>
            <thead className="thead-dark">
            <tr>
            <th scope="col">Status</th>
            <th scope="col">Tenure</th>
            <th scope="col">Total Annual Income</th>
            <th scope="col">Customer Id</th>
            <th scope="col">User Id</th>
          </tr>
        </thead>
              <tbody className="alert alert-primary">
          {state.loannList.map((item, index) => (
            <tr key={index}>
              <td>{item.status}</td>
              <td>{item.tenure}</td>
              <td>{item.totalAnnualIncome}</td>
              <td>{item.customer?.customerId}</td>
              <td>{item.customer?.user?.userId}</td>
              <td>
              </td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
          <th scope="col"><input type="button"
                 value="ACCEPT"
                  // onClick={() => accept(state.loanAppList)}
                  onClick={accept}
                  className="btn btn-info btn-lg w-100" /></th>
          </tr>
          <tbody>
          <tr>
          <td scope="col">
          
          </td>
          </tr>

          </tbody>
        </thead>
      </table>
      
    </div>
  );
};