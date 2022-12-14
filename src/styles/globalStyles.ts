import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import BinggraeSamancoRegular from './fonts/BinggraeSamanco.ttf';
import BinggraeSamancoBold from './fonts/BinggraeSamanco-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    max-width: 390px;
    height: 100%;
    width: 100%;
    margin: 0 auto;
  }

  #root{
    position: fixed;
    overflow: hidden;
    max-width: 390px;
    width: 100%;
    height: 100%;
  }
  
  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color : transparent;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    -webkit-appearance: none;
    border-radius: 0;
    padding: 0;
  }

  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }

  input:focus {
    outline: none;
  }

  body, button, input, textarea {
    font-family: Pretendard;
  }

  textarea {
    box-sizing: border-box;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
  }

  textarea:focus {
    outline: none;
  }

  a {
    text-decoration:none;
  }

  input[disabled] {
    background-color: white;
  }
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  @font-face{
    font-family:"Binggrae Samanco";
    src:url(${BinggraeSamancoRegular}) format('truetype');
  }

  @font-face{
    font-family:"BinggraeSamancoBold";
    src:url(${BinggraeSamancoBold}) format('truetype');
  }
  
`;

export default GlobalStyle;
