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
import { InputLabel } from "@mui/material";
import { Checkbox } from "@mui/material";
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

  const [PROPRIETARIO, setProprietario] = useState("");
  const [ANO, setAnoVeiculo] = useState("");
  const [MODELO, setModelo] = useState("");
  const [COR, setCor] = useState("");
  // const [images, setImages] = useState([]);
  // const [register, setRegister] = useState();
  const [image, setImage] = useState("");
  // const [proprietario, setProprietario] = useState("");
  const [placa, setPlaca] = useState();
  // const [ano, setAnoVeiculo] = useState();
  const [marca, setMarca] = useState();
  // const [modelo, setModelo] = useState();
  const [preco, setPreco] = useState("");
  const [telefone, setTelefone] = useState("");
  const [potencia, setPotencia] = useState("");
  const [torque, setTorque] = useState("");
  const [km, setKm] = useState("");
  // const [cor, setCor] = useState("");
  const [cabine, setCabine] = useState("");
  const [tiposuspensao, setTiposuspensao] = useState("");
  const [relacaodiferencial, setRelacaodiferencial] = useState("");
  const [entreeixo, setEntreeixo] = useState("");
  const [capacidadecombustivel, setCapacidadecombustivel] = useState("");
  const [informacoes, setInformacoes] = useState("");
  const [ar_condicionado, setAr] = useState("");
  const [direcao_hidraulica, setDirecao] = useState("");
  const [controle_tracao, setControle] = useState("");
  const [multimidia, setMultimidia] = useState("");

  // const [endImg, setEndImg] = useState('')
  const handleRegister = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", image);
    formData.append("PROPRIETARIO", PROPRIETARIO);
    formData.append("placa", placa);
    formData.append("ANO", ANO);
    formData.append("marca", marca);
    formData.append("MODELO", MODELO);
    formData.append("telefone", telefone);
    formData.append("potencia", potencia);
    formData.append("torque", torque);
    formData.append("km", km);
    formData.append("preco", preco);
    formData.append("COR", COR);
    formData.append("cabine", cabine);
    formData.append("tiposuspensao", tiposuspensao);
    formData.append("relacaodiferencial", relacaodiferencial);
    formData.append("entreeixo", entreeixo);
    formData.append("capacidadecombustivel", capacidadecombustivel);
    formData.append("ar_condicionado", ar_condicionado);
    formData.append("direcao_hidraulica", direcao_hidraulica);
    formData.append("multimidia", multimidia);
    formData.append("controle_tracao", controle_tracao);
    formData.append("informacoes", informacoes);

    await api
      .post("/registrar", formData)
      .then((response) => {
        alert("Veículo cadastrado com sucesso!");
        // window.location.replace("/registrarVeiculos");
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

  // const checkUsers = (PLACA) => {
  //   console.log(PLACA);
  //   fetch(`http://localhost:5500/autocompletar/${PLACA}`, {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setMarca(data[0].marca);
  //       setMODELO(data[0].MODELO);
  //       setANO(data[0].ANO);
  //       setPROPRIETARIO(data[0].PROPRIETARIO);
  //       setCOR(data[0].COR);
  //     });
  // };

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
                id="placa"
                // onBlur={(e) => checkUsers(e.target.value)}
                onChange={(e) => setPlaca(e.target.value)}
                name={"placa"}
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                // value={PROPRIETARIO}
                id="PROPRIETARIO"
                onChange={(e) => setProprietario(e.target.value)}
                placeholder="Proprietario"
                name="PROPRIETARIO"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                // value={ANO}
                id="ANO"
                onChange={(e) => setAnoVeiculo(e.target.value)}
                placeholder="Ano do veículo"
                name="ANO"
                autoFocus
              />

              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
                id="marca"
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
                id="MODELO"
                // value={MODELO}
                onChange={(e) => setModelo(e.target.value)}
                placeholder="Modelo veículo"
                name="MODELO"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                type="tel"
                margin="normal"
                required
                size="small"
                id="telefone"
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
                onChange={(e) => setTorque(e.target.value)}
                placeholder="Torque do veículo"
                name="torque"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
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
                // value={COR}
                id="COR"
                onChange={(e) => setCor(e.target.value)}
                placeholder="Cor do veículo"
                name="COR"
                autoFocus
              />
              <TextField
                className={classes.inputs}
                margin="normal"
                required
                size="small"
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
                id="informacoes"
                onChange={(e) => setInformacoes(e.target.value)}
                placeholder="Informações adicionais"
                name="informacoes"
                autoComplete=""
                autoFocus
              />

              <InputLabel>
                <Checkbox
                  type="checkbox"
                  onClick={(e) => setDirecao(e.target.value)}
                  name="direcao_hidraulica"
                  id={"direcao_hidraulica"}
                  value="Direção hidraúlica"
                />
                Direção hidraúlica
              </InputLabel>
              <InputLabel>
                <Checkbox
                  type="checkbox"
                  onClick={(e) => setAr(e.target.value)}
                  name="ar_condicionado"
                  id={"ar_condicionado"}
                  value="Ar condicionado"
                />
                Ar condicionado
              </InputLabel>
              <InputLabel>
                <Checkbox
                  onClick={(e) => setControle(e.target.value)}
                  name="controle_tracao"
                  id={"controle_tracao"}
                  value="Controle de tração"
                />{" "}
                Controle de tração
              </InputLabel>
              <InputLabel>
                <Checkbox
                  onClick={(e) => setMultimidia(e.target.value)}
                  name="multimidia"
                  id={"multimidia"}
                  value="multimidia"
                />
                Multimidia
              </InputLabel>
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

              {/* <input
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
