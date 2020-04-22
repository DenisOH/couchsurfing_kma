import React from "react";
import {useParams} from "react-router-dom";
import ContentPage from "../ContentPage";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import NavLinkButton from "../../components/NavLinkButton";

const userData = {
  1: {
    fullName: "Лія Берідзе",
    birthday: "23.01.1999",
    kmaYears: "2016-2020",
    role: "Студентка ФІ",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi distinctio fuga iste laborum molestiae repudiandae sit voluptas voluptates voluptatibus? At commodi consequuntur corporis cumque, ea eum itaque iusto magni obcaecati sequi sunt tempora ut veritatis vitae voluptatibus! Aperiam corporis, distinctio doloremque esse est eum facilis ipsum molestias nemo officiis omnis, perferendis porro quas quia quod recusandae repellendus vero voluptatem? Temporibus.",
    interests: ["Подорожі", "Спорт", "Програмування"]
  }
};

const useStyles = makeStyles((theme) => ({
  profileWrapper: {
    display: "flex",
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  profilePic: {
    width: "15%"
  },
  avatarLarge: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  mainUserData: {
    marginTop: theme.spacing(2),
    width: "100%",
    "& th": {
      verticalAlign: "baseline",
    },
    "& td": {
      verticalAlign: "baseline",
      paddingBottom: theme.spacing(2),
    },
  },
  primaryColor: {
    color: theme.palette.primary.main,
    textAlign: "left",
    paddingRight: theme.spacing(6),
  },
  interests: {
    marginLeft: theme.spacing(4),
    "& > span": {
      padding: theme.spacing(0.75),
      backgroundColor: theme.palette.primary.main,
      borderRadius: "12px",
      color: "white",
      marginRight: theme.spacing(2),
    }
  },
  appartments: {
    marginTop: theme.spacing(2),
  },
  notFound: {
    marginBottom: theme.spacing(2),
  }
}));

export default function Profile() {
  const classes = useStyles();
  const {id} = useParams();
  const user = userData[id];

  return (
    <ContentPage>
      <Container maxWidth="lg">
        <div className={classes.profileWrapper}>
          <div className={classes.profilePic}>
            <Avatar className={classes.avatarLarge}>
              <PersonIcon />
            </Avatar>
          </div>
          <div className={classes.mainUserData}>
            <table>
              <tbody>
                <tr>
                  <th className={classes.primaryColor}>Ім&apos;я: </th>
                  <td>{user.fullName}</td>
                </tr>
                <tr>
                  <th className={classes.primaryColor}>День народження: </th>
                  <td>{user.birthday}</td>
                </tr>
                <tr>
                  <th className={classes.primaryColor}>Роль: </th>
                  <td>{user.role}</td>
                </tr>
                <tr>
                  <th className={classes.primaryColor}>Роки в КМА: </th>
                  <td>{user.kmaYears}</td>
                </tr>
                <tr>
                  <th className={classes.primaryColor}>Опис: </th>
                  <td>{user.description}</td>
                </tr>
                <tr>
                  <th className={classes.primaryColor}>Інтереси: </th>
                  <td className={classes.interests}>
                    {user.interests.map(interest => (
                      <span key={interest}>{interest}</span>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Divider />
        <div className={classes.appartments}>
          <Typography variant="h5" className={classes.notFound}>
            Ви ще не додали жодних житл...
          </Typography>
          <NavLinkButton to="/add-listing" isContained={true}>
            ДОДАТИ
          </NavLinkButton>
        </div>
      </Container>
    </ContentPage>
  );
}
