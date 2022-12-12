import styled from "styled-components"
import Lista from "./Lista"

export default function PaginaPrincipal() {
    

    return (
        <PaginaPrincipalStyled>
            <p>Selecione o filme</p>
            <Lista />
        </PaginaPrincipalStyled>
    )
}

const PaginaPrincipalStyled = styled.div`
    width: 374px;
    height: 110px;
    margin-top: 67px;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
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