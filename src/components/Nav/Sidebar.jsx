import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/services"
          >
            Services
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        {/* <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/blog"
          >
            Packages
          </Link>
        </li> */}
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li className="semiBold font20 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/contact"
          >
            Contact
          </Link>
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
  left: ${(props) => (props.sidebarOpen ? '0' : '-300px')};
  transition: left 0.3s ease-in-out;
  z-index: 1000;
  background: linear-gradient(160deg, #1a237e 0%, #121212 100%);
  color: #ffffff;

  @media (max-width: 768px) {
    width: 60%;
    left: ${(props) => (props.sidebarOpen ? '0' : '-100%')};
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  svg {
    fill: #ffffff;
    width: 24px;
    height: 24px;
    transition: fill 0.3s ease, transform 0.3s ease;
  }

  &:hover svg {
    fill: #9fa8da;
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
    svg {
      fill: #9fa8da;
    }
  }

  &:active svg {
    fill: #6875f5;
    transform: scale(0.9);
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
