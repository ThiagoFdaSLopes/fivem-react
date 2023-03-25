import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  grid-area: ${(props) => `${props.grid}`};
  border: none;
  background-color: ${(props) => props.backgroundColor};
  padding: 0;
  margin: 0;

  p {
    font-style: bold;
    font-weight: 900;
    font-size: 52px;
    padding: 0;
    margin: 0;
    text-align: center;
    color: white;
    text-transform: uppercase;
  }

  &:nth-child(n+2) {
      font-size: 22px;
  }

  &:nth-child(1) {
    p {
      font-size: 52px;
    }
  }

  &:nth-child(n+2) {
    p {
      font-size: 22px;
    }
  }
`