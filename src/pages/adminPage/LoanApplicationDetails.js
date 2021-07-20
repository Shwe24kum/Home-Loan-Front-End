import { useEffect, useState } from "react";
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteLoanByIdAction, getAllLoanAction, UpdatedRenderAction } from "../../redux/store";
import { AppNav } from "./AppNav";

import axios from "axios";
import { useHistory } from "react-router-dom";
export const LoanApplicationDetails = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [id, setId] = useState(1);
  useEffect(() => dispatch(getAllLoanAction()), []);
  console.log(state.loannList);

  const updateStatus = (item) => {
    console.log("Update item", item);
    history.push("/status");
    dispatch(UpdatedRenderAction(item));
    // axios
    //   .put("http://localhost:8080/update/" + state.status)
    //   .then((response) => {
    //     if (response.data != null) {
    //       alert("Application updated successfully!!!");
    //       // this.setApplicationId({
    //       //   loanList: this.state.loanList.filter(application => state.applicationId !== applicationId)
    //     }
    //   });
  };
  const deleteLoan = (applicationId) => {
    axios
      .delete("http://localhost:8080/delete/" + applicationId)
      .then((response) => {
        if (response.data != null) {
          alert("Application deleted successfully!!!");
          // this.setApplicationId({
          //   loanList: this.state.loanList.filter(application => state.applicationId !== applicationId)
        }
      });
  };
  const pending = (Status) => {
    axios
      .get("http://localhost:8080/update/" + this.Status)
      .then((response) => {
        if (response.data == pending) {
          alert("Status not changed!!!");
          // this.setApplicationId({
          //   loanList: this.state.loanList.filter(application => state.applicationId !== applicationId)
        }
      });
  };

  const approve = (Status) => {
    axios
      .put("http://localhost:8080/update/" + this.Status)
      .then((response) => {
        if (response.data != pending) {
          alert("Application updated successfully!!!");
          // this.setApplicationId({
          //   loanList: this.state.loanList.filter(application => state.applicationId !== applicationId)
        }
      });
  };
  const rejected = (Status) => {
    axios
      .put("http://localhost:8080/update/" + Status.status)
      .then((response) => {
        if (response.data != null) {
          alert("Application updated successfully!!!");
          // this.setApplicationId({
          //   loanList: this.state.loanList.filter(application => state.applicationId !== applicationId)
        }
      });
  };
  return (
    <div>
      <AppNav />
      <div className=" alert alert-secondary ">
        <h3 style={{ textAlign: "center", fontSize: "150" }}>
          {" "}
          Loan Application Details
        </h3>
      </div>
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
            <th scope="col"> Status</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          {state.loannList.map((item, index) => {
            return (
              <tr key={index}>
                {/* <th scope="row">1</th> */}
                <td>{item.applicationId}</td>
                <td>{item.adminApproval?.toString()}</td>
                <td>{item.applicationDate}</td>
                <td>{item.finananceVerificationApproval?.toString()}</td>
                <td>{item.landVerificationApproval?.toString()}</td>
                <td>{item.loanAppliedAmount}</td>
                <td>{item.loanApprovedAmount}</td>
                <td>{item.monthlyExpenses}</td>
                <td>{item.otherMonthlyExpenses}</td>
                <td>{item.rateOfInterest}</td>
                <td>{item.status}</td>
                <td>{item.tenure}</td>
                <td>{item.totalAnnualIncome}</td>
                <td>{item.customer?.customerId}</td>
                <td>{item.customer?.user?.userId}</td>
                {/* <td><Status/></td> */}
                <td>
                  <input type="button" value="Update" onClick={()=>updateStatus(item)}/>
                  {/* <ButtonGroup>
                    <Button
                      type="button"
                      value="Update"
                      // onClick={updateStatus.bind(this, item.status)}
                      variant="sm"
                    >
              
                      <select>
                        <option
                          value="pending"
                          // onClick={pending.bind(this, this.Status)}
                        >
                          Pending
                        </option>

                        <option value="approved" onClick={approve}>
                          Approved
                        </option>

                        <option value="rejected">Rejected</option>
                      </select>
                    </Button>
                  </ButtonGroup> */}
                </td>

                <td>
                  <ButtonGroup>
                    <Button
                      type="button"
                      value="DELETE"
                      onClick={deleteLoan.bind(this, item.applicationId)}
                    >
                      DELETE
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
