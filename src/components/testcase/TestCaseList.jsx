import { Box, Grid, Typography } from "@mui/material";
function TestCaseList({ testCases }) {
  return (
    <Box>
      <div className="testcase-list">
        {testCases.map((testCase) => (
          <div key={testCase.id} className="testcase-card">
            <h3>{testCase.description}</h3>
            <p>{testCase.steps}</p>
          </div>
        ))}
      </div>
    </Box>
  );
}

export default TestCaseList;
