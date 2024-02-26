"use client";
import styled, { keyframes } from "styled-components"

export default function Box() {
    return (
        <BoxDiv>
            <Content>
                <Title>Move Faster</Title>
                <P>Rua dr Valdir Costa, 841 - Itaipuaçu - Maricá</P>
                <DownloadButton>Baixe a planta ></DownloadButton>
                <Line/>
            </Content>
        </BoxDiv>
    )
}

const lineAnimation = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const BoxDiv = styled.div`
    width: 100%;
    height: 200px;
    background-color: white;
`;


const DownloadButton = styled.div`
    width: 240px;
    height: 26px;
    border-radius: 8px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px auto;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: Highlight;
    cursor: pointer;
`
const Content = styled.div`
    text-align: center;
`

const Title = styled.h1`
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: Highlight;
    padding-top: 40px;
    font-weight: bold;
`

const Line = styled.div`
    width: 100%;
    margin: 10px auto;
    background-color: grey;
    height: 0.5px;
    animation: ${lineAnimation} 2s ease-out;
    opacity: 0.3;
`

const P = styled.p`
    color: grey;
    opacity: 0.5;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;
    font-weight: bold;
`