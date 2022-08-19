import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    body {
        font-family: "Roboto Condensed", sans-serif;
        background-color: ${({ theme }) => theme.color.background};
        margin: auto;
        width: 50%;
        min-width: 300px;
        
        button {
            transition: all ease 0.2s;
        }
    }

`;

export default globalStyle;
