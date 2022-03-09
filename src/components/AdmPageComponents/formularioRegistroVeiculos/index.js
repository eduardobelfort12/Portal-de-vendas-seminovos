import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { PhotoCamera } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import api from "../../../axios/api";

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: "#006640",
    color: "white",
    maxWidth: "35vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: "50vw",
    height: "50px",
  },
  inputs: {
    padding: "5px",
    margin: "5px",
  },
  inputNone: {
    display: "none",
  },
}));

export default function CadastrarVeiculos() {
  const classes = useStyles();
  // const [
  //   telefone,
  //   preco,
  //   potencia,
  //   torque,
  //   km,
  //   cor,
  //   cabine,
  //   tiposuspensao,
  //   relacaodiferencial,
  //   entreeixo,
  //   capacidadeCombustivel,
  //   opcionais,
  //   informacoesAdicionais,
  //  setPost
  // ] = useState('')
  //Requisição com axios para cadastrar

  const handleRegister = (values) => {
    api
      .post("/registrar", {
        telefone: values.telefone,
        preco: values.preco,
        potencia: values.potencia,
        torque: values.torque,
        km: values.km,
        cor: values.cor,
        cabine: values.cabine,
        tiposuspensao: values.tiposuspensao,
        relacaodiferencial: values.relacaodiferencial,
        entreeixo: values.entreeixo,
        capacidadecombustivel: values.capacidadecombustivel,
        opcionais: values.opcionais,
        informacoesadicionais: values.informacoesadicionais,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        alignContent="center"
        item
        xs={12}
        md={12}
        component={Paper}
        elevation={20}
        square
      >
        <div className={classes.paper}>
          <div>
            <LocalShippingIcon className={classes.icon} />
          </div>
          <Typography component="h6" variant="h5"></Typography>
          <form className={classes.form} noValidate onSubmit={handleRegister}>
            <Box
              component="form"
              sx={{
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
                maxWidth: "100%",
                m: 2.5,
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Telefone de Contato"
                name="telefone"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                label="Valor do veiculo"
                name="preco"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="potencia"
                label="Potência"
                name="potencia"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="torque"
                label="Torque"
                name="torque"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Quilometragem"
                name="km"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Cor do veículo"
                name="cor"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Cabine"
                name="cabine"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Relação Diferencial"
                name="relacaodiferencial"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Tipo de suspensão"
                name="tiposuspensao"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Entre Eixo"
                name="entreeixo"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Capacidade de Combustivel"
                name="capacidadecombustivel"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Opcionais"
                name="opcionais"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                label="Informações Adicionais"
                name="informacoesadiconais"
                autoComplete=""
                autoFocus
              />
            </Box>
            <Box align="center">
              <input
                accept="image/*"
                className={classes.inputNone}
                id="image"
                name="image"
                multiple
                type="file"
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Upload
                </Button>
              </label>
              <input
                accept="image/*"
                className={classes.inputNone}
                id="image"
                name="image"
                type="file"
              />
              <label htmlFor="icon-button-file">
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />
                </IconButton>
              </label>
              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Cadstrar Veiculo
              </Button>
              
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
