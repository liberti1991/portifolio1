import styled from "styled-components";
import { useRef } from "react";

import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

export const Carousel = ({img01,img02, img03, alt}) => {
  const ref = useRef(null);

  const handleClick = (side) => {
    if (side === "right") {
      ref.current.scrollLeft += ref.current.offsetWidth;
      return;
    }
    ref.current.scrollLeft -= ref.current.offsetWidth;
  };

  return (
    <Container>
      <ImgCarousel ref={ref}> 
        <img src={img01} alt={alt}/>
        <img src={img02} alt={alt}/>
        <img src={img03} alt={alt}/>
      </ImgCarousel>
      <SvgCarousel>
        <FaAngleDoubleLeft cursor="pointer" onClick={() => handleClick("left")} />
        <FaAngleDoubleRight cursor="pointer" onClick={() => handleClick("right")} />
      </SvgCarousel>
    </Container>
  );
};  
const Container = styled.section`
  width: 100%;
`;

const ImgCarousel = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    display: none;
  }

  img {
    border-radius: 10px;
    width: 100%;
    height: 150px;
    object-fit: cover;
    @media screen and (min-width: 648px) {
      height: 300px;
    }
  }
`;

const SvgCarousel = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  svg {
    width: 20px;
    height: 20px;
    color: orange;
  }
`;
