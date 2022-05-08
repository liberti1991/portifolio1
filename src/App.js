import styled from "styled-components";

import { Navbar } from "./components/layout/Navbar";
import { ROUTES } from "./components/routes/ROUTES";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <ROUTES />
      </Container>
      <Footer />
    </>
  );
}

const Container = styled.div`
  max-width: 1200px;
  margin: 80px auto 0 auto;
  min-height: 75vh;
`;

export default App;
