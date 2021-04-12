import React, { Component, Fragment } from "react";
import { TextField, Button, makeStyles, FormControl } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const useStyles = makeStyles((theme) => ({
  btnGroup: {
    textAlign: "center",
    marginTop: 20,
    "& button": {
      margin: [[0, 5]],
      borderRadius: "100%",
      width: 50,
      height: 50,
      minWidth: "auto",
    }
  },
  userTypeInput: {
    marginTop: 20,
    "& .MuiFormControl-root": {
      width: "100%",
      "& .MuiInputBase-input": {
        paddingTop: "15px",
      }
    }
  }
}));

const FormPersonalDetails = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.userTypeInput}>
      {
        props.values.userType === "Individual" &&
        <FormControl>
          <TextField
            label="User types ID number"
            hintText="Enter userID"
            variant="outlined"
            onChange={props.handleChange("userID")}
            defaultValue={props.values.userID}
          />
        </FormControl>
      }

      {
        props.values.userType === "Bussiness" &&
        <FormControl>
          <TextField
            label="Business registration number"
            variant="outlined"
            hintText="Enter registrationNumber"
            onChange={props.handleChange("registrationNumber")}
            defaultValue={props.values.registrationNumber}
          />
        </FormControl>
      }
      <div className={classes.btnGroup}>
        <Button variant="contained" color="primary" onClick={() => props.prevStep()}><ChevronLeftIcon/></Button>
        <Button variant="contained" color="primary" onClick={() => props.nextStep()}><ChevronRightIcon/></Button>
      </div>
    </div>
  );
}

export default FormPersonalDetails