import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    
    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --larger: 5rem;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next{
    height: 100%;
    background: var(--background);
    color: var(--white);
  }

  @media (max-width: 1068px) {
      html {
          font-size: 93.75%;
      }
    }
    @media (max-width: 768px) {
      html {
          font-size: 87.5%;
      }
    }

    body{
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    p, a{
      font-size: 2rem;
      line-height: var(--medium);
    }

    a{
      text-decoration: none;
      color: var(--highlight);
    }
`;
