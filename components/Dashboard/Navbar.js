import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import { logOut } from '@/backend/Auth';
import { useStateContext } from '@/context/StateContext';
import Home from '@/components/Dashboard/Home';
import NavButton from '@/components/Dashboard/NavButton';

const Navbar = () => {
  const { setUser } = useStateContext()

  return (
    <Nav>
      <Left><Home></Home></Left>
      <Right>
        <NavLinks>
          <HoldLeft>
            <NavButton dest="/auth/signup" text="Collection" theme='tan'/>
            <NavButton dest="/auth/signup" text="Friends"/>
            <NavButton dest="/auth/signup" text="About"/>
          </HoldLeft>
          <HoldRight>
            <NavButton dest="/auth/signup" text="Sign Up" theme="blue"/>
            <NavButton dest="/auth/login" text="Log In" theme="pink"/>
          </HoldRight>
          
        </NavLinks>
      </Right>
      
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 15vh; 
  z-index: 1;
  background-color: transparent;
`;

const Left = styled.div`
  display: flex;
  width: 15%;  
  height: 15vh; 
  
`;

const Right = styled.div`
  display: flex;
  width: 85%;
  height: 15vh;
  //flex-direction: column;
  align-items: center;
  background-color: transparent;
`;

const HoldLeft = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  align-items: center;
  background-color: transparent;
`;

const HoldRight = styled.div`
  display: flex;
  width: 50%;
  height: 50%;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  @media (max-width: 1020px) {
    justify-content: flex-start;
  }
`;

const Top = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Centering = styled.div`
  width: auto;
  height: 0px; 
  position: relative;
  left: 35%;
  top: 25%;
`;

const Bottom = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const NavLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: transparent;
  @media (max-width: 1020px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export default Navbar;
