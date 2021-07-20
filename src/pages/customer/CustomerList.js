import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCustomerAction, updateRenderAction } from "../../redux/store";
import { AppNav } from "./AppNav";
import { useHistory } from "react-router-dom";

export const CustomerList = () => {
  const history = useHistory();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllCustomerAction()), []);
  const updateRecord = (customerList) => {
    console.log("Update Record", customerList);
    dispatch(updateRenderAction(customerList));
    history.push("/customer-upsert");
  };
  return (
    <div>
      <AppNav />
      <div className=" alert alert-secondary report-card-i">
        <h3 style={{ textAlign: "center", fontSize: "150" }}> My Details</h3>
      </div>
      <table className="table ml-10">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Customer Id</th>
            <th scope="col">Aadhar Number</th>
            <th scope="col">Customer Name</th>
            <th scope="col">D.O.B</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Nationality</th>
            <th scope="col">Pan Number</th>
            <th scope="col">User Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody className="alert alert-primary">
          <tr>
            <td>{state.customerList.customerId}</td>
            <td>{state.customerList.aadharNumber}</td>
            <td>{state.customerList.customerName}</td>
            <td>{state.customerList.dateOfBirth}</td>
            <td>{state.customerList.email}</td>
            <td>{state.customerList.gender}</td>
            <td>{state.customerList.mobileNumber}</td>
            <td>{state.customerList.nationality}</td>
            <td>{state.customerList.panNumber}</td>
            <td>{state.customerList.user?.userId}</td>
            <td>
              <input
                type="button"
                value="update"
                className="btn btn-outline-secondary btn-sm"
                onClick={() => updateRecord(state.customerList)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
