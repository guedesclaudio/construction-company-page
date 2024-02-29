"use client";
import styled from "styled-components"
import { SubTitle, Title } from "../common/styles";

export default function Map() {
    return (
        <BoxDiv>
            <Layout>
                <Title >More a 600 metros da praia</Title>
                <SubTitle>sinta-se livre</SubTitle>
                <p>A casa conta com 85.08 metros quadrados, com alto padrão de acabamento e revestimentos. Sua localização é estratégica. Próximo ao centro comercial barroco</p>
            </Layout>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.538211329181!2d-42.98223052393166!3d-22.96722804003531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x99892746914f93%3A0x10091346d0c997dc!2sR.%20Ant%C3%B4nio%20Marques%20Mathias%2C%2022%20-%20Itaipua%C3%A7u%2C%20Maric%C3%A1%20-%20RJ%2C%2024900-000!5e0!3m2!1spt-BR!2sbr!4v1709245259504!5m2!1spt-BR!2sbr"
                width="100%" 
                height="300" 
                style={{border:0}}>
            </iframe>
            <Footer>©️ Todos os direitos reservados - 2024</Footer>
        </BoxDiv>
    )
}

const BoxDiv = styled.div`
    background: linear-gradient(0deg, #000000 0%, rgba(255,255,255,1) 100%);
    opacity: 0.9;
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
        color: #000000;
        opacity: 0.4;
    }
`

const Footer = styled.footer`
    text-align: center;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    color: white;
`