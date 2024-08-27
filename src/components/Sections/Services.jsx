import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Import images
import webImage from './webbanner.jpg';
import aiImage from './aibanner.png';
import blockchainImage from './blockchainbanner.png';
import dbImage from './dbbanner.jpg';

import servicesbg from './servicesbg.jpg'; // Import the new background image

// Keyframes for underline animation

// Keyframes for underline animation


// Keyframes for dropdown animation
const dropdownOpen = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 300px;
  }
`;

const dropdownClose = keyframes`
  from {
    max-height: 300px;
  }
  to {
    max-height: 0;
  }
`;

// Keyframes for continuous vertical slide animation
const continuousSlide = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10%);
  }
  100% {
    transform: translateY(0);
  }
`;

const Container = styled.div`
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
const pulseAnimation = keyframes`
  0% {
    text-shadow: 0 0 10px rgba(0, 0, 139, 0.5); /* Dark blue shadow */
  }
  50% {
    text-shadow: 0 0 20px rgba(0, 0, 139, 0.8), 0 0 30px rgba(0, 0, 255, 0.5); /* Bright blue shadow */
  }
  100% {
    text-shadow: 0 0 10px rgba(0, 0, 139, 0.5);
  }
`;

const underlineAnimation = keyframes`
  0% {
    width: 0;
    left: 50%;
  }
  50% {
    width: 100%;
    left: 0;
  }
  100% {
    width: 0;
    left: 50%;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;

  
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #e0f2f1; /* Light color for text */
  position: relative;
  display: inline-block;
  padding: 20px 20px;
  margin-top: 80px;
  background: linear-gradient(135deg, #003366, #004080); /* Dark blue gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 10px rgba(0, 0, 139, 0.5); /* Dark blue shadow */
  animation: ${pulseAnimation} 2s infinite; /* Continuous pulse effect */
  transition: transform 0.3s ease;


  @media (max-width: 768px) {
    font-size: 2rem;
    padding: 5px 10px;
  }

  &:hover {
    transform: scale(1.05); /* Slight scale effect on hover */
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px; /* Adjusted position */
    width: 0;
    height: 5px;
    border-radius: 10px;
    background: linear-gradient(135deg, #003366, #004080); /* Dark blue gradient */
    transition: width 3.6s ease;
  }
`;



const Section = styled.div`
  display: flex;
  flex-direction: ${props => (props.reverse ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
  padding: 40px 20px;
  background: ${props => (props.bgImage ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${props.bgImage})` : '#f9f9f9')};
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background-color: #f9f9f9;
    background-image: none;
  }
`;

const ServicesContent = styled.div`
  flex: 1;
  max-width: 50%;
  padding: 20px;
  box-sizing: border-box;
  
  display: flex;
  flex-direction: column;
  
  gap: 30px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
const ServiceBox = styled.div`
  background: ${props =>
    props.bgImage
      ? `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${props.bgImage})`
      : '#ffffff'};
  background-size: cover;
  background-position: center;
  padding: 10px; /* Further reduced padding */
  border-radius: 8px; /* Slightly smaller border radius */
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15); /* Slightly lighter shadow */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px; /* Reduced gap */
  flex: 1 1 calc(50% - 10px); /* Adjusted size to fit two cards per row */
  border-radius: 50px;

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 5px 14px rgba(0, 123, 255, 0.4); /* Brighter blue shadow */
    animation: ${pulseAnimation} 1.5s infinite;
  }

  h3 {
    font-size: 1rem; /* Adjusted font size */
    color: #004085; /* Darker blue for better contrast */
    font-weight: bold;
    margin: 0 0 5px;
  }

  p {
    font-size: 0.8rem; /* Smaller font size */
    color: #333; /* Darker gray for better readability */
    margin: 0;
  }

  @media (max-width: 768px) {
    flex: 1 1 calc(100% - 10px); /* Make cards full width on smaller screens */
    padding: 8px;
      width: 100%;

    h3 {
      font-size: 0.9rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  animation: ${continuousSlide} 2s ease-in-out infinite;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ServiceImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
  text-transform: uppercase;
  border-bottom: 2px solid #00c4cc;
  padding-bottom: 10px;

  
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    font-size: 2rem;

    
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const DropdownContent = styled.div`
  max-height: ${props => (props.show ? '300px' : '0')};
  overflow: hidden;
  animation: ${props => (props.show ? dropdownOpen : dropdownClose)} 0.4s ease;
  padding: ${props => (props.show ? '15px' : '0')};
  border-top: 1px solid #ddd;
  margin-top: 10px;
  transition: padding 0.4s ease;
  
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: ${props => (props.show ? '10px' : '0')};

    
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const TechnologiesRow = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

const TechnologyItem = styled.div`
  background-color: #f8f9fa;
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #333;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: #e9ecef;
    border-color: #00c4cc;
  }
`;

const BannerSection = styled.div`
  background-image: url(${servicesbg});
  background-size: cover;
  background-position: center;
  height: 400px;
  display: flex;
  margin-top: 100px;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative; // Ensure positioning context for the overlay

  // Create the overlay effect using a pseudo-element
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3); // Semi-transparent black overlay
    z-index: 1; // Place the overlay above the background image
  }

  // Ensure the content appears above the overlay
  h1 {
    position: relative;
    z-index: 2;
    color: #ffffff; // Adjust text color if needed
  }

  // Media queries for responsiveness
  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 480px) {
    height: 200px;
  }
`;


// BannerHeading with responsive adjustments
const BannerHeading = styled.h1`
  font-size: 4rem;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.3); /* Semi-transparent white background */
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);
  padding: 10px; /* Optional: adds padding around the text */
  border-radius: 8px; /* Optional: rounds the corners */

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    padding: 8px; /* Adjust padding for smaller screens */
  }
`;







const services = {
  web: {
    title: '🌐 Web Development', // Added globe emoji for Web Development
    items: [
      { title: '🎨 Web Design', description: 'Beautiful and functional web designs', technologies: ['Figma', 'Adobe XD', 'Sketch'] }, // Added palette emoji
      { title: '🖥️ Front-End Development', description: 'Building interactive user interfaces', technologies: ['React', 'Next', 'Php', 'React Native'] }, // Added computer emoji
      { title: '⚙️ Back-End Development', description: 'Server-side application logic', technologies: ['Node', 'Express', 'Nest'] }, // Added gear emoji
      { title: '🛠️ Full-Stack Development', description: 'Complete web solutions', technologies: ['MERN Stack', 'MEAN Stack' , 'React Native stack'] }, // Added hammer and wrench emoji
    ]
  },
  ai: {
    title: '🤖 AI & Machine Learning', // Added robot emoji for AI & Machine Learning
    items: [
      { title: '📊 Machine Learning', description: 'Advanced data analysis', technologies: ['Python', 'TensorFlow', 'Scikit-Learn'] }, // Added chart emoji
      { title: '🗣️ Natural Language Processing', description: 'Understanding and processing human language', technologies: ['NLTK', 'SpaCy', 'Transformers'] }, // Added speaking head emoji
      { title: '📷 Computer Vision', description: 'Image and video analysis', technologies: ['OpenCV', 'YOLO', 'Keras'] }, // Added camera emoji
      { title: '💡 AI Consulting', description: 'Strategic AI implementation', technologies: ['Consultation', 'AI Strategy'] }, // Added light bulb emoji
    ]
  },
  blockchain: {
    title: '🔗 Blockchain Solutions', // Added chain link emoji for Blockchain Solutions
    items: [
      { title: '📜 Smart Contract Development', description: 'Building secure smart contracts', technologies: ['Solidity', 'Ethereum', 'Truffle'] }, // Added scroll emoji
      { title: '🔄 Blockchain Integration', description: 'Integrating blockchain with existing systems', technologies: ['Hyperledger', 'Bitcoin', 'Chainlink'] }, // Added recycling emoji
      { title: '💳 Crypto Wallets', description: 'Developing secure cryptocurrency wallets', technologies: ['Web3.js', 'MetaMask'] }, // Added credit card emoji
      { title: '🛠️ Decentralized Applications', description: 'Building decentralized apps', technologies: ['DApps', 'Web3'] }, // Added hammer and wrench emoji
    ]
  },
  db: {
    title: '💾 Database Solutions', // Added floppy disk emoji for Database Solutions
    items: [
      { title: '📝 Database Design', description: 'Designing robust database schemas', technologies: ['MySQL', 'MongoDB', 'PostgreSQL'] }, // Added memo emoji
      { title: '📂 Database Management', description: 'Managing and maintaining databases', technologies: ['SQL Server', 'Oracle'] }, // Added file folder emoji
      { title: '🚚 Data Migration', description: 'Migrating data between systems', technologies: ['ETL', 'Data Pipeline'] }, // Added truck emoji
      { title: '⚡ Database Optimization', description: 'Improving database performance', technologies: ['Indexing', 'Query Optimization'] }, // Added high voltage emoji
    ]
  }
};


const Services = () => {
  const [activeSection, setActiveSection] = useState(null);

  const handleToggle = (title) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <>
    <BannerSection>
        <BannerHeading>Our Services</BannerHeading>
        
      </BannerSection>
    <Container>
      
      {/* <Header>
        <HeaderTitle>Our Services</HeaderTitle>
      </Header> */}
      {Object.entries(services).map(([key, { title, items }], index) => (
        <Section key={key} reverse={index % 2 !== 0}>
          
          <ServicesContent>
            <SectionTitle>{title}</SectionTitle>
            {items.map((item, idx) => (
              <div key={idx}>
                <ServiceBox onClick={() => handleToggle(item.title)}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </ServiceBox>
                <DropdownContent show={activeSection === item.title}>
                  <TechnologiesRow>
                    {item.technologies.map((tech, i) => (
                      <TechnologyItem key={i}>{tech}</TechnologyItem>
                    ))}
                  </TechnologiesRow>
                </DropdownContent>
              </div>
            ))}
          </ServicesContent>
          <ImageWrapper>
            <ServiceImage src={key === 'web' ? webImage : key === 'ai' ? aiImage : key === 'blockchain' ? blockchainImage : dbImage} alt={title} />
          </ImageWrapper>
        </Section>
      ))}
    </Container>
    </>
  );
};

export default Services;