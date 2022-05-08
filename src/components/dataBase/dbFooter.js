import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const dbFooter = [
  {
    id: 1,
    title: "Linkedin",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://www.linkedin.com/in/rodrigo-liberti/",
    svg: <BsLinkedin />,
  },
  {
    id: 2,
    title: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://github.com/liberti1991",
    svg: <BsGithub />,
  },
  {
    id: 3,
    title: "Whatsapp",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "https://api.whatsapp.com/send?phone=5541997000028&text=Olá.%20Gostaria%20de%20fazer%20um%20projeto.%20",
    svg: <BsWhatsapp />,
  },
  {
    id: 4,
    title: "E-mail: Liberti1991@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    url: "mailto:liberti1991@gmail.com?subject=Eu fiz uma analise do seu projeto e achei.",
    svg: <SiGmail />,
  },
];
