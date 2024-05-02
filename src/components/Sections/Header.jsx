

import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";

import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { Link } from "react-scroll";


export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">Transforming Visions into Software Realities.</h1>
          <HeaderP className="font13 semiBold">
          "Welcome to our world at AB-Matrix, where we specialize in transforming your visions into tangible software realities. We understand the power of ideas and the impact they can have on businesses and lives. Through a fusion of creativity and cutting-edge technology, we meticulously craft every line of code to bring your concepts to life.
          </HeaderP>
          <BtnWrapper >
          <Link activeClass="active" style={{ padding: "10px 15px" }} to="services" spy={true} smooth={true} offset={-80}>
          <FullButton  style={{backgroundcolor: '#08116A'}} title="Let's Get Started" />
              </Link>
            
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={"https://i.ibb.co/Cm5P1rQ/img1.jpg"} alt="office" style={{width:'400px', zIndex: 9}} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>In the realm of code, dreams become functions, visions become features, and aspirations transform into executable realities.</em>
              </p>
            </div>
            
          </QuoteWrapper>
          {/* <QuoteWrapper style={{marginLeft:"450px"}} className="flexCenter radius8">
            
            <Img className="radius8" src={"https://i.ibb.co/DKMwW25/ABMATRIX-LOGO3.png"} alt="office" style={{height:'250px',width:'250px', zIndex: 9}} />

            
          </QuoteWrapper> */}
          

        </ImageWrapper>
        
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-bottom: 100px;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


