import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// import api from "../../axios/api"

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
    position: 'fixed',
    top: "auto",
    fontSize: "12px",
    justifyContent: "center",
    display: "flex",
    border: "1px solid black",
    color: "black",
 
  }
}));

const PER_PAGE = 10;

export default function PaginationComponent() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const [url] = useState('http://localhost:5500/upload/')

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
        setData(data);
      });
  }
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const offset = currentPage * PER_PAGE;
  const currentPageData = data

    .slice(offset, offset + PER_PAGE)
    .map(({ modelo, marca, cor, image,preco }) => (
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={0}>
          <Grid xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={ url + `${image}`}
              ></CardMedia>
              <CardContent className={classes.cardContent}>
                <Typography>Modelo: {modelo}</Typography>
                <Typography>Marca: {marca}</Typography>
                <Typography>Cor:{cor}</Typography>
                <Typography>Valor:{preco}R$</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="warning">
                  Visualizar
                </Button>
              </CardActions>
            </Card>
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
    </div>
  );
}
