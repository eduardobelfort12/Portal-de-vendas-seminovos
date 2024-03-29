import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import { Link } from "react-router-dom";
import ListagemAnunciosInativos from "../../../components/AdmPageComponents/anunciosInativosComponent";
import MailIcon from "@material-ui/icons/Mail";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import EditIcon from "@material-ui/icons/Edit"
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    background: "#006640",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
      background: theme.palette.success.light,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      background: theme.palette.success,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: theme.palette.success,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    background: theme.palette.success,
    flexShrink: 0,
  },
  drawerPaper: {
    background: theme.palette.success,
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  TextDecoration: {
    TextDecoration: "none",
  },
}));

export default function AnunciosInativos() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Anúncios inativos
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>

        <Divider />
        <List>
          <ListItem button>
            <LocalShippingIcon />
            <Link to="/registrarVeiculos">Cadastrar Veículos</Link>
            <ListItemText />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem button>
            <FindInPageIcon />
            <Link to="/VisualizarVeiculos">Visualizar Veículos</Link>
            <ListItemText />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem button>
            <MailIcon />
            <Link to="/MensagensAnuncios">Mensagens recebidas</Link>
            <ListItemText />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem button>
            <VisibilityOffIcon />
            <Link to="/AnunciosInativos">Anuncios Inativos</Link>
            <ListItemText />
          </ListItem>
        </List>
        <Divider />
        <Divider />
        <List>
          <ListItem button>
            <EditIcon />
            <Link to="/EditarAnuncios">Editar Anúncios</Link>
            <ListItemText />
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main
        style={{ overflowX: "hidden" }}
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <ListagemAnunciosInativos />
      </main>
    </div>
  );
}
