import React, { useEffect, useState } from 'react';
import './App.css';
import LoanForm from './LoanForm';
import { Button, Card, List, ListItem, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    width: 376,
    borderRadius: 10,
    opacity: 0,
    top: 30,
    position: "relative",
    transition: "all 0.5s ease-in-out",
  },
  cardOpen: {
    opacity: 1,
    visibility: "visible",
    top: 0
  },
  cardInfo: {
    backgroundColor: "#4dc3ae",
    padding: 20,
    color: "#fff",
    textAlign: "center",
    "& h1": {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 15
    },
    "& h6": {
      lineHeight: "20px",
      marginBottom: 10,
      fontSize: 16,
      fontStyle: "italic",
      fontWeight: "bold"
    }
  },
  steps: {
    display: "flex",
    "& .MuiListItem-root": {
      width: "33.33%",
      minWidth: "auto",
      padding: 0,
      justifyContent: "center",
      position: "relative",
      "&:before": {
        content: "''",
        position: "absolute",
        left: "50%",
        height: 1,
        backgroundColor: " #ddd",
        width: "100%",
      },
      "&:last-child": {
        "&:before": {
          content: "normal"
        }
      },
      "& button": {
        borderRadius: "100%",
        backgroundColor: "#eee",
        width: 30,
        height: 30,
        minWidth: "auto",
      }
    }
  },
  active: {
    backgroundColor: "#4dc3ae !important",
    color: "#fff"
  },
  stepForm: {
    padding: 20
  },
  cardFoot: {
    padding: 10,
    borderTop: "1px solid #eee",
    textAlign: "center",
    "& a": {
      textDecoration: "none",
      color: "#4dc3ae"
    }
  }
}));

function App({ domElement , cardOpen }) {
  const classes = useStyles();
  const subgugu = domElement.getAttribute("data-subgugu")
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0)

  useEffect(() => {
    // Fetch data from gugu
    setLoading(true)
    fetch(`https://www.gugu.com/r/${subgugu}.json`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setData(data.data.children.slice(0, 10));
      })
      .catch((e) => {
        console.log(e)
        setLoading(false);
        setError('error fetching from gugu');
      });
  }, [subgugu])

  const stepHandle = (params) => {
    setStep(params)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const nextStep = () => {
    setStep(step + 1)
  }


  return (
    <Card className={`${classes.card} ${cardOpen ? classes.cardOpen : ""}`}>
      <div className={classes.cardInfo}>
        <Typography variant="h1" component="h1">Loan Application</Typography>
        <Typography variant="h6" component="h6">Let's help you unlock some financial freedom</Typography>
        <Typography variant="body2" component="p">Submit once and your application will be share with all our lending partners</Typography>
      </div>
      <div className={classes.stepForm}>
        <List className={classes.steps}>
          <ListItem><Button className={classes.active} >1</Button></ListItem>
          <ListItem><Button className={(step === 1 || step === 2) && classes.active} >2</Button></ListItem>
          <ListItem><Button className={(step === 2) && classes.active} >3</Button></ListItem>
        </List>
        <div className={classes.stepsInner}>
          <LoanForm {...{ nextStep, prevStep, step }} />
        </div>
      </div>
      <div className={classes.cardFoot}>
        <Typography variant="body2" component="p">
          Powered by{" "}<a href="https://www.akibadigital.com" rel="noopener noreferrer" target="_blank">Akiba Digital</a>
        </Typography>
      </div>
    </Card>
  );
}

export default App;
