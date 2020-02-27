import React from "react";
import {NavLink} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import NavLinkButton from "../NavLinkButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  appbar: {
    background: 'transparent',
    boxShadow: 'none',
  },
  title: {
    flexGrow: 1,
  },
  desktopLinks: {
    [theme.breakpoints.down("xs")]: {
      display: "none"
    },
  },
  mobileLinks: {
    [theme.breakpoints.up("sm")]: {
      display: "none"
    },
    color: theme.palette.primary.main,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.title}>
            KMA CouchSurfing
          </Typography>
          <div className={classes.desktopLinks}>
            <NavLinkButton className={classes.menuButton} to="/about">Про проект</NavLinkButton>
            <NavLinkButton className={classes.menuButton} to="/register">Реєстрація</NavLinkButton>
            <NavLinkButton className={classes.menuButton} to="/login">Вхід</NavLinkButton>
          </div>
          <div className={classes.mobileLinks}>
            <IconButton
              color="inherit"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem component={NavLink} to="/about" onClick={handleClose}>Про проект</MenuItem>
              <MenuItem component={NavLink} to="/register" onClick={handleClose}>Реєстрація</MenuItem>
              <MenuItem component={NavLink} to="/login" onClick={handleClose}>Вхід</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}
