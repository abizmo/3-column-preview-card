import styled, { css } from 'styled-components';

export const Button = styled.button.attrs({
  type: 'button',
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.gray};
    border: 2px solid ${theme.colors.neutral.gray};
    border-radius: 32px;
    font-family: ${theme.typography.family.sansSerif};
    text-transform: capitalize;
    padding: 16px 32px;

    &:hover {
      background-color: transparent;
      color: ${theme.colors.neutral.gray}!important;
      cursor: pointer;
    }
  `}
`;

export const Container = styled.div`
${({ theme }) => css`
  max-width: 327px;
  padding: 48px;

  &:first-child{
    background-color: ${theme.colors.primary.orange}; 
    border-radius: 8px 8px 0 0;

    @media(min-width: ${theme.breakpoint.desktop}) {
      border-radius: 8px 0 0 8px;
    }

    & button {
      color: ${theme.colors.primary.orange}; 
    }
  }

  &:nth-child(2){
    background-color: ${theme.colors.primary.cyan}; 

    & button {
      color: ${theme.colors.primary.cyan}; 
    }
  }

  &:last-child{
    background-color: ${theme.colors.primary.darkCyan}; 
    border-radius: 0 0 8px 8px;

    @media(min-width: ${theme.breakpoint.desktop}) {
      border-radius: 0 8px 8px 0;
    }

    & button {
      color: ${theme.colors.primary.darkCyan}; 
    }
  }
  `}
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.gray};
    font-family: ${theme.typography.family.display};
    margin: 40px 0;
    text-transform: uppercase;
  `}
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  line-height: 24px;
  margin: 0 0 28px
`;
