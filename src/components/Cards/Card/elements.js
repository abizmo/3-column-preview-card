import styled from 'styled-components';

const theme = {
  colors: {
    orange: 'hsl(31, 77%, 52%)',
    cyan: 'hsl(184, 100%, 22%)',
    darkCyan: 'hsl(179, 100%, 13%)',
    white: 'hsla(0, 0%, 100%, 0.75)',
    gray: 'hsl(0, 0%, 95%)',
  },
};

export const Button = styled.button.attrs({
  type: 'button',
})`
  background-color: ${theme.colors.gray};
  border: none;
  border-radius: 32px;
  font-family: 'Lexend Deca';
  text-transform: capitalize;
  padding: 16px 32px;
`;

export const Container = styled.div`
  max-width: 327px;
  padding: 48px;

  &:first-child{
    background-color: ${theme.colors.orange}; 
    border-radius: 8px 8px 0 0;

    @media(min-width: 1440px) {
      border-radius: 8px 0 0 8px;
    }

    & button {
      color: ${theme.colors.orange}; 
    }
  }

  &:nth-child(2){
    background-color: ${theme.colors.cyan}; 

    & button {
      color: ${theme.colors.cyan}; 
    }
  }

  &:last-child{
    background-color: ${theme.colors.darkCyan}; 
    border-radius: 0 0 8px 8px;

    @media(min-width: 1440px) {
      border-radius: 0 8px 8px 0;
    }

    & button {
      color: ${theme.colors.darkCyan}; 
    }
  }
`;

export const Title = styled.h1`
  color: ${theme.colors.gray};
  font-family: 'Big Shoulders Display';
  margin: 40px 0;
  text-transform: uppercase;
`;

export const Text = styled.p`
  color: ${theme.colors.white};
  line-height: 24px;
  margin: 0 0 28px
`;
