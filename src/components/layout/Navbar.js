import styled from "styled-components";
import { useState } from "react";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import "./Navbar.css";

import perfil from "../../img/perfil.jpg";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => setMenu((e) => !e);

  return (
    <NavbarContainer>
      <Profile>
        <img src={perfil} alt="foto de perfil" />
        <h3>Rodrigo Liberti</h3>
      </Profile>
      <div onClick={handleClick}>
        {menu ? <MdClose /> : <GiHamburgerMenu />}
      </div>
      <ul className={menu ? "nav-menu active" : "nav-menu"}>
        <Li>
          <NavLink activeclassname="active" to="sobre" onClick={handleClick}>
            Sobre
          </NavLink>
        </Li>
        <Li>
          <NavLink activeclassname="active" to="projetos" onClick={handleClick}>
            Projetos
          </NavLink>
        </Li>
        <Whatsapp>
          <a
            href="https://api.whatsapp.com/send?phone=5541997000028&text=Olá.%20Gostaria%20de%20fazer%20um%20projeto.%20"
            rel="noopener noreferrer"
            target="_blank"
            title="Whatsapp"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Whatsapp
          </a>
        </Whatsapp>
      </ul>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#1e1d1d),
    to(#000)
  );
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  padding-left: 30px;
  padding-right: 10px;
  z-index: 30;
  position: fixed;
  align-items: center;
  display: flex;
  color: white;
  justify-content: space-between;

  svg { 
    cursor: pointer;
    font-size: 1.8rem;
    margin-right: 10px;
    margin-top: 4px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
    padding: 0 100px;

    svg {
      display: none;
    }
  }
`;

const Profile = styled.article`
  display: flex;
  align-items: center;
  gap: 20px;

  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }
`;

const Li = styled.li`
  .active {
    color: orange;
    text-decoration: underline;
  }

  a {
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s;

    :hover {
      text-decoration: underline;
      color: orange;
    }
  }
`;

const Whatsapp = styled.li`
  a {
    position: relative;
    display: inline-block;
    padding: 3px 6px;
    color: #000;
    border-radius: 5px;
    background-color: rgb(254, 161, 12, 0.9);
    /* font-size: 18px; */
    text-decoration: none;
    /* text-transform: uppercase; */
    overflow: hidden;
    margin-top: 0px;
    transition: 0.5s;
    /* letter-spacing: 1.5px; */
    font-weight: 600;

    :hover {
      background: #fea10c;
      color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 5px #fea10c, 0 0 25px #fea10c;
      transform: scale(1.05);
    }

    span {
      position: absolute;
      display: block;

      :nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 1.8px;
        background: linear-gradient(90deg, transparent, orangered);
        animation: btn-anim1 2s linear infinite;

        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }
          50%,
          100% {
            left: 100%;
          }
        }
      }

      :nth-child(2) {
        top: -100%;
        right: 0;
        width: 1.8px;
        height: 100%;
        background: linear-gradient(180deg, transparent, orangered);
        animation: btn-anim2 2s linear infinite;
        animation-delay: 0.5s;

        @keyframes btn-anim2 {
          0% {
            top: -100%;
          }
          50%,
          100% {
            top: 100%;
          }
        }
      }

      :nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 1.8px;
        background: linear-gradient(270deg, transparent, orangered);
        animation: btn-anim3 2s linear infinite;
        animation-delay: 1s;

        @keyframes btn-anim3 {
          0% {
            right: -100%;
          }
          50%,
          100% {
            right: 100%;
          }
        }
      }

      :nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 1.8px;
        height: 100%;
        background: linear-gradient(360deg, transparent, orangered);
        animation: btn-anim4 2s linear infinite;
        animation-delay: 1.5s;

        @keyframes btn-anim4 {
          0% {
            bottom: -100%;
          }
          50%,
          100% {
            bottom: 100%;
          }
        }
      }
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
`;
