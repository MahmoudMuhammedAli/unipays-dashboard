//Material UI
import { Box, Card, TextField, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
//others
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    background: "rgba(165,199,255,.1)",
    borderRadius: "50px",
    width: "1050px",
    height: "550px",
    padding:"40px",
  },
  text:{
    margin:"20px",
    width:"200px",
  
    
  },
  form:{
      width:"500px"
  },
  rightCard: {
      width: "500px",
      height: "500px",
      background: "rgba(0,89,235,1)"

  }
}));

export default function PostJob() {
  const classes = useStyles();
  return (
    <>
      <Box ml={20} mt={4}>
        <Typography variant="h5" color="primary" paragraph>
          Hava a vacancy?
        </Typography>
        <Typography variant="subtitle1" color="primary" paragraph>
          Post a job that's right for you!
        </Typography>
        <Card className={classes.card} elevation={0} p={5}>
        <Box className={classes.form}>
          <TextField id="filled-basic" label="Job Title" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label="Address" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label="Job Description" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label="City" variant="outlined" className={classes.text}/>      
          <TextField id="filled-basic" label="Uniform Description" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label="Postcode" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label=" health and safety issues" variant="outlined" className={classes.text}/>
          <TextField id="filled-basic" label="Additional Notes" variant="outlined" className={classes.text}/>      
          </Box>
          <div className={classes.rightCard}>
  
          </div>
        </Card>
      </Box>
    </>
  );
}
