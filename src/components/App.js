import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import PaginaPrincipal from "./PaginaPrincipal";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";


export default function App() {
  return (
    <AppStyled>
      <Navbar />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<PaginaPrincipal />}></Route>
         <Route path="/sessoes/:idFilme" element={<Sessoes />}></Route>
         <Route path="/assentos/:idSessao" element={<Assentos />}></Route>
         <Route path="/sucesso/:idSessao" element={<Sucesso />}></Route>
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 375px;
`