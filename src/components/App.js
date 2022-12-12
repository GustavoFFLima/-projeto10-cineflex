import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import PaginaPrincipal from "./PaginaPrincipal";
import Navbar from "./Navbar";

export default function App() {
  return (
    <AppStyled>
      <Navbar />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<PaginaPrincipal />} />
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 375px;
  height: 877px;
`