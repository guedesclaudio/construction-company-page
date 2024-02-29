"use client";
import styled from "styled-components"
import { infoData } from "../data/info";

export default function Info() {
    return (
        <BoxDiv>
            <Content>
                {
                    infoData?.map((v, i) => (
                        <A key={i}>
                            <Chunk background={v.background}>
                                {v.icon()}
                                <Text>{v.title}</Text>
                            </Chunk>
                            <B color={v.h1Color}>
                                <h1>{v.h1}</h1>
                                <p>{v.p}</p>
                            </B>
                        </A>
                    ))
                }
            </Content>
        </BoxDiv>
    )
}

const Text = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    color: white;
    text-align: center;
    margin-top: 10px;
`

const Content = styled.div`
    width: 80%;
    margin: 10px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

const BoxDiv = styled.div`
  width: 100%;
`;

const Chunk = styled.div<any>`
    background-color: 'Highlight';
    border-radius: 6px;
    width: 250px;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    background: rgb(0,212,255);
    background: ${(props: any) => props.background || 'black'};
`;

const A = styled.div`
    height: 300px;
    width: 250px;
`

const B = styled.div`
    margin-top: 10px;
    font-family: Arial, Helvetica, sans-serif;
    
    h1 {
        color: ${(props) => props.color || 'black'};
        font-weight: bold;
        margin-bottom: 5px;
    }

    p {
        color: grey;
        line-height: 20px;
    }
`