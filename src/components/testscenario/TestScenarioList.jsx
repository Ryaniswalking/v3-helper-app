import { useState } from "react";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import AddTestScenario from "./AddTestScenario";

function TestScenarioList({ testScenarios, setTestScenarios, globalInputs }) {
  const [showNewScenarioForm, setShowNewTestCaseForm] = useState(false);

  const hanldleAddScenario = () => {
    setShowNewTestCaseForm(true);
  };

  const handleCloseAddScenario = () => {
    setShowNewTestCaseForm(false);
  };

  const handleCreateScenario = (newScenario) => {
    setTestScenarios((prev) => [...prev, newScenario])
    setShowNewTestCaseForm(false);
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

        {testScenarios.map((testScenario, index) => (
          <Grid item size={{ xs: 12 }} key={index}>
            <Paper sx={{ height: "100%" }} elevation={3}>
              <Typography variant="h6" gutterBottom>
                {testScenario.request_info.type || "No Test Flow"}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                Service: {testScenario.request_info.service || "N/A"}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                {testScenario.description || "No description provided."}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      {showNewScenarioForm && (
        <AddTestScenario
          onClose={handleCloseAddScenario}
          onCreate={handleCreateScenario}
          globalInputs={globalInputs}
        />
      )}
    </Box>
  );
}

export default TestScenarioList;
