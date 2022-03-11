import React, {useState} from "react";
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
  const [image, setImage] = useState('')
  // const [endImg, setEndImg] = useState('')
  const handleRegister = async e => {
    e.preventDefault();
    const formData = new FormData()
    formData.append('image', image)

    await api.post('/registrar' , formData , { 
      image: document.getElementById('image').value
    })
    .then(response => {
      console.log(response)
    }).catch(err => {
      if(err.response) {
        console.log(err.response)
      }else{
        console.log('Erro: Tente novamente mais tarde')
      }
    })  
  }
  
      
  
  // function handleRegister() {

  //   api
  //     .post("/registrar", {
  //       telefone: document.getElementById('telefone').value,
  //       preco: document.getElementById('preco').value,
  //       potencia: document.getElementById('potencia').value,
  //       torque: document.getElementById('torque').value,
  //       km: document.getElementById('km').value,
  //       cor: document.getElementById('cor').value,
  //       cabine: document.getElementById('cabine').value,
  //       tiposuspensao: document.getElementById('tiposuspensao').value,
  //       relacaodiferencial: document.getElementById('relacaodiferencial').value,
  //       entreeixo: document.getElementById('entreeixo').value,
  //       capacidadecombustivel: document.getElementById('capacidadecombustivel')
  //         .value,
  //       opcionais: document.getElementById('opcionais').value,
  //       informacoesadicionais: document.getElementById('informacoesadicionais')
  //         .value,
  //         image: document.getElementById('image').value,
  //     })
  //     .then((data) => {
  //       alert('Cadastro inserido com sucesso!')
  //       console.log(data);
  //     })
  //     .catch((err) => {
  //       alert('Erro ao inserir registro!')
  //       console.log(err);
  //     });
  // }

  // const handleRegister = (values) => {

  //   api
  //     .post("/registrar", {
  // telefone: values.telefone,
  // preco: values.preco
  // potencia: values.potencia,
  // torque: values.torque,
  // km: values.km,
  // cor: values.cor,
  // cabine: values.cabine,
  // tiposuspensao: values.tiposuspensao,
  // relacaodiferencial: values.relacaodiferencial,
  // entreeixo: values.entreeixo,
  // capacidadecombustivel: values.capacidadecombustivel,
  // opcionais: values.opcionais,
  // informacoesadicionais: values.informacoesadicionais,
  //     })
  //     .then((response) => {
  //       alert("Cadastro inserido com sucesso!");
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       alert("Erro ao inseir dados no sistema!");
  //       console.log(err);
  //     });
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
            onSubmit={ handleRegister }
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
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="telefone"
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
                autoFocus
              />
              <TextField
                className={classes.inputs}
                variant="outlined"
                margin="normal"
                required
                size="small"
                id="relacaodiferencial"
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
                id="opcionais"
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
                id="informacoesadicionais"
                label="Informações Adicionais"
                name="informacoesadiconais"
                autoComplete=""
                autoFocus
              />
            </Box>
            <Box align="center">
              <input type={'file'} name="image" id="image" onChange={e => setImage(e.target.files[0])}/><br></br>
              <div>
              {image ? <img src={URL.createObjectURL(image)} width="100" height="100" alt="imagem" /> : <div ><PhotoCamera style={{width : "85" , height: "85"}}/></div>}
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

