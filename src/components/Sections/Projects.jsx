import React, { useState } from "react";
import styled from "styled-components";
import ProjectBox from "../Elements/ProjectBox";
import Modal from "react-modal";

// Images
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
import { MdHeight } from "react-icons/md";


import sc1 from "../../assets/img/sc1.png";
import sc2 from "../../assets/img/sc2.png";  
import sc3 from "../../assets/img/sc3.png";
import sc4 from "../../assets/img/sc4.png";
import sc5 from "../../assets/img/sc5.png";

import mic1 from "../../assets/img/mic1.png";
import mic2 from "../../assets/img/mic2.png";
import mic3 from "../../assets/img/mic3.png";
import mic4 from "../../assets/img/mic4.png";

import lh1 from "../../assets/img/lh1.png";
import lh2 from "../../assets/img/lh2.png";
import lh3 from "../../assets/img/lh3.png";
import lh4 from "../../assets/img/lh4.png";

import TopNavbar from "../Nav/TopNavbar";
import Footer from "../../components/Sections/Footer";


export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryImages, setGalleryImages] = useState([]);

  const openModal = (images) => {
    setGalleryImages(images);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };


  const projects = [
   
    {
      img: auditai1 ,
      title: "AuditAi",
      text: "A Web App for auditing smart contracts using AI and  personalized bot that use AST and regix based approach",
      gallery: [
        
        auditai2,
        auditai3,
        auditai1,

      ],
    },

    {
      img: lendnest1 ,
      title: "LendNest",
      text: "A Decentralized App based on Solidity and vite",
      gallery: [
        
        lendnest2,
        lendnest3,
        lendnest4,
        lendnest1,

      ],
    },
    
    {
      img: lh1 ,
      title: "limda host",
      text: "A webapp plateform for hosting website",
      gallery: [
        
        lh2,
        lh3,
        lh4,
        lh1,

      ],
    },
   


    {
      img: netbit1,
      title: "Netbit Movies App",
      text: "A movie review plateform similar to imdb",
      gallery: [
        netbit1,
        netbit2,
        netbit3,

       
      ],
    },

    {
      img: mic1 ,
      title: "Microsh",
      text: "A webapp for influencer Market place for runnign campaigns",
      gallery: [
       mic2,
       mic3,
       mic4,
       mic1,

       
      ],
    },


    {
      img: sc1,
      title: "Schoolr",
      text: "A webapp for online tuting and learning services",
      gallery: [
       sc2,
       sc3,
       sc4,
       sc5,
       sc1,

       
    
      ],
    }, 

    {
      img: port1 ,
      title: "Portfolio page",
      text: "A highly attractive and eye capturing portfolio design",
      gallery: [
        port2,
        port3,
        port1,

      ],
    },
    
    {
      img: trade1 ,
      title: "A Trade Portal",
      text: "A trade management Portal",
      gallery: [
        trade2,
        trade3,
        trade4,
        trade1,

       
      ],
    },
    {
      img: ecom1,
      title: "Ecommerce store",
      text: "An Ecommerce store design",
      gallery: [
        ecom2,
        ecom3,
        ecom1,

       
    
      ],
    },  

    

   

  

  ];

  

  return (
    <>
      <Wrapper id="projects">
        <TopNavbar />
        <div className="whiteBg">
          <div className="container">
            <HeaderInfo>
              <h1 className="font40 extraBold">Our Awesome Projects</h1>
              <p className="font13">
                Here are some of our recent projects
              </p>
            </HeaderInfo>
            <div className="row textCenter">
              {projects.map((project, index) => (
                <div key={index} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                  <ProjectBox
                    img={project.img}
                    title={project.title}
                    text={project.text}
                    action={() => openModal(project.gallery)}
                  />
                </div>
              ))}
            </div>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Image Gallery Modal"
              style={customModalStyles}
            >
              <GalleryModal>
                <GalleryImage
                  src={galleryImages[currentImageIndex]}
                  alt={`Gallery Image ${currentImageIndex + 1}`}
                />
              </GalleryModal>
              <NavigationButton onClick={previousImage}>⮜</NavigationButton>
              <NavigationButton onClick={nextImage}>⮞</NavigationButton>
            </Modal>
          </div>
        </div>
       
      </Wrapper>
      <Footer/>
    </>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const GalleryModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
  
  padding: 10px;
  animation: fadeInUp 1s ease;
  @media (max-width: 600px) {
    
    width: 100%;
    height: 100%;
    font-size: 14px;
  }
`;

const GalleryImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 600px) {
    
    width: 190%;
    height: 70%;
    font-size: 14px;
  }
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%; // Center vertically
  transform: translateY(-50%); // Adjust to precisely center vertically
  width: 45px; // Fixed width for uniformity
  height: 45px; // Fixed height to match width, creating a square button
  background-color: #333; // Dark background for better contrast
  color: white; // White text for readability
  border: none;
  cursor: pointer;
  font-size: 16px; // Slightly larger font size for better visibility
  display: flex; // Use flexbox for centering icon inside button
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  border-radius: 50%; // Circle shape
  box-shadow: 0 2px 4px rgba(0,0,0,0.2); // Subtle shadow for depth
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #007bff; // Blue background on hover
    box-shadow: 0 4px 8px rgba(0,0,0,0.3); // Larger shadow on hover for a lifting effect
    transform: translateY(-50%) scale(1.1); // Slight scale up on hover
  }

  &:first-child {
    left: 20px; // Positioned on the left side
  }

  &:last-child {
    right: 0px; // Positioned on the right side
  }
  @media (max-width: 600px) {

    width: 35px;
    height: 35px;
    font-size: 14px;
  }
`;



const customModalStyles = {

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    
  },
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: "none",
    borderRadius: "8px",
    width: "90%",
    maxWidth: "600px",
    maxHeight: "80%",
    overflow: "hidden",  // This will hide scrollbars
  },
};