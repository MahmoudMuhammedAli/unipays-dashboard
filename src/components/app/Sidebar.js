import React from "react";
import "./app.css";
import { ReactComponent as Logo } from "../../assets/logo.svg";

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
const drawerWidth = 210;

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
    background: "rgb(0,0,255)",
    background: "linear-gradient(0deg, rgba(0,0,255,1) 0%, rgba(0,153,220,1) 50%, rgba(0,153,220,1) 100%) ",
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  btn:{
    width: "140px",
    height: "30px",
    position:"absolute",
    left: "50%",
    transform: "translateX(-50%)",
    bottom:"30px",
    borderRadius:"20px",
    color:"white",
    backgroundColor:"rgba(255,255,255,.2)",
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
    color:" white",
    textTransform: "capitalize",
  },
  unipays:{
    position:"absolute",
    top: "10%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "55%",
   
  }, 
  listItem:{
    marginTop:"18px",
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
       {/* <img src={Logo} alt="UNIPAYS" className={classes.logo} width="100px" />
      <Typography variant="h5" className={classes.unipays}>
       UNIPAYS
      </Typography>*/}
      <Logo className={classes.unipays}/>

        <List className={classes.list}>
          <ListItem className={classes.listItem}  >
            <DashboardIcon className={classes.white}/>
            <Link className={classes.link} to="/">
              Dashboard
            </Link>
          </ListItem>
          
          <ListItem className={classes.listItem}  >
            <WorkOutlineIcon className={classes.white}/>
            <Link className={classes.link} to="/postjob">
              post a job
            </Link>
          </ListItem>
          <ListItem className={classes.listItem} >
            <EventNoteOutlinedIcon className={classes.white} />
            <Link className={classes.link} to="/rota">
              Rota
            </Link>
          </ListItem>
          <ListItem className={classes.listItem} >
            <InsertDriveFileIcon className={classes.white}/>
            <Link className={classes.link} to="/timesheets">
              Timesheets
            </Link>
          </ListItem>
          <ListItem className={classes.listItem} >
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
         
        >
          <Link to="/Contact" className={classes.white}>Support</Link>
        </Button>
      </Drawer>
    </div>
  );
}
