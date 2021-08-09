import React from "react";
import "./app.css";
import Logo from "../../assets/logo.jpg";

//MATERIAL UI
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

//ICONS
import DashboardIcon from "@material-ui/icons/Dashboard";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import EventNoteOutlinedIcon from "@material-ui/icons/EventNoteOutlined";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import ReceiptOutlinedIcon from "@material-ui/icons/ReceiptOutlined";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import Button from "@material-ui/core/Button";
const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    background: "blue",
   
  },
  drawerPaper: {
    width: drawerWidth,
    background: "rgb(2,0,36)",
    background: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  btn:{
    width: "120px",
    position:"absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom:"80px",
    borderRadius:"20px"
  },
  list:{
    position:"absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  logo:{
    position:"absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%,-50%)"
  },
  link:{
    marginLeft:"15px",
    color : " white"
  },
  white:{
    color:" white"
  },
  unipays:{
    color:" white",
    position:"absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontWeight:900,
  }
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
       {/* <img src={Logo} alt="UNIPAYS" className={classes.logo} width="100px" />*/}
      <Typography variant="h5" className={classes.unipays}>
       UniPays
      </Typography>

        <List className={classes.list}>
          <ListItem>
            <DashboardIcon className={classes.white}/>
            <Link className={classes.link} to="/">
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <WorkOutlineIcon className={classes.white}/>
            <Link className={classes.link} to="/postjob">
              post a job
            </Link>
          </ListItem>
          <ListItem>
            <EventNoteOutlinedIcon className={classes.white} />
            <Link className={classes.link} to="/rota">
              Rota
            </Link>
          </ListItem>
          <ListItem>
            <InsertDriveFileIcon className={classes.white}/>
            <Link className={classes.link} to="/timesheets">
              Timesheets
            </Link>
          </ListItem>
          <ListItem>
            <ReceiptOutlinedIcon className={classes.white}/>
            <Link className={classes.link} to="/Invoices">
              Invoices
            </Link>
          </ListItem>
        </List>
       
        <Button 
          className = {classes.btn }
          variant="contained"
          startIcon={<HeadsetMicIcon />}
          href="/contact"
        >
          <Link to="/Contact">Support</Link>
        </Button>
      </Drawer>
    </div>
  );
}
