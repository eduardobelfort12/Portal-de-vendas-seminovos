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
import EditIcon from "@material-ui/icons/Edit";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import clsx from "clsx";
import api from "../../../axios/api";
import { Box } from "@material-ui/core";
import { Input } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useParams } from "react-router-dom";
import "./style.css";
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

export default function ListageVeiculos() {
  const classes = useStyles();
  const [push, setPush] = useState([]);
  const [id, setId] = useState("");
  const [ativo, setAtivo] = useState("");
  const [state, setState] = useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
    >
      <Box>
        <List align="right">
          <Button
            onClick={toggleDrawer(anchor, false)}
            startIcon={
              <KeyboardArrowUpIcon style={{ width: "50px", height: "50px" }} />
            }
          />
        </List>
      </Box>
      <Divider />
      <List></List>
      <Divider />
      <div align="center">
        <EditIcon />
      </div>
      {push.map((items) => (
        <div key={items.id}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="left">Imagem</TableCell>
                  <TableCell align="left">Marca</TableCell>
                  <TableCell align="left">Modelo</TableCell>
                  <TableCell align="left">Valor</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="left">
                    <img
                      style={{ borderRadius: "30px 30px" }}
                      src={url + items.image}
                      alt="imagem"
                      width="200px"
                      height="200px"
                    />
                  </TableCell>
                  <TableCell align="left" id="marca">
                    <Input placeholder={items.marca} />
                  </TableCell>
                  <TableCell align="left" id="modelo">
                    <Input placeholder={items.modelo} />
                  </TableCell>

                  <TableCell align="left" id="preco">
                    <Input placeholder={items.preco + " R$"} />
                  </TableCell>
                  <TableCell align="left" id="preco">
                    <Button
                      className={classes.colorButtonEdit}
                      startIcon={<EditIcon />}
                    >
                      Salvar alteração
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      ))}
    </div>
  );

  // const [marca, setMarca] = useState("")

  //Função para listar itens no formulário de edição

  async function deleteAnuncio(event) {
    event.preventDefault();

    await api

      .patch(`/inativar/${id}`, {
        id,
        ativo,
      })

      .then((response) => {
        console.log(response.data);
        alert("Anúncio Inativado");

        setId(response.data);
        setAtivo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // async function editForm(event){
  //   event.preventDefault()
  //     await api.patch(`/atualizar/${id}`,{
  //       marca,id
  //     })
  //     .then((response) => {
  //       console.log(response.data)
  //       alert('Atualização realizada com  sucesso!')
  //       setMarca(response.data)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

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

        <form id={"formulario"} onSubmit={deleteAnuncio}>
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
                      <TableCell align="left">Inativar</TableCell>
                      <TableCell align="left">Status</TableCell>
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
                      <TableCell align="left" id="placa" value={placa}>
                        {placa}
                      </TableCell>
                      <TableCell align="left" id="marca" value={proprietario}>
                        {proprietario}
                      </TableCell>
                      <TableCell align="left" id="marca" value={marca}>
                        {marca}
                      </TableCell>
                      <TableCell align="left" id="modelo">
                        {modelo}
                      </TableCell>
                      <TableCell align="left" id="preco">
                        {preco}R$
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
                      <TableCell align="left" id="ativo">
                        <input
                          color="primary"
                          type={"text"}
                          id={"ativo"}
                          name="ativo"
                          onChange={(e) => setAtivo(e.target.value)}
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
                    Inativar Anúncio
                  </Button>

                  {/* {["Editar Anúncio"].map((anchor) => (
                    <React.Fragment key={anchor}>
                      <Button
                        className={classes.colorButtonEdit}
                        variant="contained"
                        align={"center"}
                        size="small"
                        color="success"
                        startIcon={<EditIcon />}
                        name={"id"}
                        id="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                        onClick={toggleDrawer(anchor, true)}
                      >
                        {anchor}
                      </Button>
                      <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                      >
                        {list(anchor)}
                      </Drawer>
                    </React.Fragment>
                  ))} */}

                  {/* <Button
                        align="center"
                        variant="contained"
                        size="small"
                        color="success"
                        startIcon={<EditIcon />}
                        onClick={toggleDrawer}
                        className={classes.colorButtonEdit}
                      >
                        Editar Anuncio
                      </Button> */}
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
