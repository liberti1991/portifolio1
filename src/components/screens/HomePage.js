import styled from "styled-components";

import "./styles.css"

export const HomePage = () => {
  return (
    <NavbarContainer>
      <h1 className="text">SOBRE RL</h1>
      <p>Olá, me chamo Rodrigo Liberti. Tenho 30 anos, atualmente trabalho como supervisor administrativo na Região de Curitiba-Pr.</p>
      <p>Estou no processo de migração de carreira para área da tecnologia, meu objetivo é me tornar um Dev Front-End.</p>
      <p>Cursando desde 2021 <b>Análise e Desenvolvimento de Sistemas</b> onde estou no segundo período.</p>
      <p>Possuo conhecimentos em HTML, CSS, JavaScript, ReactJs, Styled-Components.</p>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;
  margin-bottom: 70px;

  p{
    text-align: center;
    margin-bottom: 10px;
    font-size: 1.3rem;
    line-height: 1.5;
  }
  
  @media screen and (min-width: 648px) {
    margin-bottom: 0;
    p{
      font-size: 1.1rem;
    }
  } 
`;
