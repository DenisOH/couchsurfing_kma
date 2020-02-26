import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import NavLinkButton from "../NavLinkButton";
import Typography from "@material-ui/core/Typography";

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
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" color="primary" className={classes.title}>
            KMA CouchSurfing
          </Typography>
          <NavLinkButton className={classes.menuButton} to="/about">Про проект</NavLinkButton>
          <NavLinkButton className={classes.menuButton} to="/register">Реєстрація</NavLinkButton>
          <NavLinkButton className={classes.menuButton} to="/login">Вхід</NavLinkButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}
