import React from "react";
import "./app.css";
import Invoices from "../invoices/Invoices";
import Timesheets from "../timesheets/Timesheets";
import Navbar from "./Navbar";
import Rota from "../rota/Rota";
import PostJob from "../postjob/PostJob";
import Contact from "../contact/Contact";
import Dashboard from "../dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(0,89,235,1)",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          <Navbar />
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
    </ThemeProvider>
  );
}
export default App;
