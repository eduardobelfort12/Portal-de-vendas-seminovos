import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import NavHeader from "../../components/header/";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { TableContainer } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { Table } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardGridContainer: {
    padding: "20px",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "90.25%", // 16:9
  },

  cardContent: {
    flexGrow: 1,
  },
  fixedPaginate: {
    width: "100%",
    height: "5vh",
    position: "fixed",
    top: "20%",
    fontSize: "12px",
    justifyContent: "center",
    display: "flex",
  },
  test: {
    display: "none",
  },
  container: {
    borderRadius: "10px 10px",
    width: "100%",
    height: "100%",
  },
  colorButtonDelete: {
    margin: "20px",
    padding: "10px",
    background: "red",
    color: "white",
  },
  colorButtonEdit: {
    margin: "40px",
    padding: "10px",
    background: "#D4A114",
    color: "white",
  },
  table: {
    maxWidth: "100vw",
  },
}));

export default function Detalhe() {
  const classes = useStyles();
  const { id } = useParams();
  const [push, setPush] = useState([]);
  const [url] = useState("http://localhost:5500/upload/");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch(`http://localhost:5500/detalhe/${id}`, {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPush(data);
      });
  }

  return (
    <div>
      <div style={{ padding: "50px", margin: "10px" }}>
        <header>
          <NavHeader />
        </header>
      </div>
      {push.map((anuncio) => (
        <Box align="center">
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={0}>
              <Grid xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={url + anuncio.image}
                  ></CardMedia>
                </Card>
              </Grid>
              <Grid item xs={false} sm={4} md={7}>
                <Container className={classes.cardGridContainer}>
                  <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="a dense table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Marca</TableCell>
                          <TableCell align="left">Modelo</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">{anuncio.marca}</TableCell>
                          <TableCell align="left">{anuncio.modelo}</TableCell>
                        </TableRow>
                      </TableBody>
                      <TableHead>
                        <TableRow>
                          <TableCell align="left">Opcionais</TableCell>
                         
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="left">{anuncio.direcao_hidraulica}</TableCell>
                          <TableCell align="left">{anuncio.ar_condicionado}</TableCell>
                          <TableCell align="left">{anuncio.controle_tracao}</TableCell>
                          <TableCell align="left">{anuncio.multimida}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </Box>
      ))}
    </div>
  );
}
