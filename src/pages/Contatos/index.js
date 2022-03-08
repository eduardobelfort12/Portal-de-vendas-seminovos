
import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import NavHeader from "../../components/header";
import { makeStyles } from "@material-ui/core/styles";
import Carousell from "../../components/carousel";
import { Box } from "@material-ui/core";
import SignInSide from "../../components/formContact";

const useStyles = makeStyles((theme) => ({
  filter: {
    padding: "30px",
  },
  icon: {
    marginRight: theme.spacing(2),
  },
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
 
    overflow : {
    overflowX: 'hidden',
    overflowY: "hidden",
  
   
  }
}));

export default function Contato() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <NavHeader />
      <main className={classes.overflow}>
        <div className={classes.heroContent}>
          <div>
            {" "}
            <Carousell />
          </div>
          <Box align="center">
          <section >
            {" "}
            <div>
              <SignInSide />
            </div>
          </section>
          </Box>
        </div>
        <section>
          <div>
          
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
