import { useState } from "react";
import { Button } from "@mui/material"

function TestCaseContainerToolbar({ handleAddTestCaseClick }) {
  return (
    <div className="testcase-container-toolbar">
      <Button variant="contained" onClick={ handleAddTestCaseClick }>Add</Button>
      <Button variant="contained">Delete</Button>
    </div>
  );
}

export default TestCaseContainerToolbar;
