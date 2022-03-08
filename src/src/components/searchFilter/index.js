import React from "react";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";
import CustomizedButtons from "../buttonFilter";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  formControl: {
    maxWidth: 530,
    minWidth: "180px",
    padding: "10px",
  },
  inputlabel: {
    fontSize: "15px",
  },
  Typography: {
    padding: "10px",
  },
  card: {
    border: "1px ",
    backgroud: "#cac4c4",
    boxShadow: "2px 4px 4px 2.5px grey",
  },
});

export default function BasicSelect() {
  const classes = useStyles();

  const [tipo, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box align="center">
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center">Filtro de busca</Typography>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputlabel}
              id="demo-simple-select-label"
            >
              Tipo
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              label="tipo"
              onChange={handleChange}
            >
              <MenuItem value={10}>Semi-Reboque-Carreta</MenuItem>
              <MenuItem value={20}>Caminhão</MenuItem>
              <MenuItem value={30}>Automóvel</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputlabel}
              id="demo-simple-select-label"
            >
              Marca
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              label="tipo"
              onChange={handleChange}
            >
              <MenuItem value={10}>Facchini</MenuItem>
              <MenuItem value={20}>Randon</MenuItem>
              <MenuItem value={30}>Bisele</MenuItem>
              <MenuItem value={30}>Rossetti</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputlabel}
              id="demo-simple-select-label"
            >
              Modelo
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              label="tipo"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputlabel}
              id="demo-simple-select-label"
            >
              Do Ano
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              label="tipo"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel
              className={classes.inputlabel}
              id="demo-simple-select-label"
            >
              Até o ano
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={tipo}
              label="tipo"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <div>
            <CustomizedButtons />
          </div>
        </CardContent>
      </Card>
    </Box>
  );
}
