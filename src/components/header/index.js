import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Login from "../loginComponent";

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
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
            <Link className={classes.root} to="/Contatos">
              <Nav.Link href="#Contato">Contatos</Nav.Link>
            </Link>
            <Link className={classes.root} to="/Login">
              <Nav.Link onClick={handleOpen}>Login</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
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
            <Login />
          </div>
        </Fade>
      </Modal>
    </Navbar>
  );
}
