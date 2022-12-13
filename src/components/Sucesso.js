import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export default function Sucesso( {arrayDados, setArrayDados } ) {
    const navigate = useNavigate();

    function home(){
        setArrayDados({})
        navigate("/")
    }
    let array = arrayDados.ingressos
    
    return  (
        <SucessoStyled>
            <div>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1> 
            </div>
            <div data-test="movie-info">
                <h2>Filme e sessão</h2>
                <p>{arrayDados.filme}</p>
                <p>{arrayDados.sessao} {arrayDados.horaSessao}</p>
            </div>
            <div data-test="seats-info">
                <h2>Ingressos</h2>
                {array.map((tiket) => <p>Assento {tiket}</p> )}
            </div>
            <div  data-test="client-info">
                <h2>Comprador</h2>
                <p>Nome: {arrayDados.nome}</p>
                <p>CPF: {arrayDados.cpf}</p>
            </div>
            <button data-test="go-home-btn" onClick={home}>Voltar pra Home</button>
        </SucessoStyled>      
    )
}

const SucessoStyled = styled.div`
    width: 374px;
    height: 110px;
    margin-top: 87px;
    div{
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
    }
    h1{
        margin-left: 120px;
        margin-bottom: 1px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.04em;
        color: #247A6B;
    }
    h2 {
        margin: 35px 0px 15px 29px ;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    p{
        margin-left: 29px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        display: flex;
        align-items: center;
        letter-spacing: 0.04em;
        color: #293845;
    }
    button{
        width: 225px;
        height: 42px;
        left: 74px;
        top: 622px;
        background: #E8833A;
        border-radius: 3px;
        border: none;
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
        margin: 100px 75px;
        justify-content: center;
    }
`