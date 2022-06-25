import styled from "styled-components";
import Css from "./components/css";
import Header from "./components/header";


function App() {
  return (
    <Wrapper>
      <Header />
      <Css />
    </Wrapper>
  );
}

export default App;
const Wrapper = styled.div`
width: 100%;
height: 100vh;
`
