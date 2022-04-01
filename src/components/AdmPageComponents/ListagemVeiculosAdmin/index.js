import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
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
}));

const PER_PAGE = 10;

export default function ListageVeiculos() {
  const classes = useStyles();
  const [push, setPush] = useState([]);
  const [id, setId] = useState("");
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
        <div>
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
                  </TableCell>l
                  <TableCell align="left" id="preco">
                    <Input placeholder={items.preco + " R$"} />
                  </TableCell>
                  <TableCell align="left" id="preco">
                    <Button className={classes.colorButtonEdit} startIcon={<EditIcon/>}>Salvar alteração</Button>
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

  useEffect(() => {
    api
      .get("/buscar")
      .then((response) => {
        console.log(response.data);
        setPush(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("erro ao realizar busca de dados!");
      });
  });

  async function deleteAnuncio(event) {
    event.preventDefault();

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
    .map(({ image, marca, modelo, preco, id }) => (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={0}>
          <Grid item key={id} value={id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={url + `${image}`}
              ></CardMedia>
            </Card>
          </Grid>
          <Grid item xs={false} sm={4} md={7}>
            <form id={"formulario"} onSubmit={deleteAnuncio}>
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
                          <TableCell align="left">Marca</TableCell>
                          <TableCell align="left">Modelo</TableCell>
                          <TableCell align="left">Valor</TableCell>
                          <TableCell align="left">Excluir Anúncio</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
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
                            <DeleteIcon />
                            <Checkbox
                              color="primary"
                              type={"checkbox"}
                              id={"id"}
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
                        className={classes.colorButtonDelete}
                      >
                        Excluir Anúncio
                      </Button>

                      {["Editar Anúncio"].map((anchor) => (
                        <React.Fragment key={anchor}>
                          <Button
                            className={classes.colorButtonEdit}
                            variant="contained"
                            size="small"
                            color="success"
                            startIcon={<EditIcon />}
                            value={id}
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
                      ))}

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
          </Grid>
        </Grid>
      </Container>
    ));

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div>
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
