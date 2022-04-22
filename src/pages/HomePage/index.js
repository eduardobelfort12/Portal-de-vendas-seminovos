import React from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

import NavHeader from "../../components/header";
import Typography from "@material-ui/core/Typography";

import Carousell from "../../components/carousel";

import FullWidthGrid from "../../components/infoHome";

import { makeStyles } from "@material-ui/core";

import VeiculosDestaqueComponent from "../../components/veiculosDestaque";

const useStyles = makeStyles((theme) => ({
  filter: {
    width: "100vw",
    padding: "30px",
  },
  cardFilter: {
    display: "flex",
    position: "top",
    flexDirection: "column",
    overflowY: "scroll",
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
        </div>

        <Typography variant="h4" align="center">
          Anuncios em Destaque
        </Typography>
        {/*Este componente abaixo renderiza os veículos em destaque para vendas*/}
        <VeiculosDestaqueComponent />

        <section>
          <div className={classes.heroContent}></div>
          <FullWidthGrid />
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
