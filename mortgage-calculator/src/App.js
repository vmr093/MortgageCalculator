import React, { useState } from "react";
import MortgageCalculator from "./components/MortgageCalculator";
import ResultDisplay from "./components/ResultDisplay";
import GlobalStyles from "./styles/GlobalStyles";
import styled from "styled-components";

const App = () => {
  const [results, setResults] = useState(null);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Card>
          <LeftPanel>
            <MortgageCalculator setResults={setResults} />
          </LeftPanel>
          {results && (
            <RightPanel>
              <ResultDisplay results={results} />
            </RightPanel>
          )}
        </Card>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65vh;
  width: 65vw;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  background: #EAF4FA;
  border-radius: 12px;

  @media (max-width: 1024px) {
    width: 80vw;
    height: auto;
    padding: 20px;
  }

  @media (max-width: 768px) {
    width: 90vw;
    flex-direction: column;
    height: auto;
    padding: 15px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1); /* Softer shadow on smaller screens */
  }

  @media (max-width: 480px) {
    width: 95vw;
    padding: 10px;
  }
`;

const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 720px; /* Default width */

  @media (max-width: 1024px) {
    width: 90vw; /* Slightly smaller on tablets */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack panels on mobile */
    width: 95vw; /* Take up most of the screen width */
    align-items: center;
  }
`;

const LeftPanel = styled.div`
  width: 50%;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 20px; /* Reduce padding for better spacing */
  }
`;

const RightPanel = styled.div`
  width: 50%;
  background: #162C41;
  padding: 30px;

  @media (max-width: 768px) {
    width: 100%; /* Full width on mobile */
    padding: 20px;
    text-align: center; /* Center align text for better readability */
  }
`;

export default App;
