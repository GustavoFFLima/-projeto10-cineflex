import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import styled from "styled-components"

export default function Assentos( { setArrayDados } ) {
    const [assentosFilme, setAssentosFilme] = useState(null)
    const [poltronas, setPoltronas] = useState([]);
    const [nome, setNome] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();
    let { idSessao } = useParams();
    let objTemp ={}

    useEffect(() => {
        axios
            .get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`)
            .then((response) => setAssentosFilme(response.data))
            .catch((erro) => console.log(erro));
    })

    if (assentosFilme === null) {
        return <p> Carregando...</p>
    }

    function ocuparAssento(ocupado, idPoltrona){
        let array = [...poltronas]

        if(ocupado === false){
            return alert("Esse assento não está disponível")
        } 
        if(!poltronas.includes(idPoltrona)) {
            array.push(idPoltrona)
            setPoltronas(array)
        } else {
            let index = array.indexOf(idPoltrona);
            if (index > -1) {
                array.splice(index, 1);
              }
            setPoltronas(array)
        }
    }

    function dadoscliente() {
        
        objTemp = {
            filme:assentosFilme.movie.title,
            sessao:assentosFilme.day.date,
            horaSessao:assentosFilme.name,
            ingressos:poltronas,
            nome: nome,
            cpf:cpf 
        }
        setArrayDados(objTemp);
    }


    function dadoosClientes(event) {
        dadoscliente()
        event.preventDefault();
        axios
            .post(`https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many`, {
                ids: poltronas,
                name: nome,
                cpf: cpf
            } )
            .then( navigate("/sucesso"))
            .catch((erro) => console.log(erro))
    }



    return (
        <AssentosStyled>
            <h1>Selecione o(s) assento(s)</h1>
            <div>
                {assentosFilme.seats.map((filme) => <AssentosSessao  data-test="seat" key={filme.id} cor={filme.isAvailable ? (poltronas.includes(filme.name) ? "#1AAE9E" : "#C3CFD9") : "#FBE192"} onClick={() => ocuparAssento(filme.isAvailable, filme.name)}>
                {filme.name}   
            </AssentosSessao>
                )}
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
            <FormsStyled onSubmit={dadoosClientes}>
                <label htmlFor="nome">Nome do comprador:</label>
                <input type="text" data-test="client-name" value={nome} onChange={e => setNome(e.target.value)} name="Nome do comprado" id="nome"  placeholder="Digite seu nome..." required />
                <label htmlFor="cpf">CPF do comprador:</label>
                <input type="number"  data-test="client-cpf" value={cpf} onChange={e => setCpf(e.target.value)} name="CPF do comprador" id="cpf" placeholder="Digite seu CPF..." required />
                <button type="submit" data-test="book-seat-btn">Reservar assento(s)</button>
            </FormsStyled>
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

const FormsStyled = styled.form`
    label {
        width: 327px;
        height: 25px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }
    input {
        width: 327px;
        height: 51px;

        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }
    button {
        width: 225px;
        height: 42px;
        border: none;
        background: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
    }
`