import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";

import { Container } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import { TableContainer } from "@material-ui/core";
import { TableBody } from "@material-ui/core";
import { TableCell } from "@material-ui/core";
import { TableHead } from "@material-ui/core";
import { TableRow } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

import api from "../../../axios/api";
// import FiltroLateral from "../../filtroLateral";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    width: "100%",
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
    minWidth: "100%",
    margin: 10,
    padding: 5,
    background: "red",
    color: "white",
  },
  colorButtonEdit: {
    minWidth: "100%",
    margin: 10,
    padding: 5,
    background: "#D4A114",
    color: "white",
  },
  editformModal: {
    marginTop: "70px",
  },
  inputWidth: {
    width: "25px",
  },
  list: {
    width: "100vw",
  },
  fullList: {
    width: "auto",
  },
  tableContainer: {
    width: "100%",
  },
  imgStyle: {
    borderRadius: "50px",
  },
}));

const PER_PAGE = 2;

export default function EditAnuncioComponent() {
  const classes = useStyles();

  const [id, setId] = useState("");
  const [placa, setPlaca] = useState("")
  const [proprietario, setProprietario] = useState("")
  const [marca,setMarca] = useState("")
  const [modelo, setModelo] = useState("")
  const [preco, setPreco] = useState("")

  // const [marca, setMarca] = useState("")

  //Função para listar itens no formulário de edição

  async function EditInfos(event) {
    event.preventDefault();

    await api

      .patch(`/listedit/${id}`,{
        id,marca,modelo,preco ,proprietario,placa

      })

      .then((response) => {
        console.log(response.data);
        alert("Edição realizada com sucesso!");
        setId(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    .map(({ image, marca, modelo, preco, placa, proprietario, id }) => (
      <Container key={id} className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}

        <form id={"formulario"} onSubmit={EditInfos}>
          <Container className={classes.container}>
            <div>
              <TableContainer
                className={classes.tableContainer}
                component={Paper}
              >
                <Table
                  className={classes.table}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow style={{ fontSize: "12px" }}>
                      <TableCell align="left">Imagem</TableCell>
                      <TableCell>Placa</TableCell>
                      <TableCell>Proprietario</TableCell>
                      <TableCell align="left">Marca</TableCell>
                      <TableCell align="left">Modelo</TableCell>
                      <TableCell align="left">Valor</TableCell>
                      <TableCell align="left">Editar</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="left" id="marca" value={image}>
                        <img
                          className={classes.imgStyle}
                          src={url + image}
                          alt="imagem"
                          width="150px"
                          height={"150px"}
                        />
                      </TableCell>
                      <TableCell align="left" >
                        <TextField type="text" onChange={(e) => setPlaca (e.target.value)} name="placa" id="placa" />
                      </TableCell>
                      <TableCell align="left">
                        <TextField
                          type="text"
                          name="proprietario"
                          onChange={(e) => setProprietario (e.target.value)}
                          id="proprietario"
                        />
                      </TableCell>
                      <TableCell align="left" >
                        <TextField type="text" onChange={(e) => setMarca (e.target.value)} name="marca" id="marca" />
                      </TableCell>
                      <TableCell align="left" >
                        <TextField type="text" onChange={(e) => setModelo (e.target.value)} name="modelo" id="modelo" />
                      </TableCell>
                      <TableCell align="left" >
                        <TextField type="text" onChange={(e) => setPreco(e.target.value)} name="preco" id="preco" />
                      </TableCell>

                      <TableCell align="left" id="id">
                        <Checkbox
                          color="primary"
                          type={"checkbox"}
                          id={"id"}
                          name="id"
                          value={id}
                          onChange={(e) => setId(e.target.value)}
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
                    className={classes.colorButtonEdit}
                  >
                    Editar Anúncio
                  </Button>
                </TableCell>
              </TableBody>
            </TableHead>
          </Container>
        </form>
      </Container>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
      {currentPageData}
      {/* <FiltroLateral /> */}

      {/* <div className={classes.editformModal}>
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
      </div> */}
    </div>
  );
}
