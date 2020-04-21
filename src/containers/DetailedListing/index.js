import React from "react";
import {useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import StarIcon from '@material-ui/icons/Star';
import {makeStyles} from "@material-ui/core/styles";
import ContentPage from "../ContentPage";
import {Carousel} from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Avatar from "@material-ui/core/Avatar";
import PersonIcon from '@material-ui/icons/Person';
import WifiIcon from '@material-ui/icons/Wifi';
import PetsIcon from '@material-ui/icons/Pets';
import HotelIcon from '@material-ui/icons/Hotel';
import BathtubIcon from '@material-ui/icons/Bathtub';
import Fab from "@material-ui/core/Fab";
import EditIcon from '@material-ui/icons/Edit';
import {Map, Marker, TileLayer} from "react-leaflet";

const detailedListingsPlaceholder = {
  1: {
    'title': 'Простора квартира у центрі Львова',
    'location': 'Львів, Україна',
    'photos': [
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-11.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-1.jpg',
    ],
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laudantium molestiae quibusdam voluptatem voluptates! Eius quae, ullam? Aliquam aperiam architecto assumenda corporis culpa, enim eveniet inventore itaque iure, nemo nostrum obcaecati odit perspiciatis provident quidem sapiente unde veritatis voluptas. Ea et id incidunt minima numquam quas quisquam rerum. Atque autem eius et eum excepturi hic in laudantium nulla pariatur reiciendis.",
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'coords': [49.839663, 24.032774],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  2: {
    'title': 'Простора квартира у центрі Львова',
    'location': 'Львів, Україна',
    'photos': [
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-11.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-1.jpg',
    ],
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laudantium molestiae quibusdam voluptatem voluptates! Eius quae, ullam? Aliquam aperiam architecto assumenda corporis culpa, enim eveniet inventore itaque iure, nemo nostrum obcaecati odit perspiciatis provident quidem sapiente unde veritatis voluptas. Ea et id incidunt minima numquam quas quisquam rerum. Atque autem eius et eum excepturi hic in laudantium nulla pariatur reiciendis.",
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'coords': [49.839663, 24.032774],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  3: {
    'title': 'Простора квартира у центрі Львова',
    'location': 'Львів, Україна',
    'photos': [
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-11.jpg',
      'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-1.jpg',
    ],
    'description': "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo laudantium molestiae quibusdam voluptatem voluptates! Eius quae, ullam? Aliquam aperiam architecto assumenda corporis culpa, enim eveniet inventore itaque iure, nemo nostrum obcaecati odit perspiciatis provident quidem sapiente unde veritatis voluptas. Ea et id incidunt minima numquam quas quisquam rerum. Atque autem eius et eum excepturi hic in laudantium nulla pariatur reiciendis.",
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'coords': [49.839663, 24.032774],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
};

const useStyles = makeStyles((theme) => ({
  action: {
    position: "fixed",
    bottom: "5vh",
    right: "5vh",
    zIndex: "2000"

  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  actionText: {
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  rating: {
    display: "flex",
    alignItems: "center",
  },
  header: {
    marginBottom: theme.spacing(4),
  },
  img: {
    width: '100%',
  },
  userPhoto: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginRight: theme.spacing(6),
    maxWidth: "48px",
    textAlign: "center",
    "& > span": {
      marginTop: theme.spacing(1),
    }
  },
  mainDescription: {
    display: "flex",
    flexWrap: "wrap",
    marginBottom: theme.spacing(4),
  },
  left: {
    display: "flex",
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      width: '100%',
    },
  },
  right: {
    display: "flex",
    justifyContent: "center",
    width: '50%',
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(4),
      width: '100%',
      justifyContent: "space-evenly",
    },
  }
}));

export default function DetailedListing() {
  const classes = useStyles();
  const {id} = useParams();
  const appartmentDetails = detailedListingsPlaceholder[id];

  return (
    <ContentPage>
      <Fab color="primary" variant="extended" className={classes.action}>
        <EditIcon className={classes.extendedIcon} />
        <span className={classes.actionText}>Надіслати запит</span>
      </Fab>
      <Container maxWidth="lg">
        <div className={classes.header}>
          <Typography variant="h4">
            {appartmentDetails.title}
          </Typography>
          <div className={classes.rating}>
            <StarIcon color="primary" fontSize="small" />
            <Typography color="primary" variant="subtitle">
              {appartmentDetails.user.rating}
            </Typography>
            <Typography color="primary" variant="subtitle" style={{marginLeft: "24px"}}>
              {appartmentDetails.location}
            </Typography>
          </div>
        </div>
        <Container maxWidth="md">
          <Carousel>
            {appartmentDetails.photos.map(pic => (
              <div key={pic}>
                <img src={pic} alt="Apartment" className={classes.img}/>
              </div>
            ))}
          </Carousel>
        </Container>
        <div className={classes.mainDescription}>
          <div className={classes.left}>
            <div className={classes.userPhoto}>
              <Avatar>
                <PersonIcon />
              </Avatar>
              <span>{appartmentDetails.user.name}</span>
            </div>
            <Typography>
              {appartmentDetails.description}
            </Typography>
          </div>
          <div className={classes.right}>
            <div className={classes.userPhoto}>
              <Avatar>
                <WifiIcon />
              </Avatar>
              <span>Wi-Fi</span>
            </div>
            <div className={classes.userPhoto}>
              <Avatar>
                <HotelIcon />
              </Avatar>
              <span>1 ліжко</span>
            </div>
            <div className={classes.userPhoto}>
              <Avatar>
                <PetsIcon />
              </Avatar>
              <span>Тварини дозволяються</span>
            </div>
            <div className={classes.userPhoto}>
              <Avatar>
                <BathtubIcon />
              </Avatar>
              <span>Душ</span>
            </div>
          </div>
        </div>
        <Typography variant="h5" style={{marginBottom: "12px"}}>
          Розташування
        </Typography>
        <Map center={appartmentDetails.coords} zoom={13} style={{height: "400px"}}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={appartmentDetails.coords} />
        </Map>
      </Container>
    </ContentPage>
  );
}
