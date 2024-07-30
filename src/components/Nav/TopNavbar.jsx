import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
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
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);


  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper className="flexCenter animate whiteBg" style={y > 100 ? { height: "110px" } : { height: "100px" }}>
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img style={{width: '100px'}} src={logo} />
          
          </Link>
          <BurderWrapper className="pointer" onClick={() => toggleSidebar(!sidebarOpen)}>
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="home" spy={true} smooth={true} offset={-80}>
                Home
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
                Services
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="projects" spy={true} smooth={true} offset={-80}>
                Projects
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="pricing" spy={true} smooth={true} offset={-80}>
                Pricing
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="blog" spy={true} smooth={true} offset={-80}>
                Packages
              </Link>
            </li>
           
            <li className="semiBold font15 pointer">
              <Link activeClass="active" style={{ padding: "10px 15px" }} to="contact" spy={true} smooth={true} offset={-80}>
                Contact
              </Link>
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
  top: 0;
  left: 0;
  right: 0; // Ensures the nav stretches across
  z-index: 999;
  transition: height 0.3s ease; // Smooth transition for height change
`;

const NavInner = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between; // Default layout for larger screens
  align-items: center;
  padding: 0 20px;

  @media (max-width: 760px) {
    justify-content: center; // Centers all content for smaller screens
    flex-direction: column; // Stacks the items vertically
  }
`;

const BurderWrapper = styled.button`
  outline: none;
  border: 0;
  background-color: transparent;
  height: 100%;
  padding: 0 10px; // Reduced padding to take less horizontal space
  display: none; // Only display this button on small screens
  align-items: center; // Center the burger icon vertically
  justify-content: center; // Center the burger icon horizontally
  position: absolute; // Position the button absolutely within its container
  left: 0; // Move it to the left edge
  top: 0; // Align it to the top, adjust if necessary depending on your header height
  z-index: 1001; // Ensure it's above other elements if needed

  @media (max-width: 760px) {
    display: flex; // Use flexbox to center the burger icon
    width: 50px; // Specify a smaller width to reduce space usage
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  list-style: none; // Remove bullet points from list
  margin: 0; // Remove default margin
  padding: 0; // Remove default padding
  align-items: center; // Align links vertically
  @media (max-width: 760px) { 
    display: none; // Hide the list on small screens
  }
`;

// You may adjust or remove UlWrapperRight if it's not used


const UlWrapperRight = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  @media (max-width: 760px) {
    display: none;
  }
`;
