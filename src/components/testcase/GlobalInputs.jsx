import { useState } from "react";
import { Grid, TextField } from "@mui/material";
export default function GlobalInputs() {
  
  const [app, setApp] = useState("");
  const [testCaseCollection, setTestCaseCollection] = useState("");
  const [scenarioCollection, setScenarioCollection] = useState("");
  const [testFlow, setTestFlow] = useState("");
  
  return (
    <Grid container spacing={2}>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="app"
          label="app"
          variant="standard"
          onChange={() => setApp(e.target.value)}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="test-case-collection"
          label="Test Case Collection"
          variant="standard"
          onChange={() => setTestCaseCollection(e.target.value)}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="test-scenario-collection"
          label="Test Scenario Collection"
          variant="standard"
          onChange={() => setTestCaseCollection(e.target.value)}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="test-flow"
          label="Test Flow"
          variant="standard"
          onChange={() => setTestFlow(e.target.value)}
        />
      </Grid>
    </Grid>
  );
}
