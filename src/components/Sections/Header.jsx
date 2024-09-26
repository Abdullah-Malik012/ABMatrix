import React, { useEffect, useRef , useState} from "react";
import styled, { keyframes } from "styled-components";
import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../assets/svg/Quotes";
import { Link } from "react-scroll";
import bgvideo from "./bgheader.mp4";
import aboutimg from "./techbg.jpg";
import bgimg from "./office.png";
import faq from "./faq.jpg";
import logo from "./abmatrixlogo.png"


export default function Header() {
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const faqData = [
    {
      question: "What makes AB-Matrix different from other tech companies?",
      answer: [
        "Expertise in development, design, and strategy.",
        "Bringing ideas to life with unparalleled precision.",
        "Commitment to exceeding expectations.",
        "Innovative solutions that enhance your vision."
      ]
    },
    {
      question: "How do I get started with AB-Matrix?",
      answer: [
        "Reach out through our contact form on the website.",
        "Email us at abmatrix.co@gmail.com.",
        "Our team will guide you from initial consultation to project deployment."
      ]
    },
    {
      question: "What is AB-Matrix's approach to project management?",
      answer: [
        "Collaborative approach from concept to deployment.",
        "Close work with you to align with your goals.",
        "Prioritize clear communication.",
        "Adaptive strategies for exceptional results."
      ]
    },
    {
      question: "How does AB-Matrix handle data protection and compliance?",
      answer: [
        "Implement stringent security measures.",
        "Adhere to relevant regulations for data safety.",
        "Stay updated on compliance requirements."
      ]
    },
    {
      question: "Can AB-Matrix handle international projects?",
      answer: [
        "Expertise and resources to manage international projects.",
        "Dedicated service whether local or global.",
        "Consistent level of excellence in project handling."
      ]
    }
  ];
  

  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onloadeddata = () => {
        setIsLoading(false); // Set loading to false once the video is loaded
      };
      video.play().catch((error) => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  return (
    <>
      {/* {isLoading && (
        <LoadingOverlay>
          <Spinner />
        </LoadingOverlay>
      )} */}
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
                    In the realm of code, dreams become functions, visions
                    become features, and aspirations transform into executable
                    realities.
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
                cutting-edge technology, we meticulously craft every line of
                code to bring your concepts to life."
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
      
      <FeaturesSection>
        <FeaturesHeader>Features & Benefits</FeaturesHeader>
        <FeaturesContent>
          <FeatureItem>
            <FeatureIcon>🚀</FeatureIcon>
            <FeatureTitle>Innovative Solutions</FeatureTitle>
            <FeatureDescription>Leverage the latest technology to drive your business forward.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>🔒</FeatureIcon>
            <FeatureTitle>Top-notch Security</FeatureTitle>
            <FeatureDescription>Robust security measures to ensure your data is safe and secure.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>⚡</FeatureIcon>
            <FeatureTitle>High Performance</FeatureTitle>
            <FeatureDescription>Optimized performance for seamless and efficient operations.</FeatureDescription>
          </FeatureItem>
          <FeatureItem>
            <FeatureIcon>🌟</FeatureIcon>
            <FeatureTitle>Exceptional Support</FeatureTitle>
            <FeatureDescription>Dedicated support team available to assist you anytime.</FeatureDescription>
          </FeatureItem>
        </FeaturesContent>
      </FeaturesSection>

      <FAQContainer>
      <FAQHeader>Frequently Asked Questions</FAQHeader>
      <FAQList>
        {faqData.map((faq, index) => (
          <FAQCard key={index} isActive={activeIndex === index}>
            <FAQCardHeader onClick={() => handleToggle(index)}>
              <h3>{faq.question}</h3>
              <ArrowIcon isActive={activeIndex === index}>▼</ArrowIcon>
            </FAQCardHeader>
            <FAQCardBody isActive={activeIndex === index}>
            <ul>
        {faq.answer.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
            </FAQCardBody>
          </FAQCard>
        ))}
      </FAQList>
    </FAQContainer>
    <div className="lightBg">
<div className="container">
  <Advertising className="flexSpaceCenter">
    <AddLeft>
      <h2 className="font40 extraBold">A Study of Creativity</h2>
      <p className="font16">
      Fueling Innovation, Transforming Ideas: We are a dynamic company dedicated to pushing the boundaries of digital creativity. From intuitive UI/UX designs to robust web development and seamless integrations, from Artifical Intelligene to Blockchain, we are the catalysts for your online success. Our commitment to excellence extends to database solutions and effortless deployment, ensuring your digital journey is not just evolutionary but revolutionary. Embrace the future with a partner that brings your vision to life – where innovation meets unparalleled expertise.
      </p>
      <ButtonsRow className="flexNullCenter" style={{ margin: "30px 0"}}>
       
        <div style={{ width: "190px", marginLeft: "15px" }}>
          


        </div>
      </ButtonsRow>
    </AddLeft>
    <AddRight>
      <AddRightInner>
        <div className="flexNullCenter">
          <AddImgWrapp1 className="flexCenter">
          <img className="radius8" src={logo} alt="office" style={{height:'250px',width:'250px', zIndex: 9}} />

          </AddImgWrapp1>
          
        </div>
      </AddRightInner>
    </AddRight>
  </Advertising>
</div>
</div>
  



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

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 1000;
`;

const Spinner = styled.div`
  border: 8px solid #f3f3f3;
  border-radius: 50%;
  border-top: 8px solid #08116A;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;


const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;  // Use full width on smaller screens
    order: 2;
    text-align: center;
    h2 {
      font-size: 1.5rem;  // Smaller font size for headings on smaller screens
      line-height: 2.5rem;  // Adjust line height to fit smaller screens
    }
    p {
      margin: 0 auto;
      padding: 0 20px;  // Add padding for better readability
    }
  }
    
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 100%;  // Full width for smaller screens
    position: relative;
    top: 0;  // Adjust positioning to flow in normal document flow
    order: 1;
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
  font-family: "Poppins";

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
    margin-bottom: 50%;
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
  line-height: 1.5;

  @media (max-width: 960px) {
    
  margin: 10px ;

  }
`;

const HeaderP = styled.p`
  max-width: 600px;
  margin: 20px auto;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    max-width: 100%;
    font-size: 1rem;

  }
`;

const BtnWrapper = styled.div`
  max-width: 200px;
  margin: 0 auto;
  margin-top: 50px;
  @media (max-width: 960px) {
    width: 60%;
    margin-top: 5%;
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
  background: rgba(0, 0, 0, 0.7); 
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
  min-height: 100vh; /* Ensures it covers the full viewport height */
  width: 100%; /* Ensures it covers the full viewport width */
  box-sizing: border-box; /* Includes padding in the width calculation */

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
    bottom: -5px;
    height: 4px;
    background-color: #08116A;
    transform: scaleX(0);
    transform-origin: left;
    animation: slideUnderline 2s infinite;
    border-radius: 4px;
    width: 25%;
  }

  @keyframes slideUnderline {
    0% {
      transform: scaleX(0);
    }
    50% {
      transform: scaleX(1);
    }
    100% {
      transform: scaleX(0);
    }
  }

  ul {
    display: flex;
    flex-direction: row; /* Keep items in a row for larger screens */
    flex-wrap: wrap;
    margin-top: 20px;
    padding-left: 0;
    list-style: none;
    font-size: 1.125rem;
    line-height: 1.6;
    color: #333;
    width: 100%;

    @media (max-width: 960px) {
      flex-direction: column; /* Stack items in a column for mobile */
      align-items: center; /* Center items */
      font-size: 20px; /* Adjust font size for mobile */
    }

    li {
      width: 45%; /* Adjust the width for larger screens */
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
        padding-left: 10; /* Remove left padding for mobile */
        font-size: 80%;
        width: 100%; /* Full width for mobile */
        justify-content: flex-start; /* Align items to the left */
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

// Keyframes for infinite bounce animation
const bounceAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Keyframes for a pulse effect on hover
const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

// Features Section
const FeaturesSection = styled.section`
  padding: 100px;
  background: #f5f5f5;
  text-align: center;
margin-top: 40px;
   @media (max-width: 768px) {
   padding: 40px;
   margin-top: 30px;

  }
`;

const FeaturesHeader = styled.h2`
  font-size: 2rem;
  margin-bottom: 50px;
`;

const FeaturesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureItem = styled.div`
  flex: 1;
  max-width: 350px;
  margin: 10px;
  padding: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${pulseAnimation} 3s infinite ease-in-out;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 10px 0;
  }
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 10px;
  transition: transform 0.3s ease;
  animation: ${bounceAnimation} 2s infinite;

  ${FeatureItem}:hover & {
    transform: scale(1.2) rotate(10deg);
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 10px;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
`;

const FAQContainer = styled.section`
  margin-top: 50px;
  padding: 100px; /* Adjusted padding */
  background: #f4f4f4;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 60vh;
  background-image: url(${faq}); /* Ensure faq is imported correctly */
  background-size: cover; /* Cover the entire container */
  background-repeat: no-repeat; /* Prevent repeating the image */
  background-position: center; /* Center the image */

  
  

  @media (max-width: 768px) {
    padding: 40px 15px; /* Adjusted padding for smaller screens */

  }

  @media (max-width: 480px) {
    padding: 20px 10px; /* Further reduced padding for very small screens */

  }
`;

const FAQHeader = styled.h2`
  font-size: 2rem; /* Reduced font size */
  color: white;
  margin-bottom: 30px; /* Reduced margin */
  font-weight: 700;
  text-align: center;
  position: relative;
  margin-bottom: 5%;


  @media (max-width: 768px) {

              font-size: 25px;
                margin-bottom: 10%;


  }

  @media (max-width: 480px) {
            font-size: 25px;
                            margin-bottom: 10%;


  }


  
  
`;

const FAQList = styled.div`
  max-width: 700px; /* Reduced width */
  width: 100%;


  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const FAQCard = styled.div`
  background: #ffffff;
  border-radius: 50px; /* Reduced border radius */
  margin-bottom: 15px; /* Reduced margin */
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Reduced shadow */
  transition: box-shadow 0.3s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Reduced shadow on hover */
  }

  
`;

const FAQCardHeader = styled.div`
  padding: 15px; /* Reduced padding */
  font-size: 1.1rem; /* Reduced font size */
  font-weight: 600;
  background: #495057;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.3s ease;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }

  @media (max-width: 768px) {
    font-size: 10px;
  }

`;

const ArrowIcon = styled.span`
  font-size: 1.25rem; /* Reduced font size */
  transition: transform 0.3s ease;
  transform: ${({ isActive }) => (isActive ? "rotate(180deg)" : "rotate(0)")};
`;

const FAQCardBody = styled.div`
padding: ${({ isActive }) => (isActive ? "15px" : "0")};
  background: #f9f9f9;
  max-height: ${({ isActive }) => (isActive ? "150px" : "0")};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  overflow: hidden;
  transition: max-height 0.5s ease, opacity 0.5s ease, padding 0.3s ease;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
  
  ul {
    list-style-type: disc; /* Set bullet points */
    padding-left: 20px; /* Indent bullets */
    margin: 0; /* Remove default margin */
  }


  @media (max-width: 768px) {
    max-height: ${({ isActive }) => (isActive ? "180px" : "0")}; /* Adjusted max-height for smaller screens */
  }

  @media (max-width: 480px) {
    max-height: ${({ isActive }) => (isActive ? "160px" : "0")}; /* Further adjusted max-height for very small screens */
  }
`;


const Advertising = styled.div`
  margin: 110px 0;
  padding: 100px 0;
  position: relative;
  font-family: 'Poppins';
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
    font-size: 10px;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
        font-size: 10px;

  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const AddRightInner = styled.div`
width: 100%;
`;
const AddImgWrapp1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0; /* Ensure no margin is affecting the layout */

  img {
    width: 30%; /* Default width */
    max-width: 100%; /* Prevent image from exceeding its container */
    height: auto;
    border-radius: 1rem;
    display: block; /* Ensure the image behaves as a block element */
    
    @media (max-width: 860px) {
      width: 50%; /* Reduce size for medium screens */
    }

    @media (max-width: 600px) {
      width: 70%; /* Further reduce size for smaller screens */
    }

    @media (max-width: 400px) {
      width: 90%; /* Maximum reduction for very small screens */
    }
  }
`;
