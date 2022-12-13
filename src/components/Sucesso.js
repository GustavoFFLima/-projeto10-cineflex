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
    margin-top: 67px;
`