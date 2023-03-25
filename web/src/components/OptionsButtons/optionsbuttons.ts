import styled from 'styled-components';

import { ButtonProps } from '.';

export const Button = styled.button<ButtonProps>`
  grid-area: ${(props) => `${props.grid}`};
  border: none;
  background-color: ${(props) => props.backgroundColor};
`