import React from "react";
import "./app.css"
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "",
 
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

export default function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <img src={Logo} alt="UNIPAYS" className="logo" width="100px" />
        <List>
          <ListItem >
            <Link className="sidebar_link" to="/">
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <Link className="sidebar_link" to="/postjob">
              post a job
            </Link>
          </ListItem>
          <ListItem>
            <Link className="sidebar_link" to="/rota">
              Rota
            </Link>
          </ListItem>
          <ListItem>
            <Link className="sidebar_link" to="/timesheets">
              Timesheets
            </Link>
          </ListItem>
          <ListItem>
            <Link className="sidebar_link" to="/Invoices">
              Invoices
            </Link>
          </ListItem>
          <ListItem>
            <Link className="sidebar_link" to="/contact">
              Contact us
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
