import React from "react";
import {
  makeStyles,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    minWidth: "150px",
  },
}));
const theme = createTheme({
  palette: {
    primary: {
      main: "#D4A114",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#FFBE09",
      contrastText: "#ffffff",
    },
  },
});
export default function CustomizedButtons() {
  const classes = useStyles();

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box align="center">
          <Button
            variant="contained"
            color="primary"
            className={classes.margin}
            startIcon={<SearchIcon />}
          >
            Buscar
          </Button>
        </Box>
      </ThemeProvider>
    </div>
  );
}
