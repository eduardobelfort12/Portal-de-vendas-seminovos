import React, { useState } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
// import api from "../../axios/api";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  formControl: {
    maxWidth: 200,
    minWidth: "200px",
    padding: "10px",
  },
  inputlabel: {
    fontSize: "15px",
  },
  Typography: {
    padding: "10px",
  },
  card: {
    border: "none",
    backgroud: "#cac4c4",
  },
  colorButton: {
    minWidth: "150px",
    background: "#D4A114",
    color: "white",
  },
});

export default function BasicSelect() {
  const classes = useStyles();
  const [filter, setFilter] = useState([]);
  const [marca, setMarca] = useState([]);

  const [url] = useState("http://localhost:5500/upload/");
  // const [modelo, setModelo] = useState('')

  async function Filter(event) {
    event.preventDefault();

    await fetch("http://localhost:5500/filtrar/" + marca, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilter(data);
      });
  }
  return (
    <Paper elevation={10}>
      <Box align="center">
        <Card className={classes.card}>
          <CardContent>
            <Typography align="center">Filtro de busca</Typography>
            <form onSubmit={Filter} encType="multipart/form-data">
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputlabel} id="marca">
                  Marca
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="marca"
                  name="marca"
                  value={marca}
                  label="Marca"
                  onChange={(event) => setMarca(event.target.value)}
                >
                  <MenuItem value={"Volvo"}>Volvo</MenuItem>
                  <MenuItem value={"Mercedes"}>Mercedes</MenuItem>
                </Select>
              </FormControl>

              <div>
                <ThemeProvider>
                  <Box align="center">
                    <Button
                      type="submit"
                      variant="success"
                      className={classes.colorButton}
                      startIcon={<SearchIcon />}
                    >
                      Buscar
                    </Button>
                  </Box>
                </ThemeProvider>
              </div>
            </form>
          </CardContent>
        </Card>
        <div>
          {filter.map((item) => (
            <div>
              <li>{item.marca}</li>
              <li>{item.modelo}</li>
              <li>{item.cor}</li>
              <img src={url + item.image} width="50px" alt="imagem" />
            </div>
          ))}
        </div>
      </Box>
    </Paper>
  );
}
