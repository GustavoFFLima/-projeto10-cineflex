import styled from "styled-components"
import { useNavigate } from 'react-router-dom'

export default function Sucesso( {arrayDados, setArrayDados } ) {
    const navigate = useNavigate();

    function home(){
        setArrayDados({})
        navigate("/")
    }
    
    return  (
        <SucessoStyled>
            <div>
                <h1>Pedido feito</h1>
                <h1>com sucesso!</h1> 
            </div>
            <div>
                <h2>Filme e sessão</h2>
                <p>Enola Holmes</p>
                <p>24/06/2021 15:00</p>
            </div>
            <div>
                <h2>Ingressos</h2>
                <p>Assento 15</p>
                <p>Assento 16</p>
            </div>
            <div>
                <h2>Comprador</h2>
                <p>Nome: João da Silva Sauro</p>
                <p>CPF: 123.456.789-10</p>
            </div>
            <button onClick={home}>Voltar pra Home</button>
        </SucessoStyled>
        // <SucessoStyled>
        //     <div>
        //         <h1>Pedido feito</h1>
        //         <h1>com sucesso!</h1> 
        //     </div>
        //     <div data-test="movie-info">
        //         <h2>Filme e sessão</h2>
        //         <p>{arrayDados.filme}</p>
        //         <p>{arrayDados.sessao} {arrayDados.horaSessao}</p>
        //     </div>
        //     <div data-test="seats-info">
        //         <h2>Ingressos</h2>
        //         {arrayDados.map((tiket) => <p>Assento {tiket.ingressos}</p> )}
        //     </div>
        //     <div  data-test="client-info">
        //         <h2>Comprador</h2>
        //         <p>Nome: {arrayDados.nome}</p>
        //         <p>CPF: {arrayDados.cpf}</p>
        //     </div>
        //     <button data-test="go-home-btn" onClick={home}>Voltar pra Home</button>
        // </SucessoStyled>      
    )
}

const SucessoStyled = styled.div`
`