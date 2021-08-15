import React, { useState } from "react";
import { ReactComponent as CircledArrow } from "../../assets/CircledArrow.svg";
import { ReactComponent as Rect } from "../../assets/Rect.svg";
import { Box, Card, Grid, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
/*Styles*/
const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    background: "rgba(165,199,255,.1)",
    borderRadius: "50px",
    width: "1050px",
    height: "550px",
    paddingTop: "40px",
    paddingLeft: "40px",
  },
  text: {
    margin: "20px",
    width: "200px",
  },
  form: {
    width: "500px",
  },
  rightCard: {
    position: "relative",
    width: "550px",
    height: "550px",
    background: "rgba(0,89,235,1)",
    marginTop: "-40px",
    borderRadius: "50px",
    paddingLeft: "40px",
    paddingTop: "10px",
    boxShadow: "-2px 3px  10px grey;",
    backgroundImage: 'url("../../assets/Rect.svg")',
  },

  rightHeader: {
    color: "white",
    fontSize: "18px",
    width: "250px",
  },
  labels: {
    color: "white",
  },
  timeHolder: { zIndex: "999" },
  weekHolder: { width: "250px", marginLeft: "-20px" },

  week: {
    color: "white",
    fontSize: "18px",
    fontWeight: "6  00",
    display: "block",
    width: "100px",
    marginTop: "-20px",
    marginLeft: "20px",
    lineHeight: "2",
  },
  border: {
    backgroundColor: "rgba(255, 255, 255,.4)",
    width: "160px",
  },
  textRight: {
    margin: 10,
    width: "200px",
  },

  labelHTML: {
    color: "white",
    display: "block",
    marginBottom: "10px",
  },
  textHTML: {
    backgroundColor: "rgba(255, 255, 255,.4)",
    border: "none",
    borderRadius: "20px",
    color: "white",
    fontWeight: 600,
    height: "35px",
    width: "147px",
    marginBottom: "20px",
  },
  clockHolder: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    height: "250px",
    width: "250px",
  },
  bottomHalf: {},
  textHTMLDown: {
    backgroundColor: "rgba(255, 255, 255,.4)",
    border: "none",
    borderRadius: "20px",
    color: "white",
    fontWeight: 600,
    height: "25px",
    marginBottom: "20px",
    width: "100px",
  },
  submitDiv: {
    backgroundColor: "rgba(0,89,235,1)",
    position: "absolute",
    right: "100px",
    bottom: "20px",
    width: "150px",
    padding: "10px",
    paddingLeft: "35px",
    borderRadius: "30px",
    color: "white",
    fontSize: "16px",
    display: "flex",
    cursor: "pointer",
    height: "45px",
  },
  arrowHolder: {
    position: "absolute",
    bottom: "-18px",
    right: "-15px",
  },
  rectangle: {
    zIndex: "0",
    position: "absolute",
    top: "0",
  },
  rightFlex: {
    marginLeft: "70px",
  },
}));
/*End Styles*/
export default function PostJob() {
  //STATES
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-18T21:11:54")
  );
  const [startTime, setStartTime] = useState(0);
  /*End States*/

  //TODO: implement a form handler for the whole form.
  /*Handlers*/
  const handleChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
  /*End Handlers*/
  return (
    <>
      <Box ml={20} mt={4}>
        <Typography variant="h5" color="primary" paragraph>
          Have a vacancy?
        </Typography>
        <Typography variant="subtitle1" color="primary" paragraph>
          Post a job that's right for you!
        </Typography>
        <Card className={classes.card} elevation={4} p={5}>
          <Box className={classes.form}>
            <TextField
              id="filled-basic"
              label="Job Title"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="Address"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="Job Description"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="City"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="Uniform Description"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="Postcode"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label=" health and safety issues"
              variant="outlined"
              className={classes.text}
            />
            <TextField
              id="filled-basic"
              label="Additional Notes"
              variant="outlined"
              className={classes.text}
            />
          </Box>
          {/*RIGHT*/}
          <div className={classes.rightCard}>
            <h2 className={classes.rightHeader}>
              When would you like the candidate's to start?
            </h2>
            <div className={classes.timeHolder}>
              <Grid container className={classes.topHalf} justifyContent="">
                <Grid item>
                  <label className={classes.labelHTML}>Start Date</label>

                  <input
                    className={classes.textHTML}
                    type="date"
                    onChange={handleDateChange}
                    value={selectedDate}
                    id="startDate"
                  />
                </Grid>
                <Grid item className={classes.rightFlex}>
                  <div className={classes.weekHolder}>
                    <p className={classes.week}>Week of: 23/08/2021</p>
                  </div>
                </Grid>
                <Grid item>
                  <label className={classes.labelHTML} htmlFor="endDate">
                    End Date
                  </label>
                  <input
                    className={classes.textHTML}
                    type="date"
                    id="endDate"
                  />
                </Grid>
                <Grid item className={classes.rightFlex}>
                  <label className={classes.labelHTML} htmlFor="number">
                    Number of candidate's
                  </label>
                  <input className={classes.textHTML} type="text" id="number" />
                </Grid>
              </Grid>
              <Grid container className={classes.bottomHalf}>
                <div>
                  <TextField
                    id="filled-basic"
                    label="Work Days"
                    multiline
                    rows={7}
                    variant="filled"
                    className={classes.textRight}
                    color="secondary"
                    InputLabelProps={{ className: classes.labels }}
                    InputProps={{ className: classes.border }}
                  />
                </div>
                <div className={classes.clockHolder}>
                  <label className={classes.labelHTML} htmlFor="StartTime">
                    Start time
                  </label>
                  <input
                    value={startTime}
                    onChange={handleChange}
                    className={classes.textHTMLDown}
                    type="text"
                    id="StartTime"
                  />{" "}
                  <label className={classes.labelHTML} htmlFor="FinishingTime">
                    Finishing time
                  </label>
                  <input
                    className={classes.textHTMLDown}
                    type="text"
                    id="Finishing time"
                  />{" "}
                  <label className={classes.labelHTML} htmlFor="UnpaidBreak">
                    Unpaid break
                  </label>
                  <input
                    className={classes.textHTMLDown}
                    type="text"
                    id="UnpaidBreak"
                  />{" "}
                  <label className={classes.labelHTML} htmlFor="Rate">
                    Rate per hr (£)
                  </label>
                  <input
                    className={classes.textHTMLDown}
                    type="text"
                    id="Rate"
                  />
                </div>
              </Grid>
            </div>
          </div>
        </Card>
      </Box>
      <div className={classes.submitDiv}>
        Post Job
        <div className={classes.arrowHolder}>
          <CircledArrow />
        </div>
      </div>
    </>
  );
}

/*A FAILED TRIAL WITH MUI*/
//  <TextField
//   id="filled-basic"
//   label="Start Date"
//   className={classes.textRight}
//   color="secondary"
//   variant="filled"
//   InputLabelProps={{ className: classes.labels }}
//   InputProps={{ className: classes.border }}
// />
// <p className={classes.week}> Week of: 23/08/2021</p>
// <TextField
//   id="filled-basic"
//   label="End Date"
//   variant="filled"
//   className={classes.textRight}
//   color="secondary"
//   InputLabelProps={{ className: classes.labels }}
//   InputProps={{ className: classes.border }}
// />
// <TextField
//   id="filled-basic"
//   label="Number of candidate's"
//   variant="filled"
//   className={classes.textRight}
//   color="secondary"
//   InputLabelProps={{ className: classes.labels }}
//   InputProps={{ className: classes.border }}
// />
// <TextField
//   id="filled-basic"
//   label="Work Days"
//   multiline
//   rows={4}
//   variant="filled"
//   className={classes.textRight}
//   color="secondary"
//   InputLabelProps={{ className: classes.labels }}
//   InputProps={{ className: classes.border }}
// />
// <TextField
//   id="filled-basic"
//   label="Uniform Description"
//   variant="filled"
//   className={classes.textRight}
//   color="secondary"
//   InputLabelProps={{ className: classes.labels }}
//   InputProps={{ className: classes.border }}
// />*/}
// {/* TODO: DATE INSTEAD OF TEXT
//   <MuiPickersUtilsProvider utils={DateFnsUtils}>
//   <KeyboardDatePicker
//     margin="normal"
//     id="date-picker-dialog"
//     label="Date picker dialog"
//     format="MM/dd/yyyy"
//     color="secondary"
//     value={selectedDate}
//     onChange={handleDateChange}
//     KeyboardButtonProps={{
//       "aria-label": "change date",
//     }}
//     InputLabelProps={{ className: classes.labels }}
//   />
// </MuiPickersUtilsProvider>
//
