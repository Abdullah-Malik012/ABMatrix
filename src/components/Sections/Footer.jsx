import React from 'react';
import styled from 'styled-components';
import { SiGmail, SiUpwork } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa';
import { BsWhatsapp } from 'react-icons/bs';
import FooterBanner from '../../components/Sections/footerbanner.jpg';  // Adjust the path as needed

import { Link } from 'react-scroll';
import mernlogo from '../../components/Sections/MERN-logo.png';
import ailogo from '../../components/Sections/ailogo.png';
import blockchainlogo from '../../components/Sections/blockchainlogo.png';
import dblogo from '../../components/Sections/dblogo.png';

import CompanyLogo from '../../components/Sections/abmatrixnobg.png';  // Import your logo image

const useIsMobile = () => {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

const EmailIconLink = ({ isMobile }) => {
  const emailHref = isMobile 
    ? "mailto:abmatrix.co@gmail.com" 
    : "https://mail.google.com/mail/?view=cm&fs=1&to=abmatrix.co@gmail.com";

  return (
    <IconLink href={emailHref} target="_blank" rel="noopener noreferrer">
      <SiGmail />
    </IconLink>
  );
};

export default function CustomFooter() {
  const isMobile = useIsMobile();

  return (
    <>
      <SocialSection>
        <div>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <IconLink href="https://www.linkedin.com/company/abmatrixsolutions/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href="https://wa.me/923137753833" target="_blank" rel="noopener noreferrer">
            <BsWhatsapp />
          </IconLink>        
          <EmailIconLink isMobile={isMobile} />
          <IconLink href="https://www.upwork.com/freelancers/~0161c6d8726055c7c7" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </IconLink>
        </div>
      </SocialSection>

      <FooterContainer>
        <ContentSection>
          <ContentRow>
            <ContentCol>
              <LogoWrapper>
                <Link 
                  className="pointer flexNullCenter" 
                  to="home" 
                  smooth={true} 
                  duration={800}
                >
                  <img src={CompanyLogo} alt="home" />
                </Link> 
              </LogoWrapper>
            </ContentCol>

            <ContentCol>
              <h6>Services</h6>
              <ul>
                <li><a href="/Services">Web Development</a></li>
                <li><a href="/Services">Artificial Intelligence</a></li>
                <li><a href="/Services">Databases</a></li>
                <li><a href="/Services">Blockchain</a></li>
              </ul>
            </ContentCol>

            <ContentCol>
              <h6>Useful Links</h6>
              <ul>
                <li><a href="/Pricing">Pricing</a></li>
                <li><a href="/Services">Services</a></li>
                <li><a href="/Projects">Projects</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </ContentCol>

            <ContentCol>
              <h6 style={{ marginBottom: '35px'}}>Technology</h6>
              <ul style={{ display: 'flex', listStyle: 'none', padding: 0, justifyContent: 'center' }}>
                <li style={{ margin: '0 15px', textAlign: 'center' }}>
                  <img src={mernlogo} alt="MERN" style={{ width: '80px', height: 'auto' }} />
                  <p style={{ marginTop: '5px', fontSize: '14px' }}>MERN</p>
                </li>
                <li style={{ margin: '0 15px', textAlign: 'center' }}>
                  <img src={dblogo} alt="MongoDB" style={{ width: '35px', height: 'auto' }} />
                  <p style={{ marginTop: '5px', fontSize: '14px' }}>SQL & NoSQL</p>
                </li>
                <li style={{ margin: '0 15px', textAlign: 'center' }}>
                  <img src={ailogo} alt="AI" style={{ width: '35px', height: 'auto' }} />
                  <p style={{ marginTop: '5px', fontSize: '14px' }}>AI</p>
                </li>
                <li style={{ margin: '0 15px', textAlign: 'center' }}>
                  <img src={blockchainlogo} alt="Blockchain" style={{ width: '50px', height: 'auto' }} />
                  <p style={{ marginTop: '5px', fontSize: '14px' }}>Blockchain</p>
                </li>
              </ul>
            </ContentCol>
          </ContentRow>
        </ContentSection>

        <FooterBottom>
          <p>© 2024 Copyright: <a>AB Matrix</a></p>
        </FooterBottom>
      </FooterContainer>
    </>
  );
}

const FooterContainer = styled.footer`
  position: relative;
  background-image: url(${FooterBanner});
  background-size: cover;
  background-position: center;
  color: #ffffff;
  padding-top: 20px;
  font-size: 14px;
  text-align: center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`;

const SocialSection = styled.section`
  padding: 20px;
  background: radial-gradient(circle, #010121, #000000);
  color: white;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    align-items: center;

    span {
      font-size: 16px;
      margin-right: 10px;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    div {
      margin-bottom: 10px;
    }
  }
`;

const IconLink = styled.a`
  margin: 0 20px;
  color: inherit;
  font-size: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    font-size: 18px;
    margin: 5px 18px;
  }
`;

const ContentSection = styled.section`
  padding: 40px 0;
`;

const ContentRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContentCol = styled.div`
  flex: 1;
  min-width: 220px;
  margin: 0 15px;
  color: #ffffff;

  h6 {
    font-weight: bold;
    margin-bottom: 20px;
    font-size: 16px;
  }

  p, a {
    font-size: 14px;
    color: #d3d3d3;
    text-decoration: none;

    &:hover {
      color: #ffffff;
    }
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
    text-align: center;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    max-width: 150px;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 120px;
    }
  }
`;

const FooterBottom = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px 0;
  display : flex;
  align-items: bottom;
  justify-content:center;
  

  p {
    margin: 0;
  }

  a {
    color: #ffffff;
    text-decoration: none;
  }
`;
