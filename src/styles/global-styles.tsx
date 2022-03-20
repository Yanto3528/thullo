import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
    line-height: 1.2;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`
