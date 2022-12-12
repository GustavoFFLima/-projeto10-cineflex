import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from "styled-components";

export default function Lista() {
	const [lista, setlista] = useState([]);

	useEffect(() => {
		const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");
		requisicao.then(resposta => {
			setlista(resposta.data);
		});
	}, []);

    return (
        <ArrayListaStyle>
            {lista.map(lista => 
            <MolduraStyle><img src={lista.posterURL} alt={lista.title} /></MolduraStyle>)}
        </ArrayListaStyle>
    )
}

const MolduraStyle = styled.button`
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
    button {
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