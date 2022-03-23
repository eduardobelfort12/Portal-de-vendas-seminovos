import React, { useState } from "react";
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
import api from "../../../axios/api";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";

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
  inputNone: {},
  formControl: {
    maxWidth: 200,
    minWidth: "200px",
    padding: "10px",
  },
  inputlabel: {
    fontSize: "15px",
  },
}));

export default function CadastrarVeiculos() {
  const classes = useStyles();

  const [image, setImage] = useState("");
  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [preco, setPreco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [potencia, setPotencia] = useState("");
  const [torque, setTorque] = useState("");
  const [km, setKm] = useState("");
  const [cor, setCor] = useState("");
  const [cabine, setCabine] = useState("");
  const [tiposuspensao, setTiposuspensao] = useState("");
  const [relacaodiferencial, setRelacaodiferencial] = useState("");
  const [entreeixo, setEntreeixo] = useState("");
  const [capacidadecombustivel, setCapacidadecombustivel] = useState("");
  const [opcionais, setOpcionais] = useState("");
  const [informacoesadicionais, setInformacoesadicionais] = useState("");
  // const [endImg, setEndImg] = useState('')
  const handleRegister = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("marca", marca);
    formData.append("modelo", modelo);
    formData.append("telefone", telefone);
    formData.append("potencia", potencia);
    formData.append("torque", torque);
    formData.append("km", km);
    formData.append("preco", preco);
    formData.append("cor", cor);
    formData.append("cabine", cabine);
    formData.append("tiposuspensao", tiposuspensao);
    formData.append("relacaodiferencial", relacaodiferencial);
    formData.append("entreeixo", entreeixo);
    formData.append("capacidadecombustivel", capacidadecombustivel);
    formData.append("opcionais", opcionais);
    formData.append("informacoesadicionais", informacoesadicionais);

    await api
      .post("/registrar", formData)
      .then((response) => {
        alert("Veículo cadastrado com sucesso!");

        console.log(response);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log("Erro: Tente novamente mais tarde");
        }
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
          <form
            className={classes.form}
            onSubmit={handleRegister}
            encType="multipart/form-data"
          >
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
              <FormControl className={classes.formControl}>
                <InputLabel className={classes.inputlabel} id="marca">
                  Marca
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="marca"
                  name="marca"
                  label="marca"
                  onChange={(event) => setMarca(event.target.value)}
                >
                  <MenuItem value={"Volvo"}>Volvo</MenuItem>
                  <MenuItem value={"Scania"}>Scania</MenuItem>
                  <MenuItem value={"Volkswagen"}>Volkswagen</MenuItem>
                  <MenuItem value={"Mercedes"}>mercedes-Benz</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="modelo"
                onChange={(e) => setModelo(e.target.value)}
                label="Modelo veículo"
                name="modelo"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="telefone"
                onChange={(e) => setTelefone(e.target.value)}
                label="Telefone de Contato"
                name="telefone"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                size="small"
                required
                id="preco"
                onChange={(e) => setPreco(e.target.value)}
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
                onChange={(e) => setPotencia(e.target.value)}
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
                onChange={(e) => setTorque(e.target.value)}
                label="Torque"
                name="torque"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="km"
                onChange={(e) => setKm(e.target.value)}
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
                id="cor"
                onChange={(e) => setCor(e.target.value)}
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
                id="cabine"
                onChange={(e) => setCabine(e.target.value)}
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
                id="relacaodiferencial"
                onChange={(e) => setRelacaodiferencial(e.target.value)}
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
                id="tiposuspensao"
                onChange={(e) => setTiposuspensao(e.target.value)}
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
                id="entreeixo"
                onChange={(e) => setEntreeixo(e.target.value)}
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
                id="capacidadedecombustivel"
                onChange={(e) => setCapacidadecombustivel(e.target.value)}
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
                id="informacoesadicionais"
                onChange={(e) => setInformacoesadicionais(e.target.value)}
                label="Informações Adicionais"
                name="informacoesadiconais"
                autoComplete=""
                autoFocus
              />

              {/* <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="opcionais"
                onChange={(e) => opcionais(e.target.value)}
                label="opcionais"
                name="opcionais"
                autoComplete=""
                autoFocus
              />   */}
              <FormControl className={classes.formControl}>
                <InputLabel
                  className={classes.inputlabel}
                  id="opcionais"
                ></InputLabel>
                <div
                  labelId="demo-simple-select-label"
                  id="opcionais"
                  name="opcionais"
                  label="opcionais"
                  onChange={(event) => setOpcionais(event.target.value)}
                >
                  <Checkbox type="checkbox" value={"Direção Hidraúlica"}>
                    Direção Hidraúlica
                  </Checkbox>
                  <Checkbox type="checkbox" value={"Ar condicionado"}>
                    Ar condicionado
                  </Checkbox>
                  <Checkbox type="checkbox" value={"Check Control"}>
                    CheckControl
                  </Checkbox>
                </div>
              </FormControl>
            </Box>
            <Box align="center">
              <input
                className={classes.inputNone}
                type={"file"}
                name="image"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <br></br>
              <div>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    width="130"
                    height="130"
                    alt="imagem"
                  />
                ) : (
                  <div>
                    <PhotoCamera style={{ width: "85", height: "85" }} />
                  </div>
                )}
              </div>

              <Button
                type="submit"
                variant="contained"
                className={classes.submit}
              >
                Cadastrar Veiculo
              </Button>
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
