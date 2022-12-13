import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import PaginaPrincipal from "./PaginaPrincipal";
import Sessoes from "./Sessoes";
import Assentos from "./Assentos";
import Sucesso from "./Sucesso";
import React, { useState } from "react";


export default function App() {

  const [arrayDados, setArrayDados] = useState({})

  return (
    <AppStyled>
      <Navbar />
      <BrowserRouter>
        <Routes>
         <Route path="/" element={<PaginaPrincipal />}></Route>
         <Route path="/sessoes/:idFilme" element={<Sessoes />}></Route>
         <Route path="/assentos/:idSessao" element={<Assentos setArrayDados={setArrayDados}/>}></Route>
         <Route path="/sucesso" element={<Sucesso arrayDados={arrayDados} setArrayDados={setArrayDados} />}></Route>
        </Routes>
      </BrowserRouter>
    </AppStyled>
  );
}

const AppStyled = styled.div`
  width: 375px;
`