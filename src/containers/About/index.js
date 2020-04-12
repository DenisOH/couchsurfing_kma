import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import ContentPage from "../ContentPage";
import FirstPicture from "../../img/about1.png";
import SecondPicture from "../../img/about2.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
  },
  firstPicture: {
    position: "relative",
    zIndex: "-1",
    right: "-20%",
    top: 0,
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  secondPicture: {
    position: "relative",
    zIndex: "-1",
    left: "-20%",
    top: 0,
    width: "40vw",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <ContentPage>
      <Container maxWidth="lg" className={classes.container}>
        <Container maxWidth="sm">
          <Typography variant="h6">
            Каучсерфінг — це прекрасна можливість подорожувати не витрачаючи кошти на житло. Ти зустрічаєш місцевих жителів, дізнаєшся про місто з перших уст, знаходиш друзів. Єдиний недолік у тому, що ти ніколи не знаєш, хто ж буде твоїм співмешканцем. Наш проект дозволяє усунути головний мінус каучсерфінгу. Навіть якщо ти не впевнений до кого ти їдеш, то ми точно знаємо! Ви тусили у Спудейському Братстві, але з різницею у чотири роки. Або працювали над однією екоініціативою, але так і не познайомились ближче. Наш сервіс не лише допомагає знайти житло у будь-якому куточку світу. Він з’єднує могилянців усіх поколінь, продовжуючи розвивати нашу спільноту далеко за стінами НаУКМА.
          </Typography>
        </Container>
        <img src={FirstPicture} alt="background" className={classes.firstPicture} />
      </Container>
      <Container maxWidth="lg" className={classes.container}>
        <img src={SecondPicture} alt="background" className={classes.secondPicture} />
        <Container maxWidth="sm">
          <Typography variant="h6">
            Ідея для проекти з’явилась у студентів факультету інформатики ще на початку навчання, але вийшло її реалізувати лише під кінець бакалаврату у рамках одного з курсів. Наша команда щиро вірить у те, що платформа допоможе вирішити ряд проблем, з якими стикається наша спільнота. Завдяки постійної комунікації та зв’язкам, випускники, студенти, викладачі та адміністрація університету ефективніше працюватиме над вирішенням питанням, які є болючими для Академії зараз. Ми не просто допомагаємо знайти безкоштовне житло під час подорожі, ми розвиваємо нашу альма-матер, зміцнюємо зв’язок поколінь та історії. Долучайся!
          </Typography>
        </Container>
      </Container>
    </ContentPage>
  );
}
