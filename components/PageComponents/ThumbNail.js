import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';



const ThumbNail = ({image, text}) => {


  return (
    
    <Wrapper>
    <ImageBorder href="./">
    <Image href="./" bg={image} />
    <Text>{text}</Text>
    </ImageBorder>
    </Wrapper>
    
  );
};



const Wrapper = styled.div`
    aspect-ratio: 712 / 860;
    width: 25%;
    
`

const ImageBorder = styled(Link)`
  
  display: inline-block;
  width: 100%;
  height: 100%;
  color: black;
  //background-color: transparent;
  //border: 15px solid transparent;
  background-image: url('/Polaroid/PolaroidBorder.png');
  background-position: center;
  background-size: 100% 100%;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    
  }
`

const Image = styled(Link)`
  
  display: inline-block;
  width: 77%;
  height: 66.3%;
  position: relative;
  top: 9.3%;
  left: 11.7%;
  background-image: ${({ bg }) => `url(${bg})`};
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
  text-decoration: none;

  &:hover {
    
  }
`
const Text = styled.p`
    width: 85.7%;
    height: 15.7%;
    position: relative;
    top: 14%;
    left: 9%;
    //line-height: 15%;
    font-size: 2.5vh;
`
export default ThumbNail;
