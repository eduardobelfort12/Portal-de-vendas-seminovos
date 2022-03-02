import React from "react";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  colorButton: {
    minWidth: '150px',  
    background: "#D4A114",
    color: 'white',  
  },
});
export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider>
        <Box align="center">
          <Button
            variant="success"
            className={classes.colorButton}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}
