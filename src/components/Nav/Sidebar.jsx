import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import BackArrow from '../../assets/svg/Arrowbutton'; // Adjust the path as necessary

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper sidebarOpen={sidebarOpen}>
      <SidebarHeader>
        <BackBtn onClick={() => toggleSidebar(!sidebarOpen)}>
          <BackArrow />
          <span>Menu</span>
        </BackBtn>
      </SidebarHeader>

      <UlStyle>
        {["Home", "Services", "Projects", "Pricing", "Contact"].map((item) => (
          <li key={item}>
            <StyledLink to={`/${item.toLowerCase()}`} onClick={() => toggleSidebar(!sidebarOpen)}>
              {item}
            </StyledLink>
          </li>
        ))}
      </UlStyle>
    </Wrapper>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const Wrapper = styled.nav`
  width: 200px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebarOpen ? "0" : "-300px")};
  z-index: 1000;
  background: linear-gradient(135deg, #2c2c54, #1a1a2e);
  color: #f0f0f0;
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 0 10px 10px 0;
  transition: left 0.5s ease-in-out; /* Smooth transition for position change */

  animation: ${(props) => (props.sidebarOpen ? slideIn : slideOut)} 0.5s ease forwards; /* Animation without delay */
`;

const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #444;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
`;

const BackBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #ffffff;
  padding: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
  }

  svg {
    fill: #ffffff;
    width: 24px;
    height: 24px;
    margin-right: 10px;
    transition: fill 0.3s;
  }

  &:hover svg {
    fill: #ffcc00;
  }
`;

const UlStyle = styled.ul`
  list-style: none;
  padding: 40px 20px;
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: #f0f0f0;
  font-size: 18px;
  padding: 15px 20px;
  display: block;
  border-radius: 5px;
  position: relative;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffcc00;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 3px;
    width: 100%;
    background: transparent;
    transition: background 0.3s;
  }

  &:hover::after {
    background: #ffcc00;
  }

  &.active {
    background-color: #ffcc00;
    color: #121212;
  }
`;
