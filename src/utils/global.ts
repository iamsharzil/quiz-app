import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after
   {
    margin:0;
    padding:0;
    font-family: 'Open Sans', sans-serif;
  }

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 62.5%;

    @media screen and (max-width: 100em) {
      font-size: 50%;
    }
  }
  
  body {
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.4rem;
    color : ${colors.black};
    background-color: ${colors.grey}
  }
`;

export default GlobalStyle;
