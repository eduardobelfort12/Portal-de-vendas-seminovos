import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import NavHeader from "../../components/header";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Carousell from "../../components/carousel";
import FullWidthGrid from "../../components/infoHome";
import PaginationComponent from "../../components/Pagination";

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
}));

export default function Estoque() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <NavHeader />
      <main className={classes.overflow}>
        <div className={classes.heroContent}>
          <div>
            <Carousell />
          </div>
          <Container className={classes.filter}>
            <div className={classes.root}></div>
          </Container>
          <Container>
            <Typography variant="h4" align="center"></Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia}><PaginationComponent/></CardMedia>

                <CardContent className={classes.cardContent}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                  ></Typography>
                  <Typography></Typography>
                </CardContent>
                <CardActions></CardActions>
              </Card>
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
