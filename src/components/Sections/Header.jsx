import React from "react";
import styled, { keyframes } from "styled-components";
import FullButton from "../Buttons/FullButton";
import QuotesIcon from "../../assets/svg/Quotes";
import { Link } from "react-scroll";
import bgvideo from "./bg.mov";

export default function Header() {
  return (
    <Wrapper id="home">
      <VideoContainer>
      <StyledVideo autoPlay loop muted>
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
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
                to="services"
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
  position: fixed;
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
