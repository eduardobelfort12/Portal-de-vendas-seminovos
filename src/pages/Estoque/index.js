import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavHeader from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import FullWidthGrid from "../../components/infoHome";
import PaginationComponent from "../../components/Pagination";
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
  footer: {
    background: "#006640",
    padding: theme.spacing(5),
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
}));

export default function Estoque() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <NavHeader />
      <main className={classes.overflow}>
        <div className={classes.heroContent}></div>
        <div style={{ padding: "100px" }}>
          <PaginationComponent />
        </div>
        <section>
          <div className={classes.heroContent}>
            <FullWidthGrid />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <div align="center">
          <img
            src="https://toraseminovos.com.br/wp-content/themes/toraseminovos/img/logos/black-logo-tora.png"
            alt=""
            width="150px"
          ></img>
        </div>
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
