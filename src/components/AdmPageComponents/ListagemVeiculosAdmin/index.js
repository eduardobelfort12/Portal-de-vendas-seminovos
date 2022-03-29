import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import EditFormAdmin from "../modalEditFormAdmin";
import Table from "@material-ui/core/Table";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import { Checkbox } from "@material-ui/core";
// import api from "../../../axios/api";
import api from "../../../axios/api";


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
}));

const PER_PAGE = 10;

export default function ListageVeiculos() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [id, setId] = useState("");

  async function deleteAnuncio(event) {
    event.preventDefault();
    if (document.getElementById("id").checked === false) {
      alert(
        "Deseja realmente exluir este anúncio? Marque a caixa na tabela na linha excluir anúncios!"
      );
    } else {
      await api
        .delete(`/deletaranuncio/${id}`, {
          id,
        })
        .then((response) => {
          console.log(response.data);
          alert("Anúncio deletado com sucesso!");
          window.location.replace("/VisualizarVeiculos");
          setId(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  const handleClose = () => {
    setOpen(false);
  };

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
    .map(({ image, marca, modelo, preco, id }) => (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={0}>
          <Grid xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={url + `${image}`}
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item xs={false} sm={4} md={7}>
            <form onSubmit={deleteAnuncio}>
              <Container className={classes.container}>
                <div>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="a dense table"
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell align="right">Marca</TableCell>
                          <TableCell align="right">Modelo</TableCell>
                          <TableCell align="right">Valor</TableCell>
                          <TableCell align="right">Excluir Anúncio</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell align="right">{marca}</TableCell>
                          <TableCell align="right">{modelo}</TableCell>
                          <TableCell align="right">{preco}R$</TableCell>
                          <TableCell align="right">
                            <DeleteIcon />

                            <Checkbox
                              color="primary"
                              type="checkbox"
                              id="id"
                              onChange={(e) => setId(e.target.value)}
                              value={id}
                            />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                <TableHead>
                  <TableBody>
                    <TableCell>
                      <Button
                        align="center"
                        type="submit"
                        variant="contained"
                        size="small"
                        color="success"
                        startIcon={<DeleteIcon />}
                        className={classes.colorButtonDelete}
                      >
                        Excluir Anuncio
                      </Button>

                      <Button
                        align="center"
                        variant="contained"
                        size="small"
                        color="success"
                        startIcon={<EditIcon />}
                        className={classes.colorButtonEdit}
                      >
                        Editar Anuncio
                      </Button>
                    </TableCell>
                  </TableBody>
                </TableHead>
              </Container>
            </form>
          </Grid>
        </Grid>
      </Container>
    ));

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
      <div>
        {" "}
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <div className={classes.paper}>
              <EditFormAdmin />
            </div>
          </Fade>
        </Modal>
      </div>
    </div>
  );
}
