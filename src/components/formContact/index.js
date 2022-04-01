import React, { useState } from "react";
import { ContactMail } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import api from "../../axios/api";


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    padding: "50px",
  },
  image: {
    backgroundImage:
      "url(https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/quemsomos.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(9, 5),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: theme.palette.warning.light,
    color: "white",
  },
  icon: {
    width: "50vw",
    height: "50px",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");


  // const [endImg, setEndImg] = useState('')
 async function handleSendForm() {
  
     await api.post("/send", {
       nome,email,assunto,telefone,mensagem
     })
      .then((response) => {
        
        alert("Mensagem enviada com sucesso!")
        window.location.replace("/Contatos")
        console.log(response);
        
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log("Erro: Tente novamente mais tarde");
          alert("Erro ! Não foi possível enviar mensagem!")
        }
      });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <div className={classes.paper}>
          <div>
            <ContactMail className={classes.icon} />
          </div>
          <Typography component="h6" variant="h5"></Typography>
          <form
            id="formulario"
            className={classes.form}
            onSubmit={handleSendForm}     
          >
            <TextField
              className={classes.inputs}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              id="nome"
              label="Nome"
              name={'nome'}
              autoComplete="nome"
              value={nome}
              autoFocus
              onChange={(e) => setNome(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name={'email'}
              label="email"
              type="email"
              id="email"
              value={email}
              autoComplete="current-email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              name={'assunto'}
              label="assunto"
              type="Assunto"
              id="assunto"
              value={assunto}
              autoComplete="current-assunto"
              onChange={(e) => setAssunto(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name={'telefone'}
              label="telefone"
              type="telefone"
              id="telefone"
              value={telefone}
              autoComplete="current-telefone"
              onChange={(e) => setTelefone(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              required
              size="small"
              fullWidth
              name={'mensagem'}
              label="Escreva sua mensagem"
              type="mensagem"
              id="mensagem"
              value={mensagem}
              autoComplete="current-mensagem"
              onChange={(e) => setMensagem(e.target.value)}
            />
            <Button
              type='submit'
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Enviar
            </Button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
