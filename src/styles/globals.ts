import { createGlobalStyle } from 'styled-components';

import { body_background } from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  html {
    @media (max-width: 1200px) {
      font-size: 93.75%;
    }

    @media (max-width: 768px) {
      font-size: 87.5%;
    }
  }

  body {
    background: ${body_background};
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, select, button {
    font: 400 1rem "Montserrat", sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
