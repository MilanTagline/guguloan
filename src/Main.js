import React, { useState } from 'react'
import App from './App'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4dc3ae",
      light: "#ffffff",
      contrastText: '#ffffff'
    },
    secondary: {
      main: "#4dc3ae",
      light: "#ffffff",
    },
    error: {
      main: "#FF3829"
    }
  },
});

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: "9999",
    transition: "all 0.2s ease-in-out"
  },
  fabActive: {
    MozTransform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
    transform: "rotate(45deg)"
  }
}));


const Main = ({ domElement }) => {
  const [open, setOpen] = useState(false)

  const HandleClick = (params) => {
    setOpen(!open)
  }
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      
      <Fab className={`${classes.fab} ${open ? classes.fabActive : ""}`} color="primary" aria-label="add" onClick={HandleClick}>
        <AddIcon />
      </Fab>
      <App domElement={domElement} cardOpen={open} />
    </ThemeProvider>
  ) 
}

export default Main
