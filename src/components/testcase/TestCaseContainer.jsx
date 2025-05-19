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
    setTimeout(() => {
      const textToCopy = JSON.stringify(testCases, null, 2);
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => console.log("Copied"))
        .catch((err) => console.error(err));
    }, 0);
  };

  const linkScenarioToTest = (testCase) => {
    const updatedSteps = [...testCase.steps];
    testCase.scenarios.forEach((scenario, index) => {
      console.log("Scenario: ", scenario);
      updatedSteps.push({
        data_source: scenario["scenario_collection"],
        data_key: (index + 1).toString(),
        data_scenario_id: scenario["data_id"],
      });
    });

    return {
      ...testCase,
      steps: updatedSteps,
    };
  };

  const constructTestScenarioObject = (testCases) => {
    const testScenarioObject = {};

    testCases.forEach((testCase) => {
      const appName = testCase.app_name;

      testCase.scenarios.forEach((scenario) => {
        const collection = scenario.scenario_collection;

        const { scenario_collection, ...strippedScenario } = scenario;

        if (!(appName in testScenarioObject)) {
          testScenarioObject[appName] = {};
        }
        if (!(collection in testScenarioObject[appName])) {
          testScenarioObject[appName][collection] = [];
        }

        testScenarioObject[appName][collection].push(strippedScenario);
      });
    });

    return testScenarioObject;
  };

  const constructTestCaseObject = (testCases) => {
    const testCaseObj = {};

    testCases.forEach((testCase) => {
      const appName = testCase.app_name;
      const collection = testCase.test_case_collection;

      const {
        id,
        test_case_collection,
        scenarios,
        ...strippedTestCase
      } = testCase;

      if (!(appName in testCaseObj)) {
        testCaseObj[appName] = {};
      }

      if (!(collection in testCaseObj[appName])) {
        testCaseObj[appName][collection] = [];
      }

      testCaseObj[appName][collection].push(strippedTestCase);
    });
    return testCaseObj;
  };

  const handleOnCreate = (newTestCaseData, newTestScenarios) => {
    const linkedTestCase = linkScenarioToTest({
      ...newTestCaseData,
      scenarios: newTestScenarios,
    });

    setTestCases((prev) => [
      ...prev,
      { id: prev.length + 1, ...linkedTestCase },
    ]);
  };

  const handleExportTestCase = () => {
    const blob = new Blob(
      [JSON.stringify(constructTestCaseObject(testCases), null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "test_cases.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleExportTestScenario = () => {
    const blob = new Blob(
      [JSON.stringify(constructTestScenarioObject(testCases), null, 2)],
      { type: "application/json" }
    );
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "test_scenarios.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
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
        <Button variant="contained" onClick={handleExportTestCase}>
          Export Test Cases
        </Button>
        <Button variant="contained" onClick={handleExportTestScenario}>
          Export Test Scenario
        </Button>
      </Grid>
    </Box>
  );
}

export default TestCaseContainer;
