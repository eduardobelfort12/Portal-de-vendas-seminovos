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
import PhotoCamera from "@material-ui/icons/PhotoCamera";
// import { PhotoCamera } from "@material-ui/icons";
import api from "../../../axios/api";
// import ImagesGallery from "./imagesGallery";
// import { set } from "react-hook-form";

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
  //Image preview multiple upload image

  //
  // const [images, setImages] = useState([]);
  const [register, setRegister] = useState();
  const [image, setImage] = useState("");
  const [proprietario, setProprietario] = useState();
  const [placa, setPlaca] = useState();
  const [ano_veiculo, setAnoVeiculo] = useState();
  const [marca, setMarca] = useState();
  const [modelo, setModelo] = useState();
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
    formData.append("proprietario", proprietario);
    formData.append("placa", placa);
    formData.append("ano_veiculo", ano_veiculo);
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
        window.location.replace("/registrarVeiculos");
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

  const checkUsers = (placa) => {
    console.log(placa);
    fetch(`http://localhost:5500/queryteste/${placa}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMarca(data[0].marca);
        setModelo(data[0].modelo);
        setAnoVeiculo(data[0].ano_veiculo);
        setProprietario(data[0].proprietario);
        setTelefone(data[0].telefone);
        setPreco(data[0].preco);
        setPotencia(data[0].potencia);
        setTorque(data[0].torque);
        setKm(data[0].km);
        setCor(data[0].cor);
        setCabine(data[0].cabine);
        setRelacaodiferencial(data[0].relacaodiferencial);
        setEntreeixo(data[0].entreeixo);
        setTiposuspensao(data[0].tiposuspensao);
        setCapacidadecombustivel(data[0].capacidadecombustivel);
        setInformacoesadicionais(data[0].informacoesadicionais);
        setOpcionais(data[0].opcionais);
      });
  };

  // const handleMultipleImages = (event) => {
  //   const selectFiles = [];
  //   const targetFiles = event.target.files;
  //   const targetFilesObject = [...targetFiles];

  //   targetFilesObject.map((file) => {
  //     return selectFiles.push(URL.createObjectURL(file));
  //   });
  //   setImages(selectFiles);
  // };

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
              <TextField
                className={classes.inputs}
                margin="normal"
                type="text"
                required
                size="small"
                placeholder="Placa"
                value={placa}
                id="placa"
                onBlur={(e) => checkUsers(e.target.value)}
                onChange={(e) => setPlaca(e.target.value)}
                name={"placa"}
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={proprietario}
                id="proprietario"
                onChange={(e) => setAnoVeiculo(e.target.value)}
                placeholder="Proprietario"
                name="proprietario"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={ano_veiculo}
                id="ano_veiculo"
                onChange={(e) => setAnoVeiculo(e.target.value)}
                placeholder="Ano do veículo"
                name="ano_veiculo"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="marca"
                value={marca}
                onChange={(e) => setMarca(e.target.value)}
                placeholder="Marca veículo"
                name="marca"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="modelo"
                value={modelo}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Modelo veículo"
                name="modelo"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                type="tel"
                margin="normal"
                required
                size="small"
                id="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                placeholder="Telefone de contato"
                name="telefone"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                size="small"
                required
                id="preco"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                placeholder="Valor do veículo"
                name="preco"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="potencia"
                value={potencia}
                onChange={(e) => setPotencia(e.target.value)}
                placeholder="Potencia veículo"
                name="potencia"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="torque"
                value={torque}
                onChange={(e) => setTorque(e.target.value)}
                placeholder="Torque do veículo"
                name="torque"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                value={km}
                size="small"
                id="km"
                onChange={(e) => setKm(e.target.value)}
                placeholder="Quilometragem do veículo"
                name="km"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={cor}
                id="cor"
                onChange={(e) => setCor(e.target.value)}
                placeholder="Cor do veículo"
                name="cor"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={cabine}
                id="cabine"
                onChange={(e) => setCabine(e.target.value)}
                placeholder="Cabine do veículo"
                name="cabine"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                value={relacaodiferencial}
                size="small"
                id="relacaodiferencial"
                onChange={(e) => setRelacaodiferencial(e.target.value)}
                placeholder="Relação do diferencial"
                name="relacaodiferencial"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={tiposuspensao}
                id="tiposuspensao"
                onChange={(e) => setTiposuspensao(e.target.value)}
                placeholder="Tipo da suspensão"
                name="tiposuspensao"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={entreeixo}
                id="entreeixo"
                onChange={(e) => setEntreeixo(e.target.value)}
                placeholder="Entre eixo "
                name="entreeixo"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                value={capacidadecombustivel}
                size="small"
                id="capacidadedecombustivel"
                onChange={(e) => setCapacidadecombustivel(e.target.value)}
                placeholder="Capacidade combustível"
                name="capacidadecombustivel"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                value={informacoesadicionais}
                id="informacoesadicionais"
                onChange={(e) => setInformacoesadicionais(e.target.value)}
                placeholder="Informações adicionais"
                name="informacoesadiconais"
                autoComplete=""
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="opcionais"
                onChange={(e) => setOpcionais(e.target.value)}
                placeholder="Opcionais"
                value={opcionais}
                name="opcionais"
                autoComplete=""
                autoFocus
              />
            </Box>
            <Box align="center">
              <input
                className={classes.inputNone}
                type={"file"}
                name="image"
                multiple
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <br></br>

              <div style={{ margin: "80px" }}>
                {image ? (
                  <img
                    src={URL.createObjectURL(image)}
                    width="200"
                    height="200"
                    alt="imagem"
                  />
                ) : (
                  <div>
                    <PhotoCamera style={{ width: "85", height: "85" }} />
                  </div>
                )}
              </div>

              {/* 
              <input
                type="file"
                multiple
                name="images"
                id="images"
                onChange={handleMultipleImages}
              />
              <div align="center" style={{ display: "flex" }}>
                <ImagesGallery images={images} />
              </div> */}
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
