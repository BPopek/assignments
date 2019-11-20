import {createGlobalStyle} from 'styled-components/macro';


export default createGlobalStyle`

    @import url('https://fonts.googleapis.com/css?family=Montserrat|Raleway');

    @font-face {
        font-family: Raleway;
        font-style: normal;
        font-weight: 500;
        font-display: fallback
    }
    body {
        margin: 0;
        padding: 0;
        font-family: Raleway, sans-serif;

    }
    h1 {
        font-family: Montserrat;
    }
    a {
        font-family: Raleway, sans-serif;

    }
`