import { Grid, TextField } from "@mui/material";

export default function ActionFields({ action, index, onChange, onRemove }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange(index, name, value);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="path"
          label="JSON Path"
          value={action.path}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="expected"
          label="Expected Value"
          value={action.expected}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="message"
          label="Validation Message"
          value={action.message}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          name="type"
          label="Type"
          value={action.type}
          onChange={handleChange}
        />
      </Grid>
      <Grid item xs={5}>
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
