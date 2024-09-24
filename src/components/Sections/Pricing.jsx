import React from "react";
import styled, { keyframes } from 'styled-components';
import {  useRef} from "react";

import { useNavigate } from 'react-router-dom'; // Import useNavigate
import projectvideo from "../../components/Sections/pricingbg.mp4";

export default function Pricing() {
  const videoRef = useRef(null);

  const navigate = useNavigate(); // Create a navigate function

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <>
    
      <HeaderBanner id= "home">
        {/* <TopNavbar /> */}
        <VideoContainer>
          <StyledVideo ref={videoRef} autoPlay loop muted playsInline>
            <source src={projectvideo} type="video/mp4" />
          </StyledVideo>
        </VideoContainer>
        <BannerContent>
          <h1>Have a look at our pricing models</h1>
        </BannerContent>
      </HeaderBanner>
      <Wrapper>
        <Container>
          <CardsWrapper>
            {pricingTables.map((table, index) => (
              <TableBox key={index}>
                <div className="header">
                  <div className="icon">{table.icon}</div>
                  <h2 className="title">{table.title}</h2>
                </div>
                <p className="description">{table.text}</p>
                <p className="price">{table.price}</p>
                <ul className="offers">
                  {table.offers.map((offer, i) => (
                    <li key={i}>{offer}</li>
                  ))}
                </ul>
                <button
                  className={`action ${table.isLast ? 'last' : ''}`}
                  onClick={handleContactClick} // Use the handleContactClick function
                >
                  Contact Us
                </button>
              </TableBox>
            ))}
          </CardsWrapper>
        </Container>
      </Wrapper>
    </>
  );
}



// Styled Components
const Wrapper = styled.section`
  position: relative;
  overflow: hidden;
  background-color: white;
  padding: 0;
  margin: 0;
`;


const fadeAnimation = keyframes`
   0% {
    transform: translateX(0);
  }
  20% {
    transform: translateX(-5px);
  }
  40% {
    transform: translateX(5px);
  }
  60% {
    transform: translateX(-5px);
  }
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
`;

const HeaderBanner = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    text-align: center;
  }
`;


const VideoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
`;

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const BannerContent = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: white;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
  

  @media (max-width: 1200px) {
    padding: 0 15px;
  }

  @media (max-width: 992px) {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    padding: 0 5px;
  }
`;

// Styled Components
const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  
  gap: 40px; /* Increased spacing between cards */
  padding: 80px 0; /* Padding for spacing but avoid white space */
  box-sizing: border-box;
  margin-bottom: 0; /* Ensure no margin is added at the end */

  @media (max-width: 768px) {
    gap: 40px; /* Adjust spacing for smaller screens */
    justify-content: center;
    padding: 20px;

   

  }
`;
const TableBox = styled.div`
  flex: 1 1 calc(25% - 40px); /* Four cards in a row by default */
  background: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  background-color: white;
  padding: 30px; /* Padding for more content space */
  min-height: 500px; /* Minimum height to make cards taller */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: black;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.3); /* Enhanced shadow for more depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative; /* Needed for the pseudo-element */

  &:hover {
    transform: translateY(-15px); /* Slightly increased hover effect */
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4);

    &::before {
      opacity: 1; /* Show the light effect on hover */
      animation: glow 1.5s ease-in-out infinite; /* Smooth, slow animation */
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: -15px; /* Extend beyond the card edges */
    left: -15px;
    right: -15px;
    bottom: -15px;
    background: linear-gradient(
      135deg,
      rgba(0, 29, 61, 0.5) 0%, /* Semi-transparent deep blue */
      rgba(0, 29, 61, 0) 50%    /* Fading to transparent */
    );
    border-radius: 10px;
    z-index: -1; /* Place the pseudo-element behind the content */
    box-shadow: 0 0 25px rgba(0, 29, 61, 0.8); /* Deep blue glow effect */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  /* Glow animation */
  @keyframes glow {
    0% {
      box-shadow: 0 0 10px rgba(0, 29, 61, 0.8); /* Initial deep blue glow */
    }
    50% {
      box-shadow: 0 0 25px rgba(0, 29, 61, 0.6); /* More intense deep blue glow */
    }
    100% {
      box-shadow: 0 0 10px rgba(0, 29, 61, 0.8); /* Reset to initial deep blue glow */
    }
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem; /* Increased margin for better separation */

    .icon {
      font-size: 2.5rem; /* Slightly larger icon */
      margin-right: 15px; /* Increased spacing between icon and title */
      color: #0074d9;
    }

    .title {
      color: black;
      font-size: 1.75rem; /* Increased font size for better readability */
      font-weight: 600;
    }
  }

  .description {
    font-size: 1.1rem; /* Increased font size for better readability */
    margin-bottom: 1rem; /* Increased margin for better separation */
  }

  .price {
    color: #ffc300;
    font-size: 1.75rem; /* Increased font size for better emphasis */
    font-weight: 700;
    margin-bottom: 1.5rem; /* Increased margin for better separation */
  }

  .offers {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 1rem; /* Increased font size for better readability */
    margin-bottom: 2rem; /* Increased margin for better separation */

    li {
      position: relative;
      padding-left: 2rem; /* Increased padding for better spacing */
      margin-bottom: 0.75rem; /* Increased margin for better separation */

      &:before {
        content: "✔";
        position: absolute;
        left: 0;
        color: #0074d9;
      }
    }
  }

  .action {
    background: linear-gradient(135deg, #0074d9, #005f99);
    color: white;
    border: none;
    padding: 1rem 2rem; /* Increased padding for better button appearance */
    border-radius: 30px;
    font-size: 1.1rem; /* Increased font size for better readability */
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
    position: relative;
    z-index: 1;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
    width: 100%; /* Full width for mobile view */
    
    &:hover {
      background: linear-gradient(135deg, #005f99, #0074d9);
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
      transform: scale(1.05);
    }

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 992px) {
    flex: 1 1 calc(50% - 40px); /* Two cards in a row */
    min-height: 400px; /* Adjusted height for smaller screens */
    padding: 20px; /* Adjust padding for smaller screens */
    width: 100%; /* Full width for better responsiveness */
  }

  @media (max-width: 768px) {
    flex: 1 1 50%; /* One card in a row */
    min-height: 350px; /* Adjusted height for even smaller screens */
    padding: 20px; /* Adjust padding for smaller screens */

  }
`;

const pricingTables = [
  {
    title: "UI/UX Designs",
    icon: "🎨", // Add an appropriate icon
    price: "Starting with $1000",
    text: "A wide range of UI/UX services",
    offers: ["  Figma Designs", "  Canva Designs", "  Adobe XD", "  Custom Mockups", "Responsive designs"],
    action: () => alert("contact"),
  },
  {
    title: "Web Development",
    icon: "🌐", // Add an appropriate icon
    price: "Starting with $3000",
    text: "Full-stack development services",
    offers: ["  React", "  Node.js", "  Express", "  MongoDB", "  WordPress"],
    action: () => alert("contact"),
  },
  {
    title: "Database Solutions",
    icon: "💾", // Add an appropriate icon
    price: "Starting with $500",
    text: "Scalable database management",
    offers: ["  SQL", "  MySQL", "  MongoDB", "  PostgreSQL", "  OracleDB"],
    action: () => alert("contact"),
  },
  // {
  //   title: "Integrations",
  //   icon: "🔗", // Add an appropriate icon
  //   price: "Starting with $200",
  //   text: "Seamless backend integrations",
  //   offers: ["  Frontend & Backend Integration", "  API Integration", "  Third-Party APIs"],
  //   action: () => alert("contact"),
  // },
  {
    title: "Deployment",
    icon: "🚀", // Add an appropriate icon
    price: "Starting with $500",
    text: "Reliable and secure deployment",
    offers: ["  AWS", "  Docker", "  Kubernetes", "  GitHub Actions"],
    action: () => alert("contact"),
  },
  {
    title: "AI Services",
    icon: "🤖", // Add an appropriate icon
    price: "Starting with $1000",
    text: "AI and Machine Learning solutions",
    offers: ["  ML Models", "  NLP", "  Computer Vision", "  Data Analytics"],
    action: () => alert("contact"),
  },
  {
    title: "Blockchain",
    icon: "🔒", // Add an appropriate icon
    price: "Starting with $1000",
    text: "Decentralized app and token solutions",
    offers: ["  Smart Contracts", "  DApps", "  Token Development", "  Web3 Integration"],
    action: () => alert("contact"),
    isLast: true, // Marks the last card for special styling if needed
  },
];
