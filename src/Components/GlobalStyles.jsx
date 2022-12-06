import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }

  .navbar-brand, .nav-link, span {
    color: ${({ theme }) => theme.text} !important;
  }

  footer {
    background-color: ${({ theme }) => theme.footerBg} !important;
  }
    
`;
