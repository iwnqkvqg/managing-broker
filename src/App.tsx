import Container from "@mui/material/Container";

import AddEntityDialog from "@/components/AddEntityDialog";
import ManagingBroker from "@/components/ManagingBroker";

function App() {
  return (
    <Container component="main">
      <ManagingBroker />
      <AddEntityDialog />
    </Container>
  );
}

export default App;
