import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { CardActions } from "@material-ui/core";
// import api from "../../../axios/api";

const useStyles = makeStyles((theme) => ({
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
    width: "100%",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "85.25%", // 16:9
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
        proprietario,
        placa,
        marca,
        MODELO,
        preco,
        potencia,
        torque,
        opcionais,
        entreeixo,
        tiposuspensao,
        km,
      }) => (
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            <Grid item key={id} xs={12} sm={8} md={4}>
              <Card className={classes.card}>
                <CardMedia className={classes.cardMedia} image={url + image} />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {marca}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {MODELO}
                  </Typography>
                  <Typography>
                    This is a media card. You can use this section to describe
                    the content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      )
    );

  const pageCount = Math.ceil(data.length / PER_PAGE);

  return (
    <div className="App">
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
    </div>
  );
}
