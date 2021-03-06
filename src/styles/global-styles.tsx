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
    background-color: white;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
    margin: 0;
  }
`
