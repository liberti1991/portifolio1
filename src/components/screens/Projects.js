import styled from "styled-components";
import { CardProjects } from "./Projects/CardProjects";

import "./styles.css";

export const Projects = () => {
  return (
    <>
      <ContainerTitle>
        <h1 className="text__2">Meus Projetos</h1>
      </ContainerTitle>
      <ContainerCard>
        <CardProjects />
      </ContainerCard>
    </>
  );
};

const ContainerTitle = styled.section`
  text-align: center;
  padding: 25px 0;

  @media screen and (min-width: 648px) {
    padding: 60px 0;
  }
`;

const ContainerCard =styled.section`
  padding: 10px;
  @media screen and (min-width: 648px) {
    padding: 0;
  }
`;
