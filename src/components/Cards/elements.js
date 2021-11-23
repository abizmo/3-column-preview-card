import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  margin: 24px 0;
  max-width: 920px;

  @media(min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
