import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from "styled-components"

export default function Sessoes() {
    const [sessaoFilme, setSessaoFilme] = useState(null)
    const params = useParams();

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes`)
            .then((response) => setSessaoFilme(response.data))
            .catch((erro) => console.log(erro));
    })

    if (sessaoFilme === null) {
        return <p> Carregando...</p>
    }

    return (
        <SessoesStyled>
            <h1>Selecione o horário</h1>
            {sessaoFilme.days.map((response) => (
                <HorarioSessao data-test="movie-day" key={response.id}>
                        <p>{response.weekday} - {response.date}</p>
                        <div>
                            {response.showtimes.map((response) => (
                                <Link data-test="showtime" to={`/assentos/${response.id}`}>
                                    <button>{response.name}</button>
                                </Link>
                            ))}
                        </div>
                </HorarioSessao>
            ))}
            <FooterStyled data-test="footer">
                <div>
                    <img src={sessaoFilme.posterURL} alt='' />
                </div>
                <h2>{sessaoFilme.title}</h2>

            </FooterStyled>
        </SessoesStyled>
    )
}

const SessoesStyled = styled.div`
    width: 374px;
    height: 110px;
    margin-top: 67px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    h1 {
        margin: 40px 0;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;
        color: #293845;
    }
`
const HorarioSessao = styled.div`
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: flex-start;
        justify-content: start;
        letter-spacing: 0.02em;
        color: #293845;
    }
    button{
        width: 82px;
        height: 43px;
        margin: 22px 9px;
        background: #E8833A;
        border: none;
        border-radius: 3px;
        color: #FFFFFF;
    }
`
const FooterStyled = styled.div`
    position: fixed;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 375px;
    height: 117px;
    bottom: 0px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    div{
        width: 64px;
        height: 89px;
        left: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
     margin: 14px 14px 14px 10px;
        bottom: 14px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        img{      
            width: 48px;
            height: 72px;
            left: 18px;
            bottom: 23px;
        }
    h2{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
    }
`