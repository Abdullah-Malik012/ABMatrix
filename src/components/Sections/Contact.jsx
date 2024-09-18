import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

import contactImage from "../../components/Sections/contactus.jpg";
import Contactbanner from "../../components/Sections/contactusbanner1.jpg"; // Replace with your contact image

export default function Pricing() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '', // Added subject
    message: '',
  });
  const [formStatus, setFormStatus] = useState('');

  emailjs.init("Zgp4GYJNEo6qlV5iU"); // Replace with your EmailJS user ID

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_u869t1r',
      'template_rtctqwf',
      e.target,
      'Zgp4GYJNEo6qlV5iU'
    )
    .then((result) => {
      setFormStatus('Message sent successfully!');
    }, (error) => {
      setFormStatus('Failed to send message. Please try again.');
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <PageWrapper>
    <HeaderBanner id="home">
  <BackgroundImage src={Contactbanner} />
  <BannerContent>
    <h1>Why hesitate? </h1><h1>Let's Connect today!</h1>
    <h2>Below you'll find multiple ways to connect with us</h2>
  </BannerContent>
</HeaderBanner>

      <ContentWrapper>
        <ContactSection id="contact">
          <ContactRight>
            <HeaderInfo>
              <h1>Reach out to us today!</h1>
              <p>
                Fill out the form below to reach out to us with your queries or requirements. We will get back to you shortly.
              </p>
            </HeaderInfo>

            <Form onSubmit={sendEmail}>
              <FormField>
                <Label htmlFor="name">
                  <i className="fa fa-user"></i> Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </FormField>

              <FormField>
                <Label htmlFor="email">
                  <i className="fa fa-envelope"></i> Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </FormField>

              <FormField>
                <Label htmlFor="subject">
                  <i className="fa fa-tag"></i> Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Enter the subject"
                />
              </FormField>

              <FormField>
                <Label htmlFor="message">
                  <i className="fa fa-comment-dots"></i> Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here"
                />
              </FormField>

              <SubmitButton type="submit">Send Message</SubmitButton>
            </Form>

            {formStatus && (
              <StatusMessage success={formStatus === 'Message sent successfully!'}>
                {formStatus}
              </StatusMessage>
            )}
          </ContactRight>

          <ContactLeft>
            <img src={contactImage} alt="Contact Us" />
          </ContactLeft>
        </ContactSection>
      </ContentWrapper>
    </PageWrapper>
  );
}

// Styled components for the updated layout
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
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
      h1 {
    font-size: 0.5rem;
  
   
  }
        font-size: 0.6rem;

  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.src});
  background-size: cover; // Ensures the image covers the entire background
  background-position: center; // Centers the image
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
      font-size: 2rem;
    }
  }
`;

const ContentWrapper = styled.div`
  flex: 1;
  background-color: #f4f7fa;
  padding: 60px 20px;

  @media (max-width: 768px) {
    padding: 40px 15px;
  }
`;

const ContactSection = styled.section`
  display: flex;
  flex-direction: row; // Default for larger screens
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden; // Ensure no overflow issues
  margin: 0 auto;
  max-width: 1200px; // Limit width for large screens

  @media (max-width: 860px) {
    flex-direction: column; // Stack vertically on smaller screens
    width: auto;
  }
`;

const ContactRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column; // Stack content vertically
  align-items: center;
  justify-content: center;
  max-width: 100%;
  padding: 50px;
  box-sizing: border-box; // Ensures padding doesn't affect width

  @media (max-width: 860px) {
    padding: 10px;
  }
`;

const ContactLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  box-sizing: border-box;

 
`;

// Ensure you have the Roboto font loaded
const font = `'Roboto', sans-serif`;

// HeaderInfo Component
const HeaderInfo = styled.div`
  text-align: center;
  margin-bottom: 30px;

  h1 {
    font-family: ${font};
    font-size: 2.5rem;
    color: #222;
    margin-bottom: 10px;
    font-weight: 700; // Bold font weight for headings
  }

  p {
    font-family: ${font};
    font-size: 1.125rem;
    color: #555;
    font-weight: 400; // Regular font weight for text
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }

   
`;

// FormField Component
const FormField = styled.div`
  margin-bottom: 20px;
  width: 100%;

   @media (max-width: 768px) {
     width: 95%;

  }
`;

// Label Component
const Label = styled.label`
  font-family: ${font};
  font-weight: 500;
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  color: #333;

   @media (max-width: 768px) {
     width: 95%;

  }
`;

// Input Component
const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: ${font};
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);

  &:focus {
    border-color: #007bff;
    outline: none;
  }

   @media (max-width: 768px) {
     width: 95%;

  }
`;

// Textarea Component
const Textarea = styled.textarea`
  width: 100%;
  height: 150px; // Set a fixed height to provide more space
  padding: 16px; // Increase padding for more space inside the textarea
  border: 1px solid #ccc;
  border-radius: 8px;
  font-family: ${font};
  font-size: 1.125rem; // Slightly larger font size
  transition: border-color 0.3s ease;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  resize: vertical;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

   @media (max-width: 768px) {
     width: 95%;

  }
`;


// SubmitButton Component
const SubmitButton = styled.button`
  background-color: #00a6fb;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 20px;
  font-family: ${font};
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
width: 30%;
  &:hover {
    background-color: #0056b3;
  }

   @media (max-width: 768px) {
     border-radius: 50px;
  font-size: 0.9rem;

     width: 50%;

  }
`;

// StatusMessage Component
const StatusMessage = styled.p`
  margin-top: 20px;
  font-family: ${font};
  font-size: 1rem;
  color: ${props => (props.success ? 'green' : 'red')};
`;
