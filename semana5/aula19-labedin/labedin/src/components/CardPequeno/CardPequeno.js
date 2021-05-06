import React from 'react';
import styled from "styled-components";


const CardPequenoContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    height: 80px;

    img {
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;

    h4 {
    margin-bottom: 10px;
    }

    div {
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
}
`


function CardPequeno(props) {
    return (
        <CardPequenoContainer>
            <img src = {props.image} />
            <div>
                <span><b>{props.nome}</b> {props.descricao}</span>
                
            </div>
        </CardPequenoContainer>
    )
}

export default CardPequeno;