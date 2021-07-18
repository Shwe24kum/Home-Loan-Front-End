import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import React from "react";
import {Footer} from "./pages/Footer";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Login} from "./pages/Login";
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {AdminRegister} from "./pages/adminPage/AdminRegister"
import {CustomerRegister} from "./pages/customer/CustomerRegister"
import {FinanceOfficerReg} from "./pages/finance/FinanceOfficerReg"
import {LandOfficerReg} from "./pages/land/LandOfficerReg"

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/register" component= {Register} />
          <Route exact path="/login" component= {Login } />
          <Route exact path="/contact" component= {Contact} />
          <Route exact path="/adminregister" component= {AdminRegister} />
          <Route exact path="/customerregister" component={CustomerRegister}/>
          <Route exact path="/financeofficerreg" component={FinanceOfficerReg}/>
          <Route exact path="/landofficerreg" component={LandOfficerReg}/>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
