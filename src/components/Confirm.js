import React, { useState } from "react"
import Webcam from 'react-webcam';
import { Button, FormLabel, makeStyles } from "@material-ui/core";
import CancelIcon from '@material-ui/icons/Cancel';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CameraIcon from '@material-ui/icons/Camera';

const useStyles = makeStyles((theme) => ({
  fileUploadInput: {
    display: "none"
  },
  btnGroup: {
    textAlign: "center",
    "& button + button": {
      marginLeft: 10
    }
  },
  prevBtn: {
    borderRadius: "100%",
    width: 50,
    height: 50,
    minWidth: "auto",
  },
  uploadBtn: {
    textAlign: "center",
    marginTop: 10,
    "& .MuiFormLabel-root": {
      display: "block",
      color: "#000",
      marginBottom: 10
    }
  },
  selfieWrap: {
    textAlign: "center",
    marginBottom: 20,
    "& video": {
      width: 200,
      margin: "15px auto",
      display: "table"
    },
    "& .MuiFormLabel-root": {
      display: "block",
      color: "#000",
      marginTop: 20
    },
    "& button": {
      "& svg": {
        marginRight: 5
      }
    },
    "& img": {
      margin: "15px auto",
      display: "table"
    }
  }
}));


const Confirm = (props) => {
  const classes = useStyles();
  const [webcam, setWebcam] = useState(null);

  const setRef = (webcam) => {
    setWebcam(webcam)
  };

  const screenshot = () =>  {
    var screenshot = webcam.getScreenshot();
    props.screensHandle(screenshot)
  }

  console.log('props :>> ', props);

  return (
    <div>
      <div className={classes.uploadBtn}>
        <FormLabel>Please Upload File</FormLabel>
        {
          props?.values?.fileData?.name ? 
          <> 
            <Button Button variant="contained"
                color="primary" component="span" onClick={props.fileChange}>
                {props?.values?.fileData?.name} 
                <CancelIcon/>
            </Button>
          </>
          :
            <>
              <label htmlFor="upload-doc">
              <Button Button variant="contained" color="primary" component="span">
                Upload
              </Button>
            </label>
          </>
        }
        <input
          type="file"
          accept=".doc,.ppt,.pdf"
          label="User types ID number"
          hintText="Enter userID"
          id="upload-doc"
          className={classes.fileUploadInput}
          onChange={props.handleChange("fileData")}
        />
      </div>
      <div className={classes.selfieWrap}>
        <FormLabel>Please Take Selfie</FormLabel>
          
        
          {
            !props.values.isSelfieShow && 
              <>
                <Webcam audio ={false} ref={setRef} />
                <Button variant="contained" color="primary" onClick={screenshot}><CameraIcon/> Capture</Button>
              </>
          }

        {props.values.isSelfieShow && <>{ props.values.screens ? <img src={props.values.screens} /> : null }</>}
        {
          props.values.isSelfieShow && 
          <Button variant="contained" color="primary" onClick={props.selfieHandle}>
            take selfie
          </Button>
        }
      </div>
      <div className={classes.btnGroup}>
        <Button className={classes.prevBtn} variant="contained" color="primary" onClick={() => props.prevStep()}><ChevronLeftIcon/></Button>
        <Button variant="contained" color="primary" >Submit</Button>
      </div>
    </div>
  )
}

export default Confirm
