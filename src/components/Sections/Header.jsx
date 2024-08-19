import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../assets/svg/Quotes";
import { Link } from "react-scroll";
import bgvideo from "./bg.mov";
import aboutimg from "./techbg.jpg";
import bgimg from "./office.png";

export default function Header() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <>
    <Wrapper id="home">
      <VideoContainer>
        <StyledVideo ref={videoRef} autoPlay loop muted playsInline>
          <source src={bgvideo} type="video/mp4" />
        </StyledVideo>
      </VideoContainer>
      <Content>
        <LeftSide>
          <AnimatedHeader>
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <QuoteText className="font15 whiteColor">
                <em>
                  In the realm of code, dreams become functions, visions become
                  features, and aspirations transform into executable realities.
                </em>
              </QuoteText>
            </QuoteWrapper>
          </AnimatedHeader>
        </LeftSide>
        <RightSide>
          <AnimatedHeader className="extraBold font60">
            Transforming Visions into Software Realities.
            <HeaderP className="font15 semiBold">
              "Welcome to our world at AB-Matrix, where we specialize in
              transforming your visions into tangible software realities. We
              understand the power of ideas and the impact they can have on
              businesses and lives. Through a fusion of creativity and
              cutting-edge technology, we meticulously craft every line of code
              to bring your concepts to life."
            </HeaderP>
            <BtnWrapper>
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="About"
                spy={true}
                smooth={true}
                offset={-80}
              >
                <FullButton
                  style={{ backgroundColor: "#08116A" }}
                  title="Let's Get Started"
                />
              </Link>
            </BtnWrapper>
          </AnimatedHeader>
        </RightSide>
      </Content>

    </Wrapper>
    <AboutWrapper id="About">
    <ImageWrapper>
        <StyledImage src={aboutimg} />
      </ImageWrapper>
      <TextWrapper >
      <h2><span class="underline"></span>About Us</h2>
        <p >
            At AB-Matrix, we believe that every great idea deserves to be brought to life
            through the power of technology. Our team of expert developers, designers,
            and strategists work tirelessly to ensure that your vision becomes a reality.
            From conceptualization to deployment, we are committed to delivering
            solutions that not only meet but exceed your expectations.
 </p>


<TextWrapper>
  <br/>
 
  <ul>
    <li>We bring ideas to life with technology.</li>
    <li>Expert developers and strategists.</li>
    <li>Commitment to exceeding expectations.</li>
    <li>Quick, adaptive, and efficient.</li>
    <li>Data protection and compliance.</li>
   <li> Your vision is our priority.</li>

    
  </ul>

  
</TextWrapper>

        
               </TextWrapper>
      
    </AboutWrapper>


    <Testimonials>
        <TestimonialHeader>What Our Clients Say</TestimonialHeader>
        <TestimonialContent>
          <TestimonialItem>
            <TestimonialQuote>
              " The work delivered was very relevant and efficient. All this in a shorter than expected timeframe.
               I won't hesitate to come back for future projects."
            </TestimonialQuote>
            <br />
            <br />
            <TestimonialAuthor>- Emilie</TestimonialAuthor>
          </TestimonialItem>

          <TestimonialItem>
            <TestimonialQuote>
              " They Excel at providing detailed explanations, ensuring our cooperation runs smoothly.
               They consistently delivers more than initially discussed, demonstrating their client-centric approach.
                I look forward to collaborating with them again in the future."
            </TestimonialQuote>
            <TestimonialAuthor>- Damien</TestimonialAuthor>
          </TestimonialItem>
          <TestimonialItem>
          <br />
            <TestimonialQuote>
              "Thank you so much for the fast delivery.
               All of my queries were solved and in detail explanations were also provided."
            </TestimonialQuote>
            <br />
            <br />
         
            <TestimonialAuthor>- Shamayel</TestimonialAuthor>
          </TestimonialItem>

          <TestimonialItem>
            <TestimonialQuote>
              "I recently had the experience of using the services of AB-Matrix and I must say, I was thoroughly impressed with the level of professionalism, expertise that he provided."
            </TestimonialQuote>
            <br />
            <br />

            <TestimonialAuthor>- Tanveer seith</TestimonialAuthor>
          </TestimonialItem>


          <TestimonialItem>
            <TestimonialQuote>
              "In one word, "The Best". At first I was kinda being skeptical with them as they didn't have much reviews and all. However my doubts went away once I got their work. Surely will book them in the future"
            </TestimonialQuote>
            <br />
            <TestimonialAuthor>- Shamayel</TestimonialAuthor>
          </TestimonialItem>

          <TestimonialItem>
          <br />

            <TestimonialQuote>
              "Very fast and effective communication and response to revisions.
               Did quite a lot of work in a limited time."
            </TestimonialQuote>
            <br />
            <br />
            <TestimonialAuthor>-Aiman</TestimonialAuthor>
          </TestimonialItem>

          

        </TestimonialContent>
      </Testimonials>
      
    </>
  );
}

// Keyframes for sliding animation
const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Keyframes for bouncing animation
const slowBounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px); // Adjust this value to change the bounce height
  }
`;

const Wrapper = styled.section`
  display: flex;
  align-items: right;
  justify-content: right;
  height: 100vh;
  background-size: cover;
  background-position: center;
  text-align: center;
  position: relative;

 @media (max-width: 960px) {
    margin-top:5%;
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

const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  color: white;
  font-family: "Poppins", Times New Roman;

  @media (max-width: 960px) {
    flex-direction: column;
    text-align: center;
  }
`;

const RightSide = styled.div`
  width: 50%;
  margin-top: 10%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 30px;
  }
`;

const LeftSide = styled.div`
  width: 50%;
  display: flex;
  align-items: left;
  justify-content: left;
  @media (max-width: 960px) {
    width: 100%;
  }
`;

const AnimatedHeader = styled.h1`
  animation: ${slideIn} 1s ease-out;
`;

const HeaderP = styled.p`
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    max-width: 100%;
    font-size: 0.9rem;
  }
`;

const BtnWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  @media (max-width: 960px) {
    width: 60%;
    margin-top: -5%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;

const QuoteWrapper = styled.div`
  position: relative;
  max-width: 400px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 8px;
  @media (max-width: 960px) {
    display: none;
  }
`;

const QuotesWrapper = styled.div`
  position: absolute;
  top: -20px;
  left: 20px;
`;

const QuoteText = styled.div`
  margin-top: 40px;
  text-align: left;
  @media (max-width: 960px) {
    text-align: center;
  }
`;
const Testimonials = styled.section`
  width: 100%;
  background-image: url(${bgimg}); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  color: white;
  padding: 50px 20px;
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
    background: rgba(0, 0, 0, 0.7); // Semi-transparent black overlay
    z-index: 1; // Place the overlay above the background image
  }

  // Ensure the content appears above the overlay
  h2 {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
  font-size: 30px;
  }
}
  


h2::after {
  content: "";
  position: absolute;
  border-radius: 10px;
  bottom: -5px; /* Adjusts the space between text and underline */
  width: 15%; /* Width of the underline */
  height: 4px; /* Thickness of the underline */
  background-color: white; /* Color of the underline */
   
  transform: translateX(-50%); /* Centers the underline horizontally */
  animation: slideUnderline 3s infinite; /* Apply the animation */

   @media (max-width: 960px) {
  width: 80%; /* Width of the underline */
  }
}

@keyframes slideUnderline {
  0% {
    transform: translateX(-30%) translateX(-70%); /* Start from left side */
  }
  50% {
    transform: translateX(-30%) translateX(30%); /* Move to the right side */
  }
  100% {
    transform: translateX(-30%) translateX(-70%); /* Move back to the left side */
  }
}



  p {
    position: relative;
    z-index: 2;

  }

  // Media query for smaller screens
  @media (max-width: 768px) {
    background-size: contain;
    padding: 30px 15px;
  }

  @media (max-width: 480px) {
    background-size: cover;
    padding: 20px 10px;
  }
`;

const TestimonialHeader = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const TestimonialContent = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
`;

const TestimonialItem = styled.div`
  max-width: 400px;
  margin: 30px;
  padding: 20px;
  background: rgba(3, 4, 94, 0.5); 
  color: white;
  border-radius: 30px;
`;


const TestimonialQuote = styled.p`
  font-style: italic;
  margin-bottom: 10px;

  

`;

const TestimonialAuthor = styled.p`
  font-weight: bold;
  display: flex;
  align-items: bottom;
  justify-content: center;
`;

const AboutWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  background-color: #f8f9fa;

  @media (max-width: 960px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const TextWrapper = styled.div`
  flex: 1;
  padding-right: 50px;
  margin-left: 2%;

  @media (max-width: 960px) {
    padding-right: 0;

    text-align: center;
  }
h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #08116A;
  position: relative;
}
h2 .underline {
  position: absolute;
  bottom: -5px; /* Adjusts the space between text and underline */
  height: 4px; /* Thickness of the underline */
  background-color: #08116A; /* Color of the underline */
  transform: scaleX(0); /* Start with no visible underline */
  transform-origin: left; /* Animation starts from the left */
  animation: slideUnderline 2s infinite; /* Apply the animation */
  border-radius: 4px; /* Rounded ends of the underline */
  width: 25%; /* Full width minus the width of the dots */
}

@keyframes slideUnderline {
  0% {
    transform: scaleX(0); /* Start with no visible underline */
  }
  50% {
    transform: scaleX(1); /* Fully extend the underline */
  }
  100% {
    transform: scaleX(0); /* Collapse the underline back to zero width */
  }
}



  


  ul {
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-left: 0;
    list-style: none;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #333;
      width:100%;


     @media (max-width: 960px) {
     display: flex;
   font-size: 20px;
   align-items: left;
     justify-content: left;

     flex-direction: column;
      }

    li {
      width: 45%;
      margin-bottom: 10px;
      position: relative;
      padding-left: 30px;
      display: flex;
      align-items: center;

      &:before {
        content: '✔';
        color: green;
        position: absolute;
        left: 0;

       

  }

   @media (max-width: 960px) {
    padding-right: 0;
    text-align: center;
    font-size: 80%;
          width:100%;

      }
    }
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  text-align: right;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    text-align: center;
    margin-top: 20px;
        margin-bottom: 50px;

  }
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 20px 30px rgba(0.9, 0.9, 0.9, 0.9); /* Shadow below for floating effect */
  animation: ${slowBounce} 2s ease infinite; 
`;
