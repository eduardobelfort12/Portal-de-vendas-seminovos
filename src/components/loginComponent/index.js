import React from "react";
import { ContactMail } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import EmailIcon from "@material-ui/icons/Email";
import NavHeader from "../header/"
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    display: "flex",
    padding: "auto",
    position: "absolute",
    top: "20%",
    flexDirection: "column",
    alignItems: "center",
    
  },
  paper: {
    margin: theme.spacing(9, 5),
    display: "flex",
  
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center"
  },
  form: {
    // Fix IE 11 issue.
    
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#006640",
    color: "white",
  },
  icon: {
    width: "50vw",
    height: "50px",
  },
}));

export default function Login() {
  const classes = useStyles();
  

  return (
    
    <Grid container component="main" className={classes.root}>
      <div><NavHeader/></div>
      <CssBaseline />
      <Grid alignContent="center" item xs={10} md={6} component={Paper} elevation={20} square>
        <div  className={classes.paper}>
          <div>
            <ContactMail className={classes.icon} />
          </div>
          <Typography component="h6" variant="h5"></Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.inputs}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              id="email"
              label="Email"
              name="email"
              autoComplete="current-email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="password"
              label="senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Logar
            </Button>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
              startIcon={<EmailIcon />}
            >
              Login com Email
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
