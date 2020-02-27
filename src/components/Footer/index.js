import React from "react";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import TelegramIcon from '@material-ui/icons/Telegram';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
  },
  footerIcon: {
    marginRight: theme.spacing(2),
  },
  iconLink: {
    color: '#ffffff',
    textDecoration: 'none',
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Box component="div" p={3} className={classes.footer}>
      <Box component="div" p={2}>
        <a href="https://facebook.com/" className={classes.iconLink}>
          <FacebookIcon fontSize="large" className={classes.footerIcon} />
        </a>
        <a href="https://telegram.org/" className={classes.iconLink}>
          <TelegramIcon fontSize="large" className={classes.footerIcon} />
        </a>
        <a href="https://instagram.com/" className={classes.iconLink}>
          <InstagramIcon fontSize="large" />
        </a>
      </Box>
      <Typography align="center" variant="subtitle1">Національний університет &quot;Києво-Могилянська академія&quot;</Typography>
      <Typography align="center" variant="caption">KMA CouchSurfing. Всі права застережено.</Typography>
    </Box>
  );
}
