import {
  Dialog,
  Paper,
  Box,
  Button,
  Typography,
  Grid,
  Input,
} from "@mui/material";
import { useState } from "react";
import RequestInfoFields from "./request-info/RequestInfoFields";
import ValidationFields from "./validation/ValidationFields";
import Transition from "../transistions/Transistion";
import FormatSelector from "./FormatSelector";

function AddTestScenario({ onClose, onCreate, globalInputs }) {
  const [format, setFormat] = useState([]);
  const [formData, setFormData] = useState({
    scenario_collection: globalInputs["testScenarioCollection"] || "",
    data_id: "",
    description: "",
    request_info: {
      type: "",
      body: "",
      parameters: "",
      service: "",
      content_type: "",
      headers: {
        Accept: "",
        "Content-Type": "",
      },
    },
    validation: {
      status_code: 200,
      actions: [],
    },
  });

  const handleSubmit = (e) => {
    setFormData(formData);
    onCreate(formData);
    e.stopPropagation();
  };

  return (
    <Dialog fullScreen open={true} keepMounted TransitionComponent={Transition}>
      {/* Centering wrapper */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            p: 3,
            width: "90%",
            maxWidth: 900,
            borderRadius: 2,
          }}
        >
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6">Scenario Form</Typography>
            <Grid container spacing={1}>
              <Grid item size={{ xs: 4 }}>
                <Input
                  name="scenario_collection"
                  value={formData.scenario_collection}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      scenario_collection: e.target.value,
                    })
                  }
                  placeholder="Scenario Collection"
                />
              </Grid>
              <Grid item size={{ xs: 4 }}>
                <Input
                  name="data_id"
                  value={formData.data_id}
                  onChange={(e) =>
                    setFormData({ ...formData, data_id: e.target.value })
                  }
                  placeholder="Data ID"
                />
              </Grid>
              <Grid item size={{ xs: 4 }}>
                <Input
                  name="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  placeholder="Description"
                />
              </Grid>
            </Grid>

            {/* Split into subcomponents */}
            <Grid
              container
              alignItems="center"
              justifyContent="center"
              sx={{
                mt: 3,
              }}
            >
              <Grid item xs={12} md={6}>
                <FormatSelector format={format} setFormat={setFormat} />
              </Grid>
            </Grid>

            <RequestInfoFields
              formData={formData}
              setFormData={setFormData}
              format={format}
            />
            <ValidationFields formData={formData} setFormData={setFormData} />

            <Button type="submit" variant="contained">
              Submit
            </Button>
            <Button variant="contained" onClick={onClose}>
              Cancel
            </Button>
          </Box>
        </Paper>
      </Box>
    </Dialog>
  );
}

export default AddTestScenario;
