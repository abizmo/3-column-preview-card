import React from 'react';
import Card from './components/Card';

const data = [
  {
    id: 1,
    img: './images/icon-sedans.svg',
    title: 'Sedans',
    text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
  },
  {
    id: 2,
    img: './images/icon-suvs.svg',
    title: 'SUVs',
    text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
  },
  {
    id: 3,
    img: './images/icon-luxury.svg',
    title: 'Luxury',
    text: 'Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
  },
];

const App = () => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Card {...data[0]} />
);

export default App;
