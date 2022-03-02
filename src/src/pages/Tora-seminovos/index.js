import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import NavHeader from "../../components/header";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Carousell from "../../components/carousel";
import FullWidthGrid from "../../components/infoHome";
import { Paper } from "@material-ui/core";

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
  font: {
    fontSize: "14px",
    paddin: "20px",
  },
  img: {
    padding: "5px",
    maxWidth: '100%',
   
  },
}));

export default function Seminovos() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavHeader />
      <main>
        <div className={classes.heroContent}>
          <div>
            {" "}
            <Carousell />
          </div>
          <Container>
            <Typography variant="h4" align="center"></Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            <Grid md={6}>
              <Paper>
                <div>
                  <img
                    className={classes.img}
                    src="https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/quemsomos.jpg"
                    alt=""
                  />
                </div>
              </Paper>
            </Grid>
            <Grid item xs="auto" md="6">
              <Typography variant="h6" align="left">
                Bem Vindo a Tora Seminovos
              </Typography>
              <Typography
                align="left"
                paragraph={true}
                className={classes.font}
              >
                Criada em 1972, a TORA é um dos maiores operadores logísticos do
                país. Temos como objetivo garantir qualidade, segurança e
                agilidade em nossas operações, alinhando tecnologia e processos
                inovadores.
              </Typography>
              <Typography variant="h6">
                Atuamos com os seguintes negócios:
              </Typography>
              <Typography className={classes.font} paragraph={true}>
                Transporte Rodoviário Nacional e Internacional (Mercosul)
                Logística de terminais com integração rodoferroviária Centro
                Logístico Aduaneiro (CLIA)
              </Typography>
              <Typography className={classes.font} paragraph={true}>
                <ul>
                  <li>
                    Transporte Rodoviário Nacional e Internacional (Mercosul)
                  </li>
                  <li>Logística de terminais com integração rodoferroviária</li>
                  <li>Centro Logístico Aduaneiro (CLIA)</li>
                </ul>
              </Typography>
              <Typography className={classes.font}>
                A TORA SEMINOVOS é uma empresa criada para comercializar os
                ativos do grupo Tora utilizados nas suas atividades.
              </Typography>
            </Grid>
          </Grid>
        </Container>
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
