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
          <form className={classes.form} noValidate>
            <Box
              
              component="form"
              sx={{
                justifyContent: "center",
                display: "flex",
                flexWrap: "wrap",
                maxWidth: '100%',
                m:2.5,
                
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="telefone"
                label="Telefone de Contato"
                name="telefone"
                autoComplete="current-email"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="preco"
                label="Valor do veiculo"
                name="preco"
                autoComplete="current-email"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="Potencia"
                label="Potência"
                name="Potência"
                autoComplete=""
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
                id="km"
                label="Quilometragem"
                name="km"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="cor"
                label="Cor do veículo"
                name="cor"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="cabine"
                label="Cabine"
                name="cabine"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="realcaodiferencial"
                label="Relação Diferencial"
                name="relacaodiferencial"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="tiposuspensao"
                label="Tipo de suspensão"
                name="tiposuspensao"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="entreeixo"
                label="Entre Eixo"
                name="entreeixo"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="capacidadeCombustivel"
                label="Capacidade de Combustivel"
                name="capacidadeCombustivel"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="opcionais"
                label="Opcionais"
                name="opcionais"
                autoComplete=""
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                size="small"
                id="informacoesAdicionais"
                label="Informações Adicionais"
                name="informacoesAdiconais"
                autoComplete=""
                autoFocus
              />
            </Box>
            <Box align="center">
              <input
                accept="image/*"
                className={classes.inputNone}
                id="contained-button-file"
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
                id="icon-button-file"
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
                fullWidth
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
