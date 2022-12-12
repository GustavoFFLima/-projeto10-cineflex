import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"

export default function Assentos() {
    const [assentosFilme, setAssentosFilme] = useState(null)
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats`)
            .then((response) => setAssentosFilme(response))
            .catch((erro) => console.log(erro));
    })

    if (assentosFilme === null) {
        return <p> Carregando...</p>
    }

    return (
        <AssentosStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <div>
                {assentosFilme.seats.map((response) => (
                    <AssentosSessao  data-test="seat" key={response.id}>
                        <button>{response.name}</button>
                    </AssentosSessao>
                ))}
            </div>
            <FooterStyled data-test="footer">
                <div>
                    <img src={sessaoFilme.posterURL} alt='' />
                </div>
                <h2>{assentosFilme.title}</h2>

            </FooterStyled>
        </AssentosStyled>
    )
}

const AssentosStyled = styled.div``

const AssentosSessao = styled.div``

const FooterStyled = styled.div``