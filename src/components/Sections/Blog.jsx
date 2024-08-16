import React from "react";
import styled from "styled-components";
import db from "./DB.jpg";
import uiux from "./uiux.jpg";
import web from "./web.jpg";
import deployment from "./Deployment.png";
import integration from "./integration.webp";

import TopNavbar from "../Nav/TopNavbar";


export default function Blog() {
  return (
    <Wrapper id="blog">
      <TopNavbar/>
       <div className="lightBg">
          <div className="container">
          
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">UI/UX design + Web Development + Database </h2>
                <h1>Starting from 1400$</h1>
                <p>You can select from following services and more</p>
                <br />
                <ListsContainer className="flexNullCenter">
      <List>
        <ListItem>Figma Designs</ListItem>
        <ListItem>Canva Designs</ListItem>
        <ListItem>Adobe Designs</ListItem>
      </List>
      <List>
        <ListItem>React</ListItem>
        <ListItem>Node</ListItem>
        <ListItem>Express</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>Wordpress</ListItem>
      </List>
      <List>
        <ListItem>SQL</ListItem>
        <ListItem>MySQL</ListItem>
        <ListItem>MongoDB</ListItem>
        <ListItem>OracleDB</ListItem>
      </List>
    </ListsContainer>

              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                  <AddImgWrapp2>
                      <img src={uiux} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={web} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={db} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
<br />
        
      <div className="lightBg">
          <div className="container">
          
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">Integration + Deployment </h2>
                <h1>Starting from 450$</h1>
                <p>You can select from following services and more</p>
                <br />
                <ListsContainer className="flexNullCenter">
      
      <List>
        <ListItem>Frontend and backend</ListItem>
        <ListItem>Backend with Database</ListItem>
        
      </List>
      <List>
        <ListItem>AWS</ListItem>
        <ListItem>Docker</ListItem>
        <ListItem>Hosting Domain</ListItem>
       
      </List>
    </ListsContainer>

              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    
                    <AddImgWrapp2>
                      <img src={deployment} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={integration} alt="office" />
                    </AddImgWrapp2>
                    
                  </div>
                 
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
  margin-bottom: 200px;
`;

const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style-type: disc;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 18px;
`;

const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 50px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 20px 0;
    margin: 40px 0;
  }
`;

const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    p {
      margin: 0 auto;
      max-width: 100%; /* Ensure paragraph does not exceed the container width */
    }
  }
`;

const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 100%;
    position: relative;
    top: 0;
  }
`;

const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 860px) {
    width: 100%;
    margin: 10px 0; /* Adjust margin for mobile devices */
  }
`;

// Apply similar responsive adjustments to other components as needed


const AddRightInner = styled.div`
  width: 100%;
`;




