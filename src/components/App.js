import React from "react";
import "../Styles/css/App.css";
import Invoices from "./Invoices";
import Timesheets from "./Timesheets";
import Rota from "./Rota";
import PostJob from "./PostJob";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path="/postjob" component={PostJob} />
        <Route path="/rota" component={Rota} />
        <Route path="/timesheets" component={Timesheets} />
        <Route path="/invoices" component={Invoices} />
        <Route path="/" component={Dashboard} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
