import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  nav.navbar{
    background-color: ${({ theme }) => theme.navBarBg} !important;
  }
  .navbar-brand {
    color: ${({ theme }) => theme.text} !important;
  }
  .nav-link {
    color: ${({ theme }) => theme.text} !important;
  }
  
  `;
