import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import NavHeader from "../../components/header";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Carousell from "../../components/carousel";
import FullWidthGrid from "../../components/infoHome";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, ThemeProvider } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
// import api from "../../axios/api";
import SearchIcon from "@material-ui/icons/Search";
import Checkbox from "@material-ui/core/Checkbox";
import VeiculosDestaqueComponent from "../../components/veiculosDestaque";

const useStyles = makeStyles((theme) => ({
  filter: {
    padding: "30px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "70.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    background: "#006640",
    padding: theme.spacing(5),
  },
  overflow: {
    overflowX: "hidden",
  },
  formControl: {
    maxWidth: 200,
    minWidth: "200px",
    padding: "10px",
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
    color: "white",
  },
  formSwitch: {
    fontSize: "12px",
  },
}));

export default function Home() {
  const classes = useStyles();

  //Função para filtrar buscas
  const [filter, setFilter] = useState([]);
  const [push, setPush] = useState([]);
  // const [set, setOpcoes] = useState([]);
  const [marca, setMarca] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [setOpcionais] = useState([]);
  // const [setDirecao] = useState([]);
  // const [setAr] = useState([])
  // const [ setCheckcontrol] = useState([])

  const [url] = useState("http://localhost:5500/upload/");
  // const [modelo, setModelo] = useState('')
  //Esta função filtra as minhas informações setadas nos campos do meu formulario de filtro
  async function Filter(event) {
    event.preventDefault();

    await fetch(`http://localhost:5500/filtrar/${marca}/${modelo}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setFilter(data);
      });
  }
  //Buscar Informações para filtrar valores direto do banco de dados

  useEffect(() => {
    fetch("http://localhost:5500/exibir", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setPush(data);
      });
  }, []);

  // useEffect(() => {
  //   fetch(`http://localhost:5500/options`, {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setOpcoes(data);
  //     });
  // }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <NavHeader />
      <main className={classes.overflow}>
        <div className={classes.heroContent}>
          <div>
            {" "}
            <Carousell />
          </div>
        
          <Container className={classes.filter}>
            <div>
              <Paper elevation={10}>
                <Box align="center">
                  <Card className={classes.card}>
                    <CardContent>
                      <Typography align="center">Filtro de busca</Typography>

                      <form onSubmit={Filter} encType="multipart/form-data">
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
                            <MenuItem value={"Vokswagen"}>Volkswagen</MenuItem>
                            <MenuItem value={"Mercedes-Benz"}>
                              Mercedes-Benz
                            </MenuItem>
                          </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                          <InputLabel
                            className={classes.inputlabel}
                            id="modelo"
                          >
                            Modelo
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="modelo"
                            name="modelo"
                            label="modelo"
                            onChange={(event) => setModelo(event.target.value)}
                          >
                            {push.map((pusher) => (
                              <MenuItem value={pusher.modelo}>
                                {pusher.modelo}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                        <FormControl className={classes.formControl}>
                          <InputLabel
                            className={classes.inputlabel}
                            id="modelo"
                          >
                            Opcionais
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="opicionais"
                            name="opicionais"
                            label="modelo"
                            onChange={(event) =>
                              setOpcionais(event.target.value)
                            }
                          >
                            <Checkbox value={"Direção Hidraúlica"}>
                              Direção Hidraúlica
                            </Checkbox>
                            <Checkbox value={"Ar condicionado"}>
                              Ar condicionado
                            </Checkbox>
                            <Checkbox value={"Check Control"}>
                              CheckControl
                            </Checkbox>
                          </Select>
                        </FormControl>

                        <div>
                          <ThemeProvider>
                            <Box align="center">
                              <Button
                                type="submit"
                                variant="success"
                                className={classes.colorButton}
                                startIcon={<SearchIcon />}
                              >
                                Buscar
                              </Button>
                            </Box>
                          </ThemeProvider>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </Box>
              </Paper>
            </div>
          </Container>
        </div>


        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            {filter.map((item) => (
              <Grid item key={item} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={url + item.image}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                      {item.marca}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h3">
                      {item.modelo}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                      {item.preco} R$
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h5">
                      {item.informacoesadicionais}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="h6">
                      {item.opcionais}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      Visualizar
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>

        </Container>
        <VeiculosDestaqueComponent/>
        <section>
          <div className={classes.heroContent}>
            <FullWidthGrid />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <div align="center">
          <img
            src="https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/logos/black-logo-tora.png"
            alt=""
            width="150px"
          ></img>
        </div>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
