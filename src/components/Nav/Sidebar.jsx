import React from "react";
import styled from "styled-components";
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
        <li>
          <StyledLink to="/" onClick={() => toggleSidebar(!sidebarOpen)}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/services" onClick={() => toggleSidebar(!sidebarOpen)}>
            Services
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/projects" onClick={() => toggleSidebar(!sidebarOpen)}>
            Projects
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/pricing" onClick={() => toggleSidebar(!sidebarOpen)}>
            Pricing
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/contact" onClick={() => toggleSidebar(!sidebarOpen)}>
            Contact
          </StyledLink>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${(props) => (props.sidebarOpen ? "0" : "-300px")};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  background: #2c2c54; /* Darker color for better contrast */
  color: #f0f0f0; /* Light color for text */
  box-shadow: 2px 0 15px rgba(0, 0, 0, 0.5);
  border-radius: 0 10px 10px 0;

  @media (max-width: 768px) {
    width: 60%;
    left: ${(props) => (props.sidebarOpen ? "0" : "-100%")};
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #444; /* Lighter border for contrast */
  display: flex;
  align-items: center;
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
    margin-right: 10px; /* Space between icon and text */
    transition: fill 0.3s;
  }

  &:hover svg {
    fill: #ffcc00; /* Gold color on hover */
  }
`;

const UlStyle = styled.ul`
  list-style: none;
  padding: 40px 20px;
  margin: 0; /* Remove default margin */
`;

const StyledLink = styled(Link)`
  color: #f0f0f0;
  font-size: 18px;
  padding: 15px 20px;
  display: block; /* Make the link block-level for easier clicking */
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Background on hover */
    color: #ffcc00; /* Gold color on hover */
  }

  &.active {
    background-color: #ffcc00; /* Highlight active link */
    color: #121212; /* Dark text for active link */
  }
`;
