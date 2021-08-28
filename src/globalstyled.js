import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    letter-spacing: 0.03em;
    background-color: #f3f3f3;
    font-family: Roboto, sans-serif;
    color: #222;
    font-size: 14px;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    background: none;
	  color: inherit;
	  border: none;
	  padding: 0;
	  font: inherit;
	  cursor: pointer;
	  outline: inherit;
  }
`;
