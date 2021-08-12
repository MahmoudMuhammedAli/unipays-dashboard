import React from "react";
//Material UI
import { Box, Card, Grid, TextField, Typography } from "@material-ui/core";
// import {
//   MuiPickersUtilsProvider,
//   KeyboardDatePicker,
// } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";
import { makeStyles } from "@material-ui/core/styles";

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
  },
  svgHolder: {
    zIndex: "-999",
  },
  rightHeader: {
    color: "white",
    fontSize: "18px",
    width: "250px",
  },
  labels: {
    color: "white",
  },
  timeHolder: {},
  weekHolder: { width: "250px", marginLeft: "-50px" },

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
  svgHolder: {
    position: "absolute",
    zIndex: "0",
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
    bottom:"-18px",
    right:"-15px",
  }
}));

export default function PostJob() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2021-08-18T21:11:54")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const classes = useStyles();
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
          {/*TODO:RIGHT*/}
          <div className={classes.rightCard}>
            <div className={classes.svgHolder}>
              <svg
                width="631.792"
                height="609.325"
                viewBox="0 0 631.792 609.325"
              >
                <defs>
                  <filter
                    id="Rectangle_220"
                    x="37.49"
                    y="18.331"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood floodColor="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_222"
                    x="18.745"
                    y="9.203"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-2" />
                    <feFlood flood-color="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur-2" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_223"
                    x="0"
                    y="0"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-3" />
                    <feFlood flood-color="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur-3" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_194"
                  data-name="Group 194"
                  transform="translate(5 5)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_220)"
                  >
                    <rect
                      id="Rectangle_220-2"
                      data-name="Rectangle 220"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(410.72 596.33) rotate(-150)"
                      fill="#fff"
                      opacity="0.04"
                    />
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_222)"
                  >
                    <rect
                      id="Rectangle_222-2"
                      data-name="Rectangle 222"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(391.97 587.2) rotate(-150)"
                      fill="#fff"
                      opacity="0.04"
                    />
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_223)"
                  >
                    <rect
                      id="Rectangle_223-2"
                      data-name="Rectangle 223"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(373.23 577.99) rotate(-150)"
                      fill="#fff"
                      opacity="0.03"
                    />
                  </g>
                </g>
              </svg>
              <svg
                width="631.792"
                height="609.325"
                viewBox="0 0 631.792 609.325"
              >
                <defs>
                  <filter
                    id="Rectangle_220"
                    x="37.49"
                    y="18.331"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feFlood flood-color="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_222"
                    x="18.745"
                    y="9.203"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-2" />
                    <feFlood flood-color="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur-2" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                  <filter
                    id="Rectangle_223"
                    x="0"
                    y="0"
                    width="594.302"
                    height="590.994"
                    filterUnits="userSpaceOnUse"
                  >
                    <feOffset dx="4" dy="4" input="SourceAlpha" />
                    <feGaussianBlur stdDeviation="3" result="blur-3" />
                    <feFlood flood-color="#373737" floodOpacity="0.122" />
                    <feComposite operator="in" in2="blur-3" />
                    <feComposite in="SourceGraphic" />
                  </filter>
                </defs>
                <g
                  id="Group_194"
                  data-name="Group 194"
                  transform="translate(5 5)"
                >
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_220)"
                  >
                    <rect
                      id="Rectangle_220-2"
                      data-name="Rectangle 220"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(410.72 596.33) rotate(-150)"
                      fill="#fff"
                      opacity="0.04"
                    />
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_222)"
                  >
                    <rect
                      id="Rectangle_222-2"
                      data-name="Rectangle 222"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(391.97 587.2) rotate(-150)"
                      fill="#fff"
                      opacity="0.04"
                    />
                  </g>
                  <g
                    transform="matrix(1, 0, 0, 1, -5, -5)"
                    filter="url(#Rectangle_223)"
                  >
                    <rect
                      id="Rectangle_223-2"
                      data-name="Rectangle 223"
                      width="425.191"
                      height="416.152"
                      rx="64"
                      transform="translate(373.23 577.99) rotate(-150)"
                      fill="#fff"
                      opacity="0.03"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <h2 className={classes.rightHeader}>
              When would you like the candidate's to start?
            </h2>
            <div className={classes.timeHolder}>
              <Grid
                container
                className={classes.topHalf}
                justifyContent="space-around"
              >
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
                <Grid item>
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
                <Grid item>
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
          <svg width="65" height="65" viewBox="0 0 65 65">
            <defs>
              <filter
                id="Ellipse_7"
                x="0"
                y="0"
                width="65"
                height="65"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feFlood flood-opacity="0.161" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Ellipse_7)">
              <circle
                id="Ellipse_7-2"
                data-name="Ellipse 7"
                cx="23.5"
                cy="23.5"
                r="23.5"
                transform="translate(56 6) rotate(90)"
                fill="#fff"
              />
            </g>
            <g
              id="Iconly_Light-Outline_Arrow_-_Down_2"
              data-name="Iconly/Light-Outline/Arrow - Down 2"
              transform="translate(16.281 47.096) rotate(-90)"
            >
              <g
                id="Arrow_-_Down_2"
                data-name="Arrow - Down 2"
                transform="translate(6.232 11.364)"
              >
                <path
                  id="Stroke_1"
                  data-name="Stroke 1"
                  d="M.322.322A1.1,1.1,0,0,1,1.754.216l.123.106,9.487,9.486L20.851.322A1.1,1.1,0,0,1,22.283.216l.123.106a1.1,1.1,0,0,1,.106,1.432l-.106.123L12.142,12.142a1.1,1.1,0,0,1-1.432.106l-.123-.106L.322,1.877A1.1,1.1,0,0,1,.322.322Z"
                  transform="translate(0 0)"
                  fill="#0059eb"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </>
  );
}

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
