import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  min-height: 100vh;
  min-width: 100vw;
}

button {
  border: none;
}

img {
  display: block;
  max-width: 100%;
}

.anime {
    opacity: 0;
    transform: translateX(-10px);
    animation: show .3s ease forwards;
  }

@keyframes show {
  to {
    opacity: 1;
    transform: initial;
  }
}

`;
