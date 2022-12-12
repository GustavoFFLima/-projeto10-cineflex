import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Dados from './dado'
import styled from "styled-components"

export default function Assentos() {
    const [assentosFilme, setAssentosFilme] = useState(null)
    let { idSessao } = useParams();

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => setAssentosFilme(response.data))
            .catch((erro) => console.log(erro));
    })

    if (assentosFilme === null) {
        return <p> Carregando...</p>
    }

    function Seats(props) {
        return (
            <AssentosSessao key={props.id} cor={props.isAvailable ? "#FBE192" : "#C3CFD9"}>
                {props.name}   
            </AssentosSessao>
        )
    }

    return (
        <AssentosStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <div>
                {assentosFilme.seats.map((filme) => <Seats id={filme.id} name={filme.name} isAvailable={filme.isAvailable} />)}
            </div>
            <PainelStyled>
                <div>
                    <ButtonCor background={"#1AAE9E"} border={"#0E7D71"}></ButtonCor>
                    <p>Selecionado</p>
                </div>
                <div>
                    <ButtonCor background={"#C3CFD9"} border={"#7B8B99"}></ButtonCor>
                    <p>Disponivel</p>
                </div>
                <div>
                    <ButtonCor cbackgroundor={"#FBE192"} border={"#F7C52B"}></ButtonCor>
                    <p>Indisponivel</p>
                </div>
            </PainelStyled>
            <Dados />
            <FooterStyled data-test="footer" >
                <Quadro>
                    <img src={assentosFilme.movie.posterURL} alt='' />
                </Quadro>
                <TextoStyled>
                    <p>{assentosFilme.movie.title}</p>
                    <p>{assentosFilme.day.weekday} - {assentosFilme.name}</p>
                </TextoStyled>
            </FooterStyled>
        </AssentosStyled>
    )
}

const AssentosStyled = styled.div`
    margin-top:67px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`

const AssentosSessao = styled.button`
    width: 26px;
    height: 26px;
    margin: 10px 5px;
    background: ${props => props.cor};
    border: 1px solid #808F9D;
    border-radius: 12px;
`

const PainelStyled = styled.div`
    display: flex;
    div {
        display: flex;
        flex-direction: column;
        margin: 0px 12px;
        p {
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 13px;
            line-height: 15px;
            display: flex;
            align-items: center;
            letter-spacing: -0.013em;
        }
    }
`

const ButtonCor = styled.button`
    width: 24px;
    height: 24px;
    left: 271px;
    top: 377px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;;
    background: ${props => props.background};  
    border: 1px solid ${props => props.border};
`


const FooterStyled = styled.div`
    width: 100%;
    height: 117px;
    box-sizing: border-box;    
    border: 1px solid #9EADBA;
    position: fixed;
    display: flex;
    bottom: 0px;
    background: #DFE6ED;
    align-items: center;
    padding-left: 10px;
`

const Quadro= styled.div`
    width: 64px;
    height: 89px;
    left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 14px ;
    background: #FFFFFF;
    box-sizing: border-box;  
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    img{      
        width: 48px;
        height: 72px;
    }
`

const TextoStyled= styled.div`
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
    }  
`