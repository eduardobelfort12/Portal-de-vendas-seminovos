import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Table from "@material-ui/core/Table";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { Link } from "react-router-dom";
// import api from "../../../axios/api";

const useStyles = makeStyles((theme) => ({
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
  fixedPaginate: {
    width: "100%",
    height: "5vh",
    position: "fixed",
    top: "auto",
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
    width: "29.4vw",
  },
}));

const PER_PAGE = 3;

export default function ListageVeiculos() {
  const classes = useStyles();

  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [url] = useState("http://localhost:5500/upload/");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    fetch("http://localhost:5500/buscar", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const currentPageData = data

    .slice(offset, offset + PER_PAGE)
    .map(
      ({
        id,
        image,
        marca,
        modelo,
        preco,
        potencia,
        torque,
        opcionais,
        entreeixo,
        tiposuspensao,
        km,
      }) => (
        <Container key={id} className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={0}>
            <Grid xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <Link to={`/Estoque/${id}`}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={url + `${image}`}
                  ></CardMedia>
                </Link>
              </Card>
            </Grid>
            <Grid item xs={false} sm={4} md={7}>
              <Container style={{maxWidth:'100vw', margin: "10px"}} className={classes.container}>
                <TableContainer component={Paper}>
                  <Table
                    className={classes.table}
                    size="small"
                    aria-label="a dense table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Marca</TableCell>
                        <TableCell align="left">Modelo</TableCell>
                        <TableCell align="left">Valor</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">{marca}</TableCell>
                        <TableCell align="left">{modelo}</TableCell>
                        <TableCell align="left">{preco}R$</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Opcionais</TableCell>
                        <TableCell align="left">Potencia</TableCell>
                        <TableCell align="left">Torque</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">{opcionais}</TableCell>
                        <TableCell align="left">{potencia} CV</TableCell>
                        <TableCell align="left">{torque} Kg/T</TableCell>
                      </TableRow>
                    </TableBody>
                    <TableHead>
                      <TableRow>
                        <TableCell align="left">Entre eixo</TableCell>
                        <TableCell align="left">Suspensão</TableCell>
                        <TableCell align="left">Quilometragem</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left">{entreeixo}</TableCell>
                        <TableCell align="left">{tiposuspensao}</TableCell>
                        <TableCell align="left">{km} Km</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Container>
            </Grid>
          </Grid>
        </Container>
      )
    );

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
      <ReactPaginate
        className={classes.fixedPaginate}
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
      {currentPageData}
    </div>
  );
}
