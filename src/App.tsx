import { Box } from "@mui/material";
import SearchContactForm from "./Components/SearchContactForm";
import PreviousContacts from "./Components/PreviousContacts";

const App = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        minHeight: "100vh",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <SearchContactForm />

      <PreviousContacts />
    </Box>
  );
};

export default App;
