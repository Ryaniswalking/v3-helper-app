import { useState } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import AddTestScenario from "./AddTestScenario";
function TestScenarioList({ testCases }) {
  const [showNewScenarioForm, setShowNewTestCaseForm] = useState(false);

  const hanldleAddScenario = () => {
    setShowNewTestCaseForm(true);
  };

  const handleCloseAddScenario = () => {
    setShowNewTestCaseForm(false);
  };

  const handleCreateScenario = () => {
    console.log("Handle Create Scenario");
  };

  return (
    <Box sx={{ pt: 2 }}>
      <Grid container spacing={2}>
        <Grid
          item
          size={{ xs: 12 }}
          display="flex"
          justifyContent="flex-end"
          gap={2}
        >
          <Button onClick={hanldleAddScenario}>Add</Button>
          <Button>Delete</Button>
        </Grid>

        {testCases.map((testCase, index) => (
          <Grid item size={{ xs: 12 }} key={index}>
            <Paper sx={{ height: "100%" }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                {testCase.test_flow || "No Test Flow"}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Class: {testCase.test_class || "N/A"}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {testCase.description || "No description provided."}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {showNewScenarioForm && (
        <AddTestScenario
          onClose={handleCloseAddScenario}
          onCreate={handleCreateScenario}
        />
      )}
    </Box>
  );
}

export default TestScenarioList;
