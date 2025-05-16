import { Grid, TextField } from "@mui/material";
import ValidationTypes from "./ValidationTypes";

export default function ActionFields({
  action,
  index,
  onChange,
  onRemove,
  setFormData,
}) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item size={{ xs: 6 }}>
        <TextField
          fullWidth
          name="path"
          label="JSON Path"
          value={action.path}
          onChange={handleChange}
        />
      </Grid>
      <Grid item size={{ xs: 6 }}>
        <TextField
          fullWidth
          name="expected"
          label="Expected Value"
          value={action.expected}
          onChange={handleChange}
        />
      </Grid>
      <Grid item size={{ xs: 6 }}>
        <TextField
          fullWidth
          name="message"
          label="Validation Message"
          value={action.message}
          onChange={handleChange}
        />
      </Grid>
      <Grid item size={{ xs: 6 }}>
        <ValidationTypes index={index} onChange={onChange} action={action} />
      </Grid>
      <Grid item size={{ xs: 6 }}>
        <TextField
          fullWidth
          name="mode"
          label="Mode"
          value={action.mode}
          onChange={handleChange}
        />
      </Grid>
    </Grid>
  );
}
