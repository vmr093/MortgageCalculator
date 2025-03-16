import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background: url("/background.png") no-repeat center center;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  /* Ensure the form and text are readable on mobile */
  h2 {
    font-size: 24px;
    text-align: center;
  }

  button {
    width: 100%;
    padding: 12px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    body {
      flex-direction: column;
      align-items: center;
      padding: 10px;
    }

    h2 {
      font-size: 20px;
    }
  }
`;

export default GlobalStyles;
