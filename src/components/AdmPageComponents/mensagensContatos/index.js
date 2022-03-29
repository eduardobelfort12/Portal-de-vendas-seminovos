import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import api from "../../../axios/api";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  buttonColor: {
    margin: "10px",
    background: "#D4A114",
    color: "white",
    left: "80%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    padding: "10px",
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function MensagensContatos() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [push, setPush] = useState([]);
  const [id, setId] = useState("");

  async function deleteMensagens(event) {
    event.preventDefault();
    if (document.getElementById("id").checked === false) {
      alert(
        "Deseja realmente excluir esta mensagem? Marque a caixa de confirmar exclusão, ao lado esquerdo !"
      );
    } else {
      await api
        .delete(`/deletarmsg/${id}`, {
          id,
        })
        .then((response) => {
          console.log(response.data);
          alert("Mensagem deletada com sucesso!");
          window.location.replace("/VisualizarVeiculos");
          setId(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    fetch("http://localhost:5500/mensagens ", {
      mode: "cors",
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPush(data);
      });
  }, []);

  return (
    <div className={classes.root}>
      {push.map((items) => (
        <form onSubmit={deleteMensagens}>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.secondaryHeading}>
                Nome: {items.nome}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Email: {items.email}
              </Typography>
              <Typography className={classes.secondaryHeading}>
                Assunto: {items.assunto}
              </Typography>

              <Typography className={classes.secondaryHeading}>
                Telefone : {items.telefone}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Mensagem : {items.mensagem}</Typography>
            </AccordionDetails>

            <DeleteIcon />
            <Checkbox
              color="primary"
              type="checkbox"
              name="id"
              id="id"
              value={items.id}
              onChange={(e) => setId(e.target.value)}
            />
            <Button
              type="submit"
              variant="contained"
              primary="primary"
              className={classes.buttonColor}
            >
              Apagar mensagem
            </Button>
          </Accordion>
        </form>
      ))}
    </div>
  );
}
