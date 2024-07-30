import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";

import prof1 from "../../assets/img/prof.jpeg";
import prof2 from "../../assets/img/profile.jpg";
import prof3 from "../../assets/img/prof3.jpg"

import { Link } from "react-scroll";


export default function Services() {
  return (
    <Wrapper id="services">
      <div  className="lightBg" style={{ padding: "50px 0" }}>
        {/* <div className="container">
          <ClientSlider />
        </div> */}


      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Our Awesome Services</h1>
            <p className="font13">
              Elevate Your Online Experience: Design, Develop, Integrate, Deploy – Transforming Ideas into Digital Excellence.
            </p>
            <br />
          </HeaderInfo>
          <br />
          <br />
          <Heading>
          <StyledH1 style={{textAlign: "center"}}>Web Development</StyledH1>
          </Heading>
          <ServiceBoxRow className="flex">
        
            <ServiceBoxWrapper>
              
              <ServiceBox
                icon="monitor"
                title="UI/UX"
                subtitle=" We craft meticulous Figma designs, ensuring an intuitive and engaging experience for your users."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Web Dev"
                subtitle=" For Web App development, we leverage the power of the MERN stack, while for websites, creating dynamic and responsive platforms tailored to your needs."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="Database"
                title="Databases"
                subtitle="From SQL and MYSQL to NOSQL, MongoDB, and OracleDB, we offer robust solutions to manage and organize your information efficiently."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="Integration"
                title="Integration"
                subtitle="We specialize in connecting frontend and backend components, with expertise in integrating databases"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="Deployment"
                title="Deployment"
                subtitle="We handle the technicalities, ensuring smooth and secure deployments that make your online presence accessible to your audience."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>

          <Heading> <StyledH1 style={{textAlign: "center"}}>AI Services</StyledH1></Heading>
<ServiceBoxRow className="flex">
    <ServiceBoxWrapper>
        <ServiceBox
            icon="AI"
            title="Machine Learning"
            subtitle="Harness the power of algorithms to enable systems to learn and improve from experience automatically."
        />
    </ServiceBoxWrapper>
    <ServiceBoxWrapper>
        <ServiceBox
            icon="AI2"
            title="Deep Learning"
            subtitle="Utilize neural networks to mimic the way the human brain works, enabling computers to solve complex problems."
        />
    </ServiceBoxWrapper>
    <ServiceBoxWrapper>
        <ServiceBox
            icon="AI3"
            title="Data Analytics"
            subtitle="Extract meaningful insights from vast amounts of data, empowering informed decision-making."
        />
    </ServiceBoxWrapper>
    <ServiceBoxWrapper>
        <ServiceBox
            icon="AI4"
            title="Computer Vision"
            subtitle="Enable machines to interpret and understand the visual world, revolutionizing various industries."
        />
    </ServiceBoxWrapper>
    <ServiceBoxWrapper>
        <ServiceBox
            icon="AI5"
            title="NL processing"
            subtitle="Enable computers to understand, interpret, and generate human language, facilitating communication between humans and machines."
        />
    </ServiceBoxWrapper>
</ServiceBoxRow>

<Heading><StyledH1 style={{fontWeight:"bold", textAlign: "center"}}>Blockchain Services</StyledH1></Heading>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain1"
                title="Smart Contract Creation"
                subtitle="Deploy self-executing contracts with predefined rules and conditions, enabling trustless transactions."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain2"
                title="Decentralized App (DApp)"
                subtitle="Build applications that run on a decentralized network, ensuring transparency, security, and immutability."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain3"
                title="Decentralized Exchange (DEX)"
                subtitle="Facilitate peer-to-peer cryptocurrency trading without the need for intermediaries, ensuring privacy and security."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain4"
                title="Smart Contract Auditing"
                subtitle="Ensure the security and reliability of smart contracts by conducting thorough audits and identifying vulnerabilities."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="blockchain5"
                title="Custom Token Creation"
                subtitle="Create custom digital assets and tokens for various use cases, including fundraising, rewards programs, and decentralized governance."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>

          <Heading> <StyledH1 style={{textAlign: "center"}}>Database Services</StyledH1></Heading>
<ServiceBoxRow className="flex">
  <ServiceBoxWrapper>
    <ServiceBox
      icon="mysql"
      title="MySQL"
      subtitle="A widely-used relational database management system (RDBMS) that is known for its reliability, scalability, and ease of use."
      description="MySQL is a popular choice for web development, powering many dynamic websites and web applications."
    />
  </ServiceBoxWrapper>
  <ServiceBoxWrapper>
    <ServiceBox
      icon="sql"
      title="SQL"
      subtitle="SQL is a domain-specific language used in programming and designed for managing data held in a RDBMS or for stream processing in a RDSMS"
      description="SQL allows users to perform various tasks, including data manipulation (insert, update, delete), data definition (create, alter, drop), and data control (grant, revoke). It is essential for interacting with relational databases effectively."
    />
  </ServiceBoxWrapper>
  <ServiceBoxWrapper>
    <ServiceBox
      icon="oracledb"
      title="OracleDB"
      subtitle="Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation."
      description="OracleDB is known for its robustness, security, and scalability, making it suitable for large enterprises and mission-critical applications. It supports various data models, including relational, object-relational, and XML."
    />
  </ServiceBoxWrapper>
  <ServiceBoxWrapper>
    <ServiceBox
      icon="postgresql"
      title="PostgreSQL"
      subtitle="PostgreSQL is an open-source object-relational database system. It has a strong reputation for reliability, data integrity, and advanced features."
      description="PostgreSQL offers advanced features such as full ACID compliance, multi-version concurrency control (MVCC), and support for various programming languages and extensions. It is a popular choice for both small-scale and large-scale applications."
    />
  </ServiceBoxWrapper>
  <ServiceBoxWrapper>
    <ServiceBox
      icon="mongodb"
      title="MongoDB"
      subtitle="MongoDB is a NoSQL document-oriented database that provides high performance, scalability, and flexibility. "
      description="MongoDB is well-suited for applications with evolving data models or large amounts of unstructured data. It supports features such as document indexing, replication, and sharding, making it suitable for a wide range of use cases, including content management, IoT, and real-time analytics."
    />
  </ServiceBoxWrapper>
</ServiceBoxRow>


          <div className="lightBg">
<div className="container">
  <Advertising className="flexSpaceCenter">
    <AddLeft>
      {/* <h4 className="font15 semiBold">A few words about company from the Founder and CEO, Abdullah Malik</h4> */}
      <h2 className="font40 extraBold">A Study of Creativity</h2>
      <p className="font12">
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
          <img className="radius8" src={"https://i.ibb.co/DKMwW25/ABMATRIX-LOGO3.png"} alt="office" style={{height:'250px',width:'250px', zIndex: 9}} />

          </AddImgWrapp1>
          {/* <AddImgWrapp2>
            <img src={prof3} alt="office" />
          </AddImgWrapp2>
        </div>
        <div className="flexNullCenter">
          <AddImgWrapp3>
            <img src={prof1} alt="office" />
          </AddImgWrapp3>
          <AddImgWrapp4>
            <img src={prof2} alt="office" />
          </AddImgWrapp4> */}
        </div>
      </AddRightInner>
    </AddRight>
  </Advertising>
</div>
</div>
        </div>
      </div>
    </Wrapper>
  );
}



const Wrapper = styled.section`
  width: 100%;
`;


const ServiceBoxRow = styled.div`


  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const Heading = styled.div`
text-align: center; 

`;

const StyledH1 = styled.h1`
  font-weight: bold;
  text-align: center; // Centers the text
  font-size: 32px; // Default font size for larger screens
  color: black;
  background: lightgrey;
  border-radius: 20px; // Adjusted for more aesthetic appearance
  display: inline-block; // Makes the background only as wide as the content
  padding: 10px 20px;

  @media (max-width: 768px) {
    font-size: 28px; // Smaller font size for medium screens
  }

  @media (max-width: 480px) {
    font-size: 24px; // Even smaller font size for small screens
  }
`;

const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    margin-right: 0;
    display:flex;
    justify-content: center;

    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 100px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
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
      font-size: 2rem;  // Smaller font size for headings on smaller screens
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

  const AddRightInner = styled.div`
    width: 100%;
  `;
  const AddImgWrapp1 = styled.div`
    width: 100%;
    margin: 0 6%;
    @media (max-width: 860px) {
      width: 100%;

      margin: 10px 0;
      margin-left:40px;  // Adjust margins to align images properly
    }
    img {
      width: 30%;
      height: auto;
      border-radius: 1rem;
    }
  `;

  const AddImgWrapp2 = styled.div`
    width: 80%;
    margin: 0 5%;
    @media (max-width: 860px) {
      width: 200%;  // Larger images for visibility
      margin: 10px auto;  // Center images
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }
  `;

  const AddImgWrapp3 = styled.div`
    width: 20%;
    margin-left: 40%;
    @media (max-width: 860px) {
      display: none;

      width: 80%;  // Larger images for visibility
      margin: 10px auto;  // Center images
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }
  `;

  const AddImgWrapp4 = styled.div`
    width: 30%;
    margin: 0 auto;
    @media (max-width: 860px) {
      display:none;

      width: 40%;  // Adjust width for smaller screens
      margin: 10px auto;  // Center images
    }
    img {
      width: 100%;
      height: auto;
      border-radius: 1rem;
    }
  `;
  