import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
    font-family: 'Josefin Sans', sans-serif;
}

input {
    font-family: inherit;
}
`;

export default GlobalStyles;
