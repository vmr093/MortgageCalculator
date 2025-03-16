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
  height: 70vh;
  width: 70vw;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  background: #EAF4FA;
`;

const Card = styled.div`
  display: flex;
  background: white;
  border-radius: 12px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 720px;  /* Exact width from preview */
`;

const LeftPanel = styled.div`
  width: 50%;
  padding: 30px;
`;

const RightPanel = styled.div`
  width: 50%;
  background: #162C41;
  padding: 30px;
`;


export default App;
