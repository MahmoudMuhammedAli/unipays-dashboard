import React from "react";
import "./app.css";
import Invoices from "../invoices/Invoices";
import Timesheets from "../timesheets/Timesheets";
import Rota from "../rota/Rota";
import PostJob from "../postjob/PostJob";
import Contact from "../contact/Contact";
import Dashboard from "../dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/postjob" component={PostJob} />
          <Route path="/rota" component={Rota} />
          <Route path="/timesheets" component={Timesheets} />
          <Route path="/invoices" component={Invoices} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
