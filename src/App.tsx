import { Box, Container } from "@mui/material";
import { DataTable } from "./components/DataTable";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box>
        <DataTable />
      </Box>
    </Container>
  );
}

export default App;
