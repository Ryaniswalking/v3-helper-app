import { Box, Grid, Typography } from "@mui/material";
import GlobalInputs from "./GlobalInputs";
function TestCaseList({ testCases }) {
  return (
    <Box>
      <Grid container>
        <Grid item size={{ xs: 12 }}>
          <GlobalInputs />
        </Grid>
      </Grid>
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
