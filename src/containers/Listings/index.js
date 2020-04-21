import React from 'react';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import ContentPage from "../ContentPage";
import Listing from "../../components/Listing";
import {Link} from "react-router-dom";

const listingsPlaceholder = [
  {
    'id': 1,
    'title': 'Простора квартира у центрі Львова',
    'photo_url': 'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  {
    'id': 2,
    'title': 'Простора квартира у центрі Львова',
    'photo_url': 'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  {
    'id': 3,
    'title': 'Простора квартира у центрі Львова',
    'photo_url': 'http://mediterraneogardenapartments.com/wp-content/uploads/2018/01/mediterraneo-garden-apartments-7-petrcane-13.jpg',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.87,
      'interests': ['Фізика', 'Подорожі']
    }
  },
];


export default function Listings() {
  return (
    <ContentPage>
      <Container maxWidth="lg">
        <Typography variant="h4" style={{marginBottom: "32px"}}>
          {listingsPlaceholder.length} житла
        </Typography>
        {listingsPlaceholder.map(listing => (
          <Link key={listing.id} style={{ textDecoration: 'none' }} to={`/listings/${listing.id}`}>
            <Listing {...listing} />
          </Link>
        ))}
      </Container>
    </ContentPage>
  );
}
