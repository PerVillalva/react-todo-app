import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: ${(props) => props.theme.body};
    width: 100%;
}

@media (max-width: 430px) {
    body {
        padding: 0 12px;
    }
}
`;

export default GlobalStyle;
