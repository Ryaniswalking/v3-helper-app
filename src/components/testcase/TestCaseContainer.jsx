import { useState } from "react";
import TestCaseContainerToolbar from "./TestCaseContainerToolbar";
import TestCaseList from "./TestCaseList";
import TestCaseForm from "./AddTestCase";
import "../../styles/TestCaseContainer.css";
import { Button } from '@mui/material'

function TestCaseContainer({ onClickClose }) {
  const [showNewTestCaseForm, setShowNewTestCaseForm] = useState(false);
  const [testCases, setTestCases] = useState([]);

  const handleAddTestCaseClick = () => {
    setShowNewTestCaseForm(true);
  };

  const handleOnCreate = (newTestCaseData) => {
    console.log(JSON.stringify(newTestCaseData, null, 2)); // logs full JSON object
    setTestCases((prev) => [
      ...prev,
      { id: prev.length + 1, ...newTestCaseData },
    ]);
    setShowNewTestCaseForm(false);
  };

  return (
    <div className="testcase-container">
      <Button id="dashboard-close" onClick={onClickClose}>
        Close
      </Button>
      <TestCaseContainerToolbar
        handleAddTestCaseClick={handleAddTestCaseClick}
      />
      <TestCaseList testCases={testCases} />
      {showNewTestCaseForm && (
        <TestCaseForm
          onCreate={handleOnCreate}
          onClose={() => setShowNewTestCaseForm(false)}
          testCases={testCases}
        />
      )}
    </div>
  );
}

export default TestCaseContainer;
