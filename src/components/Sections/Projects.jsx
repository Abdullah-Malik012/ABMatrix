import React, { useState, useRef } from "react";
import styled, { keyframes } from 'styled-components';
import Modal from "react-modal";
import netbit1 from "../../assets/img/projects/netbit1.png";
import netbit2 from "../../assets/img/projects/netbit2.png";
import netbit3 from "../../assets/img/projects/netbit3.png";
import trade1 from "../../assets/img/projects/trade1.png";
import trade2 from "../../assets/img/projects/trade2.png";
import trade3 from "../../assets/img/projects/trade3.png";
import trade4 from "../../assets/img/projects/trade4.png";
import ecom1 from "../../assets/img/projects/ecom1.jpeg";
import ecom2 from "../../assets/img/projects/ecom2.jpeg";
import ecom3 from "../../assets/img/projects/ecom3.jpeg";
import port1 from "../../assets/img/projects/port1.png";
import port2 from "../../assets/img/projects/port2.png";
import port3 from "../../assets/img/projects/port3.png";
import lendnest1 from "../../assets/img/projects/lendnest1.png";
import lendnest2 from "../../assets/img/projects/lendnest2.png";
import lendnest3 from "../../assets/img/projects/lendnest3.jpg";
import lendnest4 from "../../assets/img/projects/lendnest4.png";
import auditai1 from "../../assets/img/projects/auditai1.png";
import auditai2 from "../../assets/img/projects/auditai2.png";
import auditai3 from "../../assets/img/projects/auditai3.png";
import TopNavbar from "../../components/Nav/TopNavbar";

import projectvideo from "../../components/Sections/bg3.mp4";

export default function Projects() {
  const videoRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Hide loader when the image is loaded
  };

  const openModal = (images) => {
    setGalleryImages(images);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
  };

  

  const closeModal = () => {
    setIsModalOpen(false);
    setGalleryImages([]);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  const projects = [
    {
      img: auditai1,
      title: "AuditAi",
      text: "A Web App for auditing smart contracts using AI and a personalized bot.",
      gallery: [auditai2, auditai3, auditai1],
    },
    {
      img: lendnest1,
      title: "LendNest",
      text: "A Decentralized App based on Solidity and Vite.",
      gallery: [lendnest2, lendnest3, lendnest4, lendnest1],
    },
    {
      img: port1,
      title: "Portfolio Page",
      text: "A highly attractive and eye-catching portfolio design.",
      gallery: [port2, port3, port1],
    },
    {
      img: netbit1,
      title: "Netbit Movies App",
      text: "A movie review platform similar to IMDb.",
      gallery: [netbit1, netbit2, netbit3],
    },
    {
      img: trade1,
      title: "Trade Portal",
      text: "A trade management portal.",
      gallery: [trade2, trade3, trade4, trade1],
    },
    {
      img: ecom1,
      title: "Ecommerce Store",
      text: "An ecommerce store design.",
      gallery: [ecom2, ecom3, ecom1],
    },
  ];

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
          <h1>Our Awesome Projects</h1>
          <p>Here are some of our recent projects</p>
        </BannerContent>
      </HeaderBanner>

      <ProjectsWrapper>
        <div className="container">
          <ProjectGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index}>
                <CardImage
                  src={project.img}
                  alt={project.title}
                  onClick={() => openModal(project.gallery)}
                />
                <CardBody>
                  <h2>{project.title}</h2>
                  <p>{project.text}</p>
                  <ViewGalleryButton onClick={() => openModal(project.gallery)}>
                    View Gallery
                  </ViewGalleryButton>
                </CardBody>
              </ProjectCard>
            ))}
          </ProjectGrid>

          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            contentLabel="Image Gallery Modal"
            style={customModalStyles}
          >
            <ModalContent>
              <GalleryMainImage src={galleryImages[currentImageIndex]} alt={`Gallery Image ${currentImageIndex + 1}`} />
              <ThumbnailWrapper>
                {galleryImages.map((image, index) => (
                  <Thumbnail
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    active={currentImageIndex === index}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </ThumbnailWrapper>
              <ButtonWrapper>
                <NavigationButton onClick={previousImage}>⮜</NavigationButton>
                <NavigationButton onClick={nextImage}>⮞</NavigationButton>
              </ButtonWrapper>
              <CloseButton onClick={closeModal}>✖</CloseButton>
            </ModalContent>
          </Modal>
        </div>
      </ProjectsWrapper>
    </>
  );
}

const HeaderBanner = styled.header`
  width: 100%;
  height: 100vh;
  position: relative; /* Ensure positioning for the video */
  overflow: hidden; /* Hide overflow to keep the video within the header area */
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;


`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Loader styled component
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8); /* Light overlay */
  position: absolute; /* Position relative to the modal */
  z-index: 1; /* Ensure it's above other elements */

  &:before {
    content: '';
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 50px; /* Spinner size */
    height: 50px; /* Spinner size */
    animation: ${spin} 1s linear infinite; /* Spinner animation */
  }
`;

// Define the BackgroundVideo component
const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1; /* Ensure the video is behind the content */
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

const glowUp = keyframes`
  0% {
    opacity: 0;
    text-shadow: 0 0 0 rgba(255, 255, 255, 0);
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 20px rgba(255, 255, 255, 0.7);
  }
  100% {
    opacity: 1;
    text-shadow: 0 0 30px rgba(255, 255, 255, 0.9);
  }
`;

const BannerContent = styled.div`
  position: relative; /* Ensure content is above the video */
  max-width: 800px;
  z-index: 1; /* Ensure content is above the video */
  
  h1 {
    font-size: 3rem;
    animation: ${glowUp} 2s ease-out infinite; /* Apply glow-up animation with loop */
  }
  
  p {
    font-size: 1.5rem;
    animation: ${glowUp} 2s ease-out infinite 1s; /* Apply glow-up animation with loop and delay */
  }
`;
const ProjectsWrapper = styled.section`
  padding: 60px 20px;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const ProjectCard = styled.div`
  background: white;
  border-radius: 15px; /* Increased border-radius for a modern look */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2); /* Softer shadow for depth */
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  cursor: pointer;
  border: 1px solid #eee; /* Subtle border for a clean look */
  

  &:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease, filter 0.3s ease;
  border-bottom: 1px solid #eee; /* Divider between image and content */
  
  &:hover {
    transform: scale(1.1);
    filter: grayscale(40%) brightness(90%); /* Slight grayscale and brightness adjustment */
  }
`;

const CardBody = styled.div`
  padding: 20px;
  background: #fafafa; /* Light background for better contrast */
  
  h2 {
    font-size: 1.6rem;
    margin-bottom: 10px;
    color: #333; /* Darker color for better contrast */
    font-weight: 600; /* Bold font weight for titles */
  }
  p {
    font-size: 1rem;
    color: #666; /* Softer text color for a modern feel */
    line-height: 1.5; /* Increased line height for readability */
  }
`;

const ViewGalleryButton = styled.button`
  background: linear-gradient(135deg, #001d3d, #6e45e2, #88d3ce);
  color: white;
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 30px;
  margin-top: 15px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;



  &:hover {
    background: linear-gradient(135deg, #5a36b6, #6eb7d3);
    transform: translateY(-5px);
  }
`;

const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GalleryMainImage = styled.img`
 margin-top: 20px;
  max-width: 75%;
  max-height: 80vh;
  border-radius: 10px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 50px;
  object-fit: cover;
  margin: 0 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: transform 0.3s ease, border 0.3s ease;
  border: ${({ active }) => (active ? '2px solid #6e45e2' : '2px solid transparent')};

  &:hover {
    transform: scale(1.1);
  }
`;
const ButtonWrapper = styled.div`
  position: absolute;
  top: 50%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  transform: translateY(-50%);

  @media (max-width: 600px) {
  }
`;

const NavigationButton = styled.button`
  background: #1d3557;
  color: white;
  border: none;
  font-size: 2rem; /* Adjust font size for better visibility */
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 50%;
  transition: background 0.3s ease, color 0.3s ease;
  margin: 0 5px; /* Add horizontal margin for spacing */

  &:hover {
    background: #0d1b2a; /* Changes background color on hover */
    color: white; /* Ensures text color stays white on hover */
  }

  @media (max-width: 600px) {
    font-size: 1.8rem; /* Adjust font size on smaller screens to ensure icons are visible */
    padding: 8px 12px; /* Reduced padding */
    margin: 5px 0; /* Vertical margin for stacked buttons */
  }
`;



const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #d00000;
  color: white;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  width: 7%;
  transition: background 0.3s ease, color 0.3s ease;

  &:hover {
    background: red; /* Changes background color to red on hover */
    color: white; /* Ensures text color stays white on hover */
  }

  @media (max-width: 600px) {
    font-size: 1.1rem; /* Smaller font size on smaller screens */
    padding: 5px; /* Reduced padding */
    width: 12%; /* Increased width for easier tapping */
        height: 15%; /* Increased width for easier tapping */
color: white;
    top: 2px; /* Adjust position for a more balanced look */
    right: 1px; /* Adjust position for a more balanced look */
  }
`;

const customModalStyles = {
  content: {
    inset: "50% auto auto 50%",
    transform: "translate(-50%, -40%)", // Adjusting Y-axis translation for centering
    background: "#ffffff",
    padding: 0,
    borderRadius: "15px",
    boxShadow: "0 5px 20px rgba(0, 0, 0, 0.25)",
    border: "none",
    maxWidth: "80vw",
    maxHeight: "80vh",
  },
};

