import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

export default function Contact() {
  

  return (
    <Wrapper>
      <div className="darkBg">
        <br />
        <div className="container">
          <section style={{ color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
            <Socialicon>
              <div style={{ display: 'flex', gap: '30px' }} id='soicalicon' className='social-icons'>
                <a href='https://www.upwork.com/freelancers/muhammada5313' className='social-icon' target="_blank" rel="noopener noreferrer">
                  <img src={"https://i.ibb.co/dQH10HX/upwork.png"} alt='Upwork' width='30' height='30' />
                </a>
                <a href='https://www.fiverr.com/abdu11ahmalik12?public_mode=true' className='social-icon' target="_blank" rel="noopener noreferrer">
                  <img src={"https://i.ibb.co/Zx4wfjh/fivverlogo.png"} alt='Fiverr' width='55' height='30' />
                </a>
                <a href='https://www.linkedin.com/company/ab-matrixx/' className='social-icon' target="_blank" rel="noopener noreferrer">
                  <img src={"https://i.ibb.co/jHtywTY/linkedin-logo.png"} alt='LinkedIn' width='30' height='30' />
                </a>
              </div>
            </Socialicon>
          </section>
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="pointer flexNullCenter" to="home" smooth={true}>
              <img style={{ width: '100px' }} src={"https://i.ibb.co/59LQpvD/NOBG-LOGO.png"} alt="AB-Matrix Logo" />
            </Link>
           
          </InnerWrapper>
          <StyleP className="whiteColor font13">
              ©  <span className="purpleColor font13">AB-Matrix</span> All Right Reserved
            </StyleP>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const StyleP = styled.p`
  text-align: center;
  margin: 20px 0;

  @media (min-width: 550px) {
    margin: 0;
  }
`;

const Socialicon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
  margin: 20px 0;

  @media (max-width: 550px) {
    justify-content: center;
  }
`;
