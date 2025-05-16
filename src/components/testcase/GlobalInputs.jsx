import { Grid, TextField } from "@mui/material";
export default function GlobalInputs({ setGlobalInputs }) {

  const handleChange = (e) => {
    setGlobalInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Grid container spacing={2}>
      <Grid item size={{ xs: 1 }}>
        <TextField
          fullWidth
          name="app"
          label="app"
          variant="standard"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="testCaseCollection"
          label="Test Case Collection"
          variant="standard"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="testScenarioCollection"
          label="Test Scenario Collection"
          variant="standard"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
      <Grid item size={{ xs: 3 }}>
        <TextField
          fullWidth
          name="testFlow"
          label="Test Flow"
          variant="standard"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
      <Grid item size={{ xs: 2 }}>
        <TextField
          fullWidth
          name="testClass"
          label="Test Class"
          variant="standard"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </Grid>
    </Grid>
  );
}
