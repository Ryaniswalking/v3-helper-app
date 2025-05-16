import { useState } from "react";
import TestCaseContainerToolbar from "./TestCaseContainerToolbar";
import TestCaseList from "./TestCaseList";
import TestCaseForm from "./AddTestCase";
import GlobalInputs from "./GlobalInputs";
import "../../styles/TestCaseContainer.css";
import { Grid, Box, Button } from "@mui/material";

function TestCaseContainer({ onClickClose }) {
  const [showNewTestCaseForm, setShowNewTestCaseForm] = useState(false);
  const [testCases, setTestCases] = useState([]);
  const [globalInputs, setGlobalInputs] = useState({
    app: "",
    testCaseCollection: "",
    testScenarionCollection: "",
    testFlow: "",
    testClass: "",
  });

  const handleAddTestCaseClick = () => {
    setShowNewTestCaseForm(true);
  };

  const handleCopyClick = () => {
    linkScenarioToTest();
    setTimeout(() => {
      const textToCopy = JSON.stringify(testCases, null, 2);
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => console.log("Copied"))
        .catch((err) => console.error(err));
    }, 0);
  };

  const linkScenarioToTest = () => {
    setTestCases(
      testCases.map((testCase) => {
        const updatedSteps = [...testCase.steps];
        console.log(updatedSteps);
        testCase.scenarios.forEach((scenario, index) => {
          console.log("Scenario: ", scenario);
          updatedSteps.push({
            data_source: scenario["scenario_collection"],
            data_key: index.toString(),
            data_scenario_id: scenario["data_id"],
          });
        });

        return {
          ...testCase,
          steps: updatedSteps,
        };
      })
    );
  };

  const handleOnCreate = (newTestCaseData, newTestScenarios) => {
    newTestCaseData["scenarios"] = newTestScenarios;
    setTestCases((prev) => [
      ...prev,
      { id: prev.length + 1, ...newTestCaseData },
    ]);
    setShowNewTestCaseForm(false);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12 }}>
          <Button id="dashboard-close" onClick={onClickClose}>
            Close
          </Button>
          <TestCaseContainerToolbar
            handleAddTestCaseClick={handleAddTestCaseClick}
          />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <GlobalInputs setGlobalInputs={setGlobalInputs} />
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TestCaseList testCases={testCases} />
        </Grid>
        {showNewTestCaseForm && (
          <TestCaseForm
            onCreate={handleOnCreate}
            onClose={() => setShowNewTestCaseForm(false)}
            testCases={testCases}
            globalInputs={globalInputs}
          />
        )}
      </Grid>
      <Grid item size={{ xs: 12 }}>
        <Button variant="contained" onClick={handleCopyClick}>
          Copy
        </Button>
      </Grid>
    </Box>
  );
}

export default TestCaseContainer;
