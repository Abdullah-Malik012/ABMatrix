import React from "react";
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import projectvideo from "../../components/Sections/pricingbg.mp4";

export default function Pricing() {
  const navigate = useNavigate(); // Create a navigate function

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the contact page
  };

  return (
    <>
    
      <HeaderBanner>
        {/* <TopNavbar /> */}
        <BackgroundVideo autoPlay loop muted>
          <source src={projectvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </BackgroundVideo>
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
  background-color: #001d3d;
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
  position: relative; /* Ensure positioning for the video */
  overflow: hidden; /* Hide overflow to keep the video within the header area */
  color: white;
  display: flex;
  justify-content: flex-end; /* Aligns content to the right */
  align-items: center; /* Vertically centers the content */
  text-align: right; /* Aligns text to the right within the content box */

  @media (max-width: 768px) {
    justify-content: center; /* Center content on smaller screens */
    align-items: flex-end; /* Align text to the bottom on smaller screens */
    text-align: center; /* Center text for smaller screens */
    padding-bottom: 20px; /* Adds space at the bottom */
  }
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Ensure the video is behind the content */
`;

const BannerContent = styled.div`
  position: relative; /* Ensure content is above the video */
  max-width: 800px;
  padding: 0 20px; /* Adds some padding on the sides */
  z-index: 1; /* Ensure content is above the video */
  text-align: right; /* Aligns text to the right within the content box */

  @media (max-width: 768px) {
    max-width: 90%; /* Adjust the max width for smaller screens */
    text-align: center; /* Center text on smaller screens */
    position: absolute;
    bottom: 20px; /* Position the content at the bottom */
    left: 50%; /* Center horizontally */
    transform: translateX(-50%); /* Center horizontally */
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-size: 4rem; /* Default font size */
    width: 65%;
    padding: 0 20px; /* Adds padding around the text */
    display: inline-block; /* Ensures the background fits the text */
    animation: ${fadeAnimation} 2s infinite; /* Apply animation */
    text-align: right; /* Align text to the right within the h1 */

    @media (max-width: 768px) {
      font-size: 2.5rem; /* Adjust font size for smaller screens */
      width: 200%; /* Adjust width for smaller screens to fit content */
      padding: 0 10px; /* Reduce padding for smaller screens */
      text-align: center; /* Center text within the h1 */
      line-height: 1.2; /* Adjust line height for better readability */
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
  padding: 80px 0; /* Increased padding for more space around cards */
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 30px; /* Adjust spacing for smaller screens */
    justify-content: center;
  }
`;

const TableBox = styled.div`
  flex: 1 1 calc(25% - 40px); /* Adjusted for increased gap, four cards in a row */
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 30px; /* Increased padding for more content space */
  min-height: 500px; /* Set minimum height to make cards taller */
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
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
      rgba(255, 255, 255, 0.6) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    border-radius: 10px;
    z-index: -1; /* Place the pseudo-element behind the content */
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.6); /* Glowing border effect */
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  @keyframes glow {
    0% {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
    }
    50% {
      box-shadow: 0 0 35px rgba(255, 255, 255, 0.9);
    }
    100% {
      box-shadow: 0 0 25px rgba(255, 255, 255, 0.6);
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
      font-size: 1.75rem; /* Increased font size for better readability */
      font-weight: 600;
      color: #fff;
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
  }

  @media (max-width: 768px) {
    flex: 1 1 50%; /* One card in a row */
    min-height: 350px; /* Adjusted height for even smaller screens */
    padding: 15px; /* Adjust padding for smaller screens */
  }
`;


const pricingTables = [
  {
    title: "UI/UX Designs",
    icon: "🎨", // Add an appropriate icon
    price: "Starting with $300",
    text: "A wide range of UI/UX services",
    offers: ["  Figma Designs", "  Canva Designs", "  Adobe XD", "  Custom Mockups", "Responsive designs"],
    action: () => alert("contact"),
  },
  {
    title: "Web Development",
    icon: "🌐", // Add an appropriate icon
    price: "Starting with $500",
    text: "Full-stack development services",
    offers: ["  React", "  Node.js", "  Express", "  MongoDB", "  WordPress"],
    action: () => alert("contact"),
  },
  {
    title: "Database Solutions",
    icon: "💾", // Add an appropriate icon
    price: "Starting with $100",
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
    price: "Starting with $200",
    text: "Reliable and secure deployment",
    offers: ["  AWS", "  Docker", "  Kubernetes", "  GitHub Actions"],
    action: () => alert("contact"),
  },
  {
    title: "AI Services",
    icon: "🤖", // Add an appropriate icon
    price: "Starting with $400",
    text: "AI and Machine Learning solutions",
    offers: ["  ML Models", "  NLP", "  Computer Vision", "  Data Analytics"],
    action: () => alert("contact"),
  },
  {
    title: "Blockchain",
    icon: "🔒", // Add an appropriate icon
    price: "Starting with $600",
    text: "Decentralized app and token solutions",
    offers: ["  Smart Contracts", "  DApps", "  Token Development", "  Web3 Integration"],
    action: () => alert("contact"),
    isLast: true, // Marks the last card for special styling if needed
  },
];
