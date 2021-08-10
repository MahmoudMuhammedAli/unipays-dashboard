import {
  ClickAwayListener,
  Grow,
  makeStyles,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";

//icons
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Avatar from "../../assets/profile.png";
import DashboardRoundedIcon from "@material-ui/icons/DashboardRounded";
import Bell from "../../assets/bell.svg";
const useStyles = makeStyles((theme) => ({
  nav: {
    position: "absolute",
    right: "30px",
    top: "30px",
    display: "flex",
  },
  arrow: {
    fontSize: "30px",
    cursor: "pointer",
    transition: ".1s ease-in-out",
  },
  avatar: {
    width: "30px",
    height: "30px",
  },
  lounge: {
    display: "flex",
    flexWrap: "nowrap",
    color: "white",
    backgroundColor: "rgba(20,0,255,.7)",
    padding: "5px",
    paddingLeft: "12px",
    paddingRight: "12px",
    borderRadius: "30px",
    marginLeft: "15px",
    marginRight: "15px",
    fontSize: "10px",
    cursor: "pointer",
  },
  loungeIcon: {
    marginRight: "5px",
    fontSize: "20px",
  },
  notifications: {
    position: "relative",
    marginTop: "5px",
    marginLeft: "15px",
    cursor: "pointer",
  },
  noti: {
    backgroundColor: "red",
    width: "12px",
    height: "12px",
    lineHeight: "1.6",
    borderRadius: "50%",
    textAlign: "center",
    color: "white",
    fontSize: "8px",
    display: "flex",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    right: "0",
  },
  compId: {
    color: "rgba(0,89,235,1)",
    fontSize: "12px",
    border: "1px solid  rgba(0,89,235,1)",
    borderRadius: "30px",
    paddingLeft: "12px",
    paddingRight: "12px",
    lineHeight: "2.4",
  },
  navCont: {
    display: "flex", 
    transition: ".5s ease-in-out",

  }
}));
export default function Navbar() {
  const [notification, setNotification] = useState(2);
  const [companyId, setCompanyId] = useState("CO11978");
  const [rotated, setRotated] = useState(true);
  const classes = useStyles();

  const rotate = () => {
    setRotated(!rotated);
  };
  const handleNoti = () => {
    setNotification(0);
  };
  return (
    <div className={classes.nav} >
      <div className={classes.navCont} style={{ display: rotated ? "flex" : "none" }}>
        <div className={classes.compId}>Company Number - {companyId}</div>
        <div onClick={handleNoti} className={classes.notifications}>
          <img src={Bell} alt="Notifications" />
          {notification > 0 && (
            <div className={classes.noti}> {notification} </div>
          )}
        </div>
        <div className={classes.lounge}>
          <DashboardRoundedIcon className={classes.loungeIcon} />
          <Typography variant="caption" className={classes.spice}>
            {" "}
            The Spice Lounge
          </Typography>
        </div>
        <img src={Avatar} alt="" className={classes.avatar} />
      </div>
      <KeyboardArrowDownIcon
        color="primary"
        onClick={rotate}
        style={{
          transform: rotated ? "rotate(90deg)" : "rotate(0deg)",
        }}
        className={classes.arrow}
      />
    </div>
  );
}
