import { createGlobalStyle } from 'styled-components';

export const ResetCss = createGlobalStyle`
  html,
  body {
    width: 100vw;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: transparent;
  }

  * {
    box-sizing: border-box;
  }
`