import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "18vw",
    position: "fixed",
    top: "20%",
    left: "80%",
  },
  container: {
    height: "50vh",
  },
  formControl: {
    display: "flex",
    flexWrap: "wrap",
    margin: theme.spacing(1),
    padding: "20px",
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  buttonStyle: {
    display: "flex",
    width: "100%",
    top: 100,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    background: "#D4A114",
    color: "white",
  },
}));

export default function FiltroLateral() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={4}>
        <Container className={classes.container} maxWidth="md">
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Marca</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Modelo</InputLabel>
            <Select labelId="demo-simple-select-label" id="demo-simple-select">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Button className={classes.buttonStyle}>Buscar</Button>
        </Container>
      </Paper>
    </div>
  );
}
