<<<<<<< HEAD
import React from "react";
import { ContactMail } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

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
          <form className={classes.form} noValidate>
            <TextField
              className={classes.inputs}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="nome"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              name="Assunto"
              label="Assunto"
              type="Assunto"
              id="Assunto"
              autoComplete="current-assunto"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="telefone"
              label="telefone"
              type="telefone"
              id="telefone"
              autoComplete="current-telefone"
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              required
              size="small"
              fullWidth
              name="mensagem"
              label="Escreva sua mensagem"
              type="mensagem"
              id="mensagem"
              autoComplete="current-mensagem"
            />
            <Button
              type="submit"
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
=======
import React from "react";
import { ContactMail } from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",      
    height: "100vh",
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
  icon : { 
        width: "50vw",
        height: "50px",

  }
}));

export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={20} square>
        <div className={classes.paper}>
          <div>
            <ContactMail  className={classes.icon} />
          </div>
          <Typography component="h6" variant="h5">
           
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              className={classes.inputs}  
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              id="nome"
              label="Nome"
              name="nome"
              autoComplete="nome"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="email"
              label="email"
              type="email"
              id="email"
              autoComplete="current-email"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              size="small"
              name="Assunto"
              label="Assunto"
              type="Assunto"
              id="Assunto"
              autoComplete="current-assunto"
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              size="small"
              fullWidth
              name="telefone"
              label="telefone"
              type="telefone"
              id="telefone"
              autoComplete="current-telefone"
            />
            <TextField
              variant="outlined"
              margin="normal"
              multiline
              required
              size="small"
              fullWidth
              name="mensagem"
              label="Escreva sua mensagem"
              type="mensagem"
              id="mensagem"
              autoComplete="current-mensagem"
            />
            <Button
              type="submit"
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
>>>>>>> 00fd495c50b558960ce6f5ba3fa76711c02d0c87
