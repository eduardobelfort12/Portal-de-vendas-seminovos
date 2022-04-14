import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    textDecoration: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    boxShadow: theme.shadows[0],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function NavHeader() {
  const classes = useStyles();

  return (
    <Navbar
      fixed="top"
      collapseOnSelect
      expand="lg"
      bg="success"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/logos/black-logo.png"
            width="50px"
            height="50px"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link className={classes.root} to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Tora-Seminovos">
              <Nav.Link href="#Tora-seminovos">Tora-Seminovos</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Estoque">
              <Nav.Link href="#Estoque">Estoque</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Contato">
              <Nav.Link href="#Contato">Contatos</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Login">
              <Nav.Link href="#Login">Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}
