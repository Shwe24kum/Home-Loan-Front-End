import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import {Footer} from "./pages/Footer";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import { UserSignin } from './pages/UserSignin';
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {AdminRegister} from "./pages/adminPage/AdminRegister";
import {CustomerUpsert} from "./pages/customer/CustomerUpsert";
import { AppNav } from './pages/customer/AppNav';
import {CustomerList} from './pages/customer/CustomerList';
import {ApplyLoan} from './pages/customer/ApplyLoan';
import { Status } from './pages/customer/Status';
import {FinanceOfficerReg} from "./pages/finance/FinanceOfficerReg";
import {LandOfficerReg} from "./pages/land/LandOfficerReg";
import { AppNavs } from './pages/finance/AppNavs';
import { FinanceHome } from "./pages/finance/FinanceHome";
import { ViewLoanDetail } from './pages/finance/ViewLoanDetail';
import { UpdateLoan } from './pages/finance/UpdateLoan';
import { Statuss } from './pages/adminPage/Statuss';
import { Admin } from "./pages/adminPage/admin";
import { LoanApplicationDetails } from "./pages/adminPage/LoanApplicationDetails";
import { LoanApplicationByID } from "./pages/adminPage/LoanApplicationByID";


function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component= {Register} />
          <Route exact path="/user-signin" component= {UserSignin} />
          <Route exact path="/contact" component= {Contact} />
          <Route exact path="/adminregister" component= {AdminRegister} />
          <Route exact path="/customer-upsert" component={CustomerUpsert}/>
          <Route exact path="/AppNav" component={AppNav} />
          <Route exact path="/customer-list" component={CustomerList} />
          <Route exact path="/apply-loan" component={ApplyLoan} />
          <Route exact path="/status" component={Status} />
          <Route exact path="/financeofficerreg" component={FinanceOfficerReg}/>
          <Route exact path="/landofficerreg" component={LandOfficerReg}/>
          <Route exact path="/AppNavs" component={AppNavs}/>
          <Route exact path="/" component={AppNavs} />
          <Route exact path="/financehome" component={FinanceHome} />
          <Route exact path="/viewcustomer" component={ViewLoanDetail} />
          <Route exact path="/updateloan" component={UpdateLoan} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/viewAll" component={LoanApplicationDetails} />
          <Route exact path="/viewbyId" component={LoanApplicationByID} />
          <Route exact path="/statuss" component={Statuss} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
