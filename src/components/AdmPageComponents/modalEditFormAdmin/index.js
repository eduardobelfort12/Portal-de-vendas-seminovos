import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
// import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import EditIcon from "@material-ui/icons/Edit";
// import EmailIcon from "@material-ui/icons/Email";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    margin: theme.spacing(9, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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
    width: "30vw",
    height: "30px",
  },
  inputs: {
    marging: "5px",
    padding: "5px",
  },
}));

export default function EditFormAdmin() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        alignContent="center"
        item
        xs={12}
        md={6}
        component={Paper}
        elevation={20}
        square
      >
        <div className={classes.paper}>
          <div>
            <EditIcon className={classes.icon} />
          </div>
          <Typography component="h6" variant="h5"></Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  type={"text"}
                  placeholder="Marca"
                  className={classes.inputs}
                />
                <TextField
                  type={"text"}
                  placeholder="Modelo"
                  className={classes.inputs}
                />
    
              </Grid>
              <Grid item xs={12}> <TextField
                  type={"text"}
                  placeholder="Modelo"
                  className={classes.inputs}
                /></Grid>
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Confirmar Edição
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
