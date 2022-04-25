import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Select } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
  card: {
    maxWidth: "100vw",
    height: "100%",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
  },
  container: {},
  pos: {
    marginBottom: 12,
  },
  formControl: {
    display: "flex",
    minWidth: "200px",

    padding: "7px",
  },
  inputlabel: {
    fontSize: "15px",
  },
  Typography: {
    padding: "10px",
  },

  colorButton: {
    minWidth: "150px",
    background: "#D4A114",
    margin: 5,
    color: "white",
  },
  colorButtonClose: {
    minWidth: "150px",
    background: "red",
    margin: 5,
    padding: 5,
    color: "white",
  },
  formSwitch: {
    fontSize: "12px",
  },
}));

export default function NavHeader() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [filter, setFilter] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  // const [set, setOpcoes] = useState([]);
  const [marca, setMarca] = useState([]);
  const [MODELO, setModelo] = useState([]);


  // const [ANO, setAnoVeiculo] = useState([]);
  // const [km, setKm] = useState([]);

  // const [setDirecao] = useState([]);
  // const [setAr] = useState([])
  // const [ setCheckcontrol] = useState([])
  // const [url] = useState("http://localhost:5500/upload/");
  // const [modelo, setModelo] = useState('')
  //Esta função filtra as minhas informações setadas nos campos do meu formulario de filtro
  // async function Filter(event) {
  //   event.preventDefault();

  //   fetch(`http://localhost:5500/filtrar/${marca}/${MODELO}`, {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setFilter(data);
  //     });
  // }

  useEffect(() => {
    fetch("http://localhost:5500/exibirmarca", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setMarcas(data);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:5500/exibirmodelo", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setModelos(data);
      });
  }, []);
  function refresh(e) {
    e.preventDefault();
    window.location.replace(`/Filtrado/${marca}/${MODELO}`);
  }
  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/logos/black-logo.png"
            width="50px"
            height="50px"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={classes.root} to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Tora-Seminovos">
              <Nav.Link href="#Tora-seminovos">Tora-Seminovos</Nav.Link>
            </Link>
            {/* <Link className={classes.root} to="/Estoque">
              <Nav.Link href="#Estoque">Estoque</Nav.Link>
            </Link> */}
            <Link className={classes.root} to="/Contatos">
              <Nav.Link href="#Contatos">Contato</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Login">
              <Nav.Link href="#Login">Login</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Login">
              <Nav.Link onClick={handleOpen}>Filtro</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <Card className={classes.card}>
                <CardContent container>
                  <Typography align="center">Filtro de busca</Typography>

                  <form onSubmit={refresh}>
                    <Box>
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
                          {marcas.map((pusher) => (
                            <MenuItem value={pusher.marca}>
                              {pusher.marca}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputlabel} id="MODELO">
                          Modelo
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="MODELO"
                          name="MODELO"
                          label="modelo"
                          onChange={(event) => setModelo(event.target.value)}
                        >
                          {modelos.map((pusher) => (
                            <MenuItem value={pusher.MODELO}>
                              {pusher.MODELO}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      {/* 
                      <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputlabel} id="ANO">
                          Ano
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="ANO"
                          name="ANO"
                          label="ANO"
                          // onChange={(event) =>
                          //   setAnoVeiculo(event.target.value)
                          // }
                        >
                          {push.map((pusher) => (
                            <MenuItem value={pusher.ANO}>{pusher.ANO}</MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                      {/* <FormControl className={classes.formControl}>
                        <InputLabel className={classes.inputlabel} id="km">
                          km
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="km"
                          name="km"
                          label="km"
                          onChange={(event) => setKm(event.target.value)}
                        >
                          {push.map((pusher) => (
                            <MenuItem value={pusher.km}>{pusher.km}</MenuItem>
                          ))}
                        </Select>
                      </FormControl> */}
                    </Box>
                    <Box align="center">
                      <FormControl>
                        <ThemeProvider>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={`/Filtrado/${marca}/${MODELO}`}
                            onClick={refresh}
                          >
                            <Button
                              variant="success"
                              className={classes.colorButton}
                              startIcon={<SearchIcon />}
                            >
                              Buscar
                            </Button>
                          </Link>
                        </ThemeProvider>
                      </FormControl>

                      <FormControl>
                        <Button
                          variant="success"
                          className={classes.colorButtonClose}
                          startIcon={<CancelIcon />}
                          onClick={handleClose}
                        >
                          Fechar Filtro
                        </Button>
                      </FormControl>
                    </Box>
                  </form>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </div>
          </Fade>
        </Modal>
      </div>
    </Navbar>
  );
}
