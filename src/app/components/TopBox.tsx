"use client";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components"
import { SubTitle, Title } from "../common/styles";

// function textAnimation(subTitle: any, setSubtitle: any, options: any[]) {
//     const findIndex = options.findIndex((v) => v === subTitle);
//     if (findIndex === (options.length - 1)) return;
//     setInterval(() => {
//         setSubtitle(options[index]);
//     }, 2000)
// }

export default function TopBox() {
    const subsTitleOptions = [
        'Legal',
        'Inovador',
        'Interessante',
        'Top',
        'F'
    ]

    //const [subTitle, setSubTitle] = useState(subsTitleOptions[0]);

    //if (subTitle !== 'F') textAnimation(subTitle, setSubTitle, subsTitleOptions)

    return (
        <BoxDiv>
            <Content>
                <Title>Village Maricá</Title>
                <SubTitle>wonderful</SubTitle>
                <P>Rua dr Antônio Marques Mathias, lote 22, quadra 300 - Itaipuaçu - Maricá</P>
                <DownloadButton>
                    <a href='plant2.pdf' download="plant2.pdf">Baixe a planta </a></DownloadButton>
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

const textAnimationCSS = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const BoxDiv = styled.div`
    width: 100%;
    height: 300px;
    background-color: white;
`;

const DownloadButton = styled.div`
    width: 160px;
    height: 30px;
    border-radius: 4px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px auto;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    font-weight: bold;
    cursor: pointer;

    a {
        text-decoration: none;
        color: white;
    }
`
const Content = styled.div`
    text-align: center;
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
    color: black;
    opacity: 0.5;
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    padding-top: 10px;
`