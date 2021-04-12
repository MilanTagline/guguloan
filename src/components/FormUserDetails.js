import React from "react";
import {
  Button,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const useStyles = makeStyles((theme) => ({
  userTypeInfo: {
    textAlign: "center",
    "& button": {
      borderRadius: "100%",
      width: 50,
      height: 50,
      minWidth: "auto",
    }
  },
  userType: {
    marginTop: 10,
    display: 'flex',
    "& .MuiListItem-root": {
      width: "50%",
      minWidth: "auto",
      padding: "0 10px",
      "& span": {
        border: "2px solid #d2eae5",
        backgroundColor: "#edfefb",
        padding: "20px 15px",
        width: "100%",
        textAlign: "center",
        borderRadius: 5,
        cursor: "pointer"
      }
    }
  },
  active: {
    "& span": {
      borderColor: "#4dc3ae !important",
    }
  }
}));

const FormUserDetails = (props) => {
  console.log('props :>> ', props);
  const classes = useStyles();
  return (
      <div className={classes.userTypeInfo}>
        <List className={classes.userType}>
          <ListItem className={props.values.userType === "Individual" && classes.active} onClick={() => props.typeChangeHandle("Individual")}><span>Individual</span></ListItem>
          <ListItem className={props.values.userType === "Bussiness" && classes.active} onClick={() => props.typeChangeHandle("Bussiness")}><span>Bussiness</span></ListItem>
        </List>

        {props.values.userType.length > 0 && 
          <Button variant="contained" color="primary" onClick={() => props.nextStep()}><ChevronRightIcon/></Button>
        }
      </div>
    );
}

export default FormUserDetails