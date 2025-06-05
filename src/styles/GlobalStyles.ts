import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    html {
        overflow-y: scroll;
    }

    body {
        background-color: #F5F5F5;
        margin: 0 auto;
        min-width: 333px;
 
    }
`