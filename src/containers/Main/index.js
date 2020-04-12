import React from "react";
import {NavLink} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "../../components/Button";
import ContentPage from "../ContentPage";
import MainBackground from "../../img/main-background.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: theme.spacing(8),
  },
  title: {
    fontWeight: 300,
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up("sm")]: {
      width: '50%',
    },
  },
  backgroundImage: {
    position: "absolute",
    zIndex: "-1",
    right: 0,
    bottom: 0,
    height: "75vh",
  },
}));

export default function Main() {
  const classes = useStyles();

  return (
    <ContentPage>
      <Container maxWidth="sm" className={classes.container}>
        <Typography className={classes.title} align="center" variant="h4">Знайди частинку Могилянки в будь-якому куточку світу</Typography>
      </Container>
      <Container maxWidth="md">
        <Typography className={`${classes.title} ${classes.subtitle}`} variant="h6">
          Наш сервіс допомагає з легкістю віднайти вихідця з рідної альма-матер у будь-якому місці планети - будь то звичайний спудей, алюмнус чи навіть професор
        </Typography>
        <NavLink to="/register" style={{textDecoration: 'none'}}>
          <Button>Приєднатись</Button>
        </NavLink>
      </Container>
      <img className={classes.backgroundImage} src={MainBackground} />
    </ContentPage>
  )
}
