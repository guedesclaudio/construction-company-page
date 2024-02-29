"use client";
import styled from "styled-components"
import { SubTitle, Title } from "../common/styles";

export default function Map() {
    return (
        <BoxDiv>
            <Layout>
                <Title >More a 600 metros da praia</Title>
                <SubTitle>sinta-se livre</SubTitle>
                <p>A casa conta com 85.08 metros quadrados, com alto padrão de acabamento e revestimentos. Sua localização é estratégica. Próximo ao centro comercial barrocos</p>
            </Layout>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14696.871936632144!2d-43.08531698508898!3d-22.94219780724022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99867e347375cd%3A0x4c995a2bbb046ffc!2sPiratininga%2C%20Niter%C3%B3i%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1708031425638!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="300" 
                style={{border:0}}>
            </iframe>
            <Footer>Todos os direitos reservados 2024</Footer>
        </BoxDiv>
    )
}

const BoxDiv = styled.div`
    background: linear-gradient(0deg, #000000 0%, rgba(255,255,255,1) 100%);
    padding: 20px;
`
const Layout = styled.div`
    text-align: center;
    font-size: 34px;
    font-weight: bold;
    color: grey;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 40px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;

    p {
        margin-top: 20px;
        font-size: 18px;
    }
`

const Footer = styled.footer`
    text-align: center;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: white;
`