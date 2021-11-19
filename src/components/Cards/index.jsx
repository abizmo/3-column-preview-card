import React from 'react';

import cards from '../../fixtures/cards';

import Card from './Card';
import { Container } from './elements';

const Cards = () => (
  <Container>
    {
      cards.map(({
        id, img, title, text,
      }) => (
        <Card
          key={id}
          img={img}
          title={title}
          text={text}
        />
      ))
    }
  </Container>
);

export default Cards;
