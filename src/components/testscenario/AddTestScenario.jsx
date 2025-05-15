import { Box, Button } from "@mui/material";

function AddTestScenario({ onCreate, onClose }) {
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
        <Button onClick={onCreate}>Create</Button>
        <Button onClick={onClose}>Close</Button>
      </Box>
    </Box>
  );
}

export default AddTestScenario;
