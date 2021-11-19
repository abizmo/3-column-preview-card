import React from 'react';
import PropTypes from 'prop-types';

import {
  Button, Container, Text, Title,
} from './elements';

const Card = ({
  img, title, text,
}) => (
  <Container>
    <img src={img} alt={title} />
    <Title>{title}</Title>
    <Text>{text}</Text>
    <Button>Learn more</Button>
  </Container>
);

Card.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
