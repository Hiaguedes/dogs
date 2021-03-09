import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {
    theme: {
        bg: string;
        color: string;
    }
}

const GlobalStyle = createGlobalStyle<GlobalStylesProps>`

    * {
        margin: 0;
        padding: 0;
        text-rendering: optimizeLegibility;
        outline: none;
        font-family: Arial, Helvetica, sans-serif;
    }

    a { 
        text-decoration: none;
        color: black;
    }

    body { 
        width: 100vw;
        height: 100vh;
        max-height: 100%;
        background-color: ${({theme}) => theme.bg};
        color: ${({theme}) => theme.color};
    }

    ul, li {
        list-style: none;
    }

    img { 
        max-width: 100%;
    }

    button { 
        display: inline-block;
    }
`;

export default GlobalStyle;