import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(5),
    margin: "50px",
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icons: {
    width: "50%",
    height: "80px",
  },
  typography: {
    fontSize: "12px",
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h5" align="center">
        As melhores condições para adquirir seu seminovo
      </Typography>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={20}>
            <MonetizationOnIcon className={classes.icons} color="primary" />
            <Typography classes={classes.typography}>
              Financiamento próprio
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={20}>
            <ThumbUpIcon className={classes.icons} color="primary" />
            <Typography classes={classes.typography}>
              Plano de Manutenção
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper} elevation={20}>
            <VerifiedUserIcon className={classes.icons} color="primary" />
            <Typography classes={classes.typography}>
              Garantia Tora Seminovos
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
