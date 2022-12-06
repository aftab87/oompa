import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle
  `

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text} !important;
    transition: all 0.50s linear;
  }

  .form-control {
    background: ${({ theme }) => theme.formControlBackground};
    color: ${({ theme }) => theme.text} !important;
  }

  .form-control::placeholder {
    color: ${({ theme }) => theme.formControlHint} !important;
  }

  // .form-control:focus {
  //   border-color: 'red';
  // }

  .navbar-brand, .nav-link, span {
    color: ${({ theme }) => theme.text} !important;
  }
    
`



