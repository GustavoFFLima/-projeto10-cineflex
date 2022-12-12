import React, { useState } from "react";
import axios from "axios"
import styled from "styled-components"


export default function Dados() {
    const [poltronas, setPoltronas] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");


    function dadoosClientes(event) {
        event.preventDefault();
        axios
            .post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, {
                ids: poltronas,
                name: nome,
                cpf: cpf
            } )
    }

    return (
        <FormsStyled onSubmit={dadoosClientes}>
            <label htmlFor="nome">Nome do comprador:</label>
            <input type="text" value={nome} onChange={e => setNome(e.target.value)} name="Nome do comprado" id="nome"  placeholder="Digite seu nome..."/>
            <label htmlFor="cpf">CPF do comprador:</label>
            <input type="number" value={cpf} onChange={e => setCpf(e.target.value)} name="CPF do comprador" id="cpf" placeholder="Digite seu CPF..."/>
            <button type="submit">Reservar assento(s)</button>
        </FormsStyled>
    )
}

const FormsStyled = styled.form`
    width: 225px;
    height: 42px;
    margin: 150px;
    background: #E8833A;
    border-radius: 3px;
`