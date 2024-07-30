import React from "react";
import styled from "styled-components";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon
import green from "../../assets/img/green.avif"
import gmailback from "../../assets/img/gmailback.avif"

export default function Contact() {
  // Function to open WhatsApp with a predefined message
  const openWhatsApp = () => {
    // Define your WhatsApp number and message
    const phoneNumber = "YOUR_WHATSAPP_NUMBER";
    const message = "Hello, I'm interested in your services.";

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${'+923137753833'}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  const openGmailCompose = () => {
    const email = 'abmatrix.co@gmail.com';
    const subject = encodeURIComponent('Subject here'); // Optional
    const body = encodeURIComponent('Body here'); // Optional
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Let's get in touch</h1>
            <p className="font13">
              Kindly share us details about your project So we can progress further and Connect with each other
            </p>
          </HeaderInfo>
          <SumbitWrapper className="flex">
          <ButtonWrapper>
  <ButtonInput 
    type="button" 
    value="Connect with us on Gmail" 
    className="pointer animate radius8" 
    style={{ maxWidth: "220px" }}
    onClick={openGmailCompose }
  />
</ButtonWrapper>

            <ButtonWrapper>
              <ButtonInput2 type="button" onClick={openWhatsApp} value="Chat with us on WhatsApp" className="pointer animate radius8 whatsappButton" style={{ maxWidth: "220px" }} />
            </ButtonWrapper>
          </SumbitWrapper>
        </div>
      </div>
      <br />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;

const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

const ButtonInput = styled.input`
  background: silver  no-repeat center center / cover; // Update URL
  color: black;
  padding: 15px;
  font-weight: bold;
  width: 100%;
  outline: none;
  transition: background-color 0.3s ease;
  :hover {
    background-color: white;
    opacity: 0.8; // Make text more readable on hover if needed
  }
`;

const ButtonInput2 = styled.input`
  border: 1px solid green;
  background: url(${green})  no-repeat center center / cover; // Update URL
  padding: 15px;
  font-weight: bold;
  width: 100%;
  color: white;
  outline: none;
  transition: background-color 0.3s ease;
  :hover {
    background-color: darkgreen;
    opacity: 0.8; // Make text more readable on hover if needed
  }
`;

const SumbitWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;



const ButtonWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;
  @media (max-width: 991px) {

    display:flex;
    justify-content:center;
    width: 100%;
    margin-bottom: 50px;
  }
  
`;

