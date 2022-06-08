import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html {
    font-size: 62.5%;
    line-height: 1.6;
    min-height: 100%;
  }
  
  body {
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
  }

  #root {
      display: flex;
      flex-direction: column;
      height: 100%;
  }

  header {
    font-size: 3rem;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.2;
  }
  a {
    text-decoration: none;
  }
  img {
    display: block;
    width: 100%;
  }
  button,
  input, 
  textarea {
    border: none;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
  }
  button {
    cursor: pointer;
  }
`

export default GlobalStyle
