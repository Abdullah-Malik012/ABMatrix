import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets

import whatsapp from "../../assets/img/whatsapplogo.png"

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
     <br />
        <div className="container">
       

        <section style={{ color: 'white' }} className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
     <Socialicon>   
  <div style={{ display: 'flex', gap: '30px' }} id= 'soicalicon' className='social-icons'>
    <a href='https://www.upwork.com/freelancers/muhammada5313' className='social-icon' target="_blank" rel="noopener noreferrer">
      <img src={"https://i.ibb.co/dQH10HX/upwork.png"} alt='Facebook' width='30' height='30' />
    </a>

    <a href='https://www.fiverr.com/abdu11ahmalik12?public_mode=true' className='social-icon' target="_blank" rel="noopener noreferrer">
      <img src={"https://i.ibb.co/Zx4wfjh/fivverlogo.png"} alt='Facebook' width='55' height='30' />
    </a>
   

    <a href='https://www.linkedin.com/company/ab-matrixx/' className='social-icon' target="_blank" rel="noopener noreferrer">
      <img src={"https://i.ibb.co/jHtywTY/linkedin-logo.png"} alt='LinkedIn' width='30' height='30' />
    </a>
  </div>
  </Socialicon>
</section>
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
         
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <img style={{width: '100px'}} src={"https://i.ibb.co/59LQpvD/NOBG-LOGO.png"} />
          
          </Link>

          
            
            {/* <StyleP className="whiteColor font13">
              <h1>Contact Details:</h1>
              <span className="whiteColor font13">abmatrix.co@gmail.com</span> 
<br />  
              <span className="whiteColor font13">+92 313 7753833</span><img src={whatsapp} alt='LinkedIn' width='20' height='20' />

            </StyleP> */}
           
          </InnerWrapper>

          <StyleP className="whiteColor font13">
              © {getCurrentYear()} - <span className="purpleColor font13">AB-Matrix</span> All Right Reserved
            </StyleP>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  display: flex;
 justify-content: left; // Default alignment for larger screens
  align-items: left;
  flex-direction: column;

  @media (min-width: 550px) {
    flex-direction: row;
  }
`;

const StyleP = styled.p`
  text-align: center;
margin: 20px 0 30px 0;

  @media (min-width: 550px) {
    margin: 0 20px;
  }
`;

const Socialicon = styled.p`
  display: flex;
  justify-content: right; // Default alignment for larger screens
  align-items: center;
  gap: 30px; // Assuming you want some space between icons
  margin: 20px 0;

  @media (max-width: 550px) {
    justify-content: center; // Center the icons on small screens
  }
`;

