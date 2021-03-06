import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}

body{
    font-family: 'Abril Fatface', cursive;
    background-color: #5E5E5E;
    color: #E5E5e5;
    overflow-x:hidden;
   
}

a{
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer;
    color: #E5E5e5;
}

h1{
    font-size:5rem;
    font-weight:400;
    display:inline-block;
    @media (max-width: 650px) {
        font-size:3.7rem;
    }
}
h3{
    font-size:2rem;
    margin-top:1rem;
    @media (max-width: 650px) {
        font-size:1.9rem;
    }
}

p{
    font-size:1.7rem;
    font-family: 'Raleway', sans-serif;
    @media (max-width: 650px) {
        font-size:1.3rem;
    }

}



`;

export default GlobalStyle;
