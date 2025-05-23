import { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  FormControlLabel,
  FormGroup,
  Box,
  Grid,
} from "@mui/material";
import TestScenarioList from "../testscenario/TestScenarioList";

function TestCaseForm({ onCreate, onClose, testCases, globalInputs }) {
  const [formData, setFormData] = useState({
    case_id: 0,
    test_case_collection: globalInputs["testCaseCollection"],
    test_flow: globalInputs["testFlow"],
    test_class: globalInputs["testClass"],
    app_name: globalInputs["app"],
    description: "",
    details: "",
    feature: "",
    test_parameters: "",
    active: 1,
    retry_count: 0,
    skip: false,
    skip_reason: "",
    test_suites: [],
    steps: [],
    tags: [],
  });
  const [testScenarios, setTestScenarios] = useState([]);
  const [testSuitesInput, setTestSuitesInput] = useState(
    formData.test_suites.join(", ")
  );
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "test_suites") {
      setFormData({
        ...formData,
        test_suites: value
          .split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0), // Avoid empty strings
      });
    } else if (name === "retry_count" || name === "active") {
      setFormData({ ...formData, [name]: parseInt(value, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData, testScenarios);
    onClose();
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1300,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          p: 4,
          backgroundColor: "white",
          borderRadius: 2,
          boxShadow: 3,
          width: "90%",
          maxWidth: 800,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Box component="form" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                label="App Name"
                name="app_name"
                value={formData.app_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                label="Test Flow"
                name="test_flow"
                value={formData.test_flow}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                label="Test Class"
                name="test_class"
                value={formData.test_class}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                label="Collection"
                name="testCaseCollection"
                value={formData.test_case_collection}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 12 }}>
              <TextField
                fullWidth
                multiline
                minRows={5}
                label="Description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Details"
                name="details"
                value={formData.details}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Feature"
                name="feature"
                value={formData.feature}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Test Parameters"
                name="test_parameters"
                value={formData.test_parameters}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                type="number"
                label="Retry Count"
                name="retry_count"
                value={formData.retry_count}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 3 }}>
              <TextField
                fullWidth
                type="number"
                label="Active (1 or 0)"
                name="active"
                value={formData.active}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 2 }}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="skip"
                      checked={formData.skip}
                      onChange={handleChange}
                    />
                  }
                  label="Skip"
                  sx={{
                    "& .MuiFormControlLabel-label": {
                      color: "black",
                    },
                  }}
                />
              </FormGroup>
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Skip Reason"
                name="skip_reason"
                value={formData.skip_reason}
                onChange={handleChange}
              />
            </Grid>
            <Grid item size={{ xs: 4 }}>
              <TextField
                fullWidth
                label="Test Suites (comma-separated)"
                name="test_suites"
                value={testSuitesInput}
                onChange={(e) => setTestSuitesInput(e.target.value)}
                onBlur={(e) => {
                  console.log("On Blur")
                  const suites = e.target.value
                    .split(",")
                    .map((s) => s.trim())
                    .filter(Boolean);
                  setFormData((prev) => ({
                    ...prev,
                    test_suites: suites,
                  }));

                  console.log("Suites: ", suites)
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item size={{ xs: 12 }}>
              <TestScenarioList
                testScenarios={testScenarios}
                setTestScenarios={setTestScenarios}
                globalInputs={globalInputs}
              />
            </Grid>
            <Grid
              item
              size={{ xs: 12 }}
              display="flex"
              justifyContent="flex-end"
              gap={2}
            >
              <Button variant="outlined" color="secondary" onClick={onClose}>
                Cancel
              </Button>
              <Button variant="contained" color="primary" type="submit">
                Create
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default TestCaseForm;
