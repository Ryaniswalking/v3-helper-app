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
    const textToCopy = JSON.stringify(testCases);
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => console.log("Copied"))
      .catch((err) => console.error(err));
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
