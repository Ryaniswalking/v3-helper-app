import { useState } from "react";

function TestCaseContainerToolbar({ handleAddTestCaseClick }) {
  return (
    <div className="testcase-container-toolbar">
      <button onClick={ handleAddTestCaseClick }>Add</button>
      <button>Delete</button>
    </div>
  );
}

export default TestCaseContainerToolbar;
