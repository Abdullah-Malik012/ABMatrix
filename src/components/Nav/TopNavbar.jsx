import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import BurgerIcon from "../../assets/svg/BurgerIcon";
import logo from "./logo.png";

export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    const handleScroll = () => setY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "110px" } : { height: "100px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="/">
            <img style={{ width: '100px' }} src={logo} alt="Logo" />
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/services">Services</StyledLink>
            </li>
            <li>
              <StyledLink to="/projects">Projects</StyledLink>
            </li>
            <li>
              <StyledLink to="/pricing">Pricing</StyledLink>
            </li>
            <li>
              <StyledLink to="/blog">Packages</StyledLink>
            </li>
            <li>
              <StyledLink to="/contact">Contact</StyledLink>
            </li>
          </UlWrapper>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  background-color: #010121;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  transition: height 0.3s ease;
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 760px) {
    justify-content: center;
    flex-direction: column;
  }
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 10px;
  display: none;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1001;

  @media (max-width: 760px) {
    display: flex;
    width: 50px;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  
  @media (max-width: 760px) { 
    display: none;
  }

  li {
    margin: 0 15px;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  position: relative;
  font-family: 'Arial', sans-serif;
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  border-radius: 20px; /* Optional: add border radius */

  &:hover {
    background-color: white; /* Change to desired hover color */
    transition: background-color 0.3s ease;
  }
`;
