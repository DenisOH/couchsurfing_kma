import React from "react";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import ContentPage from "../ContentPage";
import Button from "../../components/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: 600,
  },
  input: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(2),
  }
}));

export default function Register() {
  const classes = useStyles();

  return (
    <ContentPage>
      <Container maxWidth="sm" className={classes.container}>
        <Typography className={classes.title} align="center" variant="h5">Зареєструйтеся в KMA CouchSurfing</Typography>
        <TextField className={classes.input} id="full_name" label="Повне ім'я" type="text" variant="outlined" fullWidth autoFocus required />
        <TextField className={classes.input} id="username" label="Електронна пошта" type="email" variant="outlined" fullWidth autoFocus required />
        <TextField className={classes.input} id="phone" label="Телефон" type="text" variant="outlined" fullWidth autoFocus required />
        <TextField className={classes.input} id="password" label="Пароль" type="password" variant="outlined" fullWidth autoFocus required />
        <Button className={classes.button}>Зареєструватися</Button>
      </Container>
    </ContentPage>
  )
}
