import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Services
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Packages
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
      {/* <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a href="/" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Get Started
          </a>
        </li>
      </UlStyle> */}
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: ${props => props.sidebarOpen ? '0' : '-300px'};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  background: linear-gradient(160deg, #1a237e 0%, #121212 100%);
  color: #ffffff;

  @media (max-width: 768px) {
    width: 60%;
    left: ${props => props.sidebarOpen ? '0' : '-100%'};
  }
`;

const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid #333;
`;

const CloseBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  display: flex; // Center the SVG icon
  justify-content: center;
  align-items: center;
  position: relative; // Good for absolute positioning inside if needed

  svg {
    fill: #ffffff; // Initial color for the SVG
    width: 24px; // Width of the SVG
    height: 24px; // Height of the SVG
    transition: fill 0.3s ease, transform 0.3s ease; // Smooth color and transform transition
  }

  &:hover svg {
    fill: #9fa8da; // Change color on hover
    transform: rotate(90deg); // Rotate effect on hover
  }

  &:focus {
    outline: none; // Removes the outline, but ensure accessibility is maintained
    svg {
      fill: #9fa8da; // Same hover color for consistency
    }
  }

  &:active svg {
    fill: #6875f5; // Different color when the button is clicked
    transform: scale(0.9); // Slightly smaller on click
  }
`;


const UlStyle = styled.ul`
  list-style: none;
  padding: 40px 20px;
  li {
    margin: 20px 0;
    a {
      color: #fff;
      font-size: 18px;
      transition: color 0.3s;

      &:hover {
        color: #9fa8da;
      }
    }
  }
`;