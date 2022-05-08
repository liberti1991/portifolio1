import styled from "styled-components";

import { dbFooter } from "../dataBase/dbFooter";

export const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <section>
          {dbFooter.map((item) => {
            return (
              <a
                key={item.id}
                href={item.url}
                rel={item.rel}
                target={item.target}
                title={item.title}
                alt={item.title}
              >
                {item.svg}
              </a>
            );
          })}
        </section>
        <Copyright>
          <p>© 2021, Rodrigo Liberti.</p>
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#1e1d1d),
    to(#000)
  );
  width: 100%;
  height: 160px;
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  section {
    padding: 40px;
    display: flex;
    gap: 40px;
    justify-content: center;
    
    a {
      color: #a9a9a9;
    }

    svg {
      width: 30px;
      height: 30px;
      transition: all 0.5s;
      cursor: pointer;

      :hover {
        transform: scale(1.07);
        color: orange;
      }
    }
  }
`;

const Copyright = styled.div`
  border-top: 1px solid #a9a9a9;
  text-align: center;
  padding-top: 10px;
  p {
    color: #a9a9a9;
  }
`;
