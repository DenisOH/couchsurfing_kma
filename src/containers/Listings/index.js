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
    'photo_url': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.77,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  {
    'id': 2,
    'title': 'Простора квартира у центрі Львова',
    'photo_url': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.77,
      'interests': ['Фізика', 'Подорожі']
    }
  },
  {
    'id': 3,
    'title': 'Простора квартира у центрі Львова',
    'photo_url': 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam asperiores beatae consequuntur corporis cupiditate debitis dicta dolorem ducimus eaque eveniet explicabo fugiat fugit illo illum ipsa ipsam iste iure magnam magni maiores minima modi molestiae nisi non odit officiis porro, praesentium quidem quis ratione rem tempore velit. Assumenda, magni.',
    'specifics': ['Wi-Fi', 'тварини дозволяються'],
    'user': {
      'name': 'Андрій',
      'title': 'Студент ФІ',
      'rating': 4.77,
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
          <Link style={{ textDecoration: 'none' }} to={`listings/${listing.id}`}>
            <Listing key={listing.id} {...listing} />
          </Link>
        ))}
      </Container>
    </ContentPage>
  );
}
