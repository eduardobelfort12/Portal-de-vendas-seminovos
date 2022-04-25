import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Grid } from "@material-ui/core";
import { Container } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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
  table: {
    width: "29.4vw",
  },
}));

const PER_PAGE = 3;

export default function ListageVeiculos() {
  const classes = useStyles();

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

  return (
    <div className="App">
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {data.slice(0).map((items) => (
            <Grid item key={items.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image={url + items.image}
                />
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.marca}
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    {items.MODELO}
                  </Typography>
                 

                  <Typography>{items.preco} R$</Typography>
                </CardContent>
                <CardActions>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/Estoque/${items.id}`}
                  >
                    {" "}
                    <Button size="small" color="primary">
                      Ver detalhes
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
