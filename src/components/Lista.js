import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom"
import axios from 'axios';
import styled from "styled-components";

export default function Lista() {
	const [lista, setLista] = useState(undefined);
    
	useEffect(() => {
		axios
            .get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
            .then(resposta => setLista(resposta.data))
            .catch((erro) => console.log(erro));
	}, []);

    if(lista === undefined) {
        return <p>Carregando...</p>;
    }

    return (
        <ArrayListaStyle >
            {lista.map(lista => 
            <Link to={`/sessoes/:${lista.id}`} key={lista.id} >
                <MolduraStyle  data-test="movie">
                    <img src={lista.posterURL} alt={lista.title} />
                </MolduraStyle>
            </Link>)}
        </ArrayListaStyle>
    )
}

const MolduraStyle = styled.div`
    width: 145px;
    height: 209px;
    left: 205px;
    top: 389px;

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    border: none;
`

const ArrayListaStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    div {
        display: flex;
        margin: 11px;
        align-items: center;
        justify-content: center;
    }
    img {
        width: 129px;
        height: 193px;
    }
`