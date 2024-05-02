import React from "react";
import styled from "styled-components";


export default function Blog() {
  return (
    <Wrapper id="blog">
       <div className="lightBg">
          <div className="container">
          
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold">UI/UX design + Web Development + Database </h2>
                <h1>Starting from 800$</h1>
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
                      <img src={"https://i.ibb.co/dBM4sWG/ui-ux.jpg"} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={"https://i.ibb.co/bKvqbxf/web-development.jpg"} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={"https://i.ibb.co/QD4srrB/DB.jpg "} alt="office" />
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
                <h1>Starting from 300$</h1>
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
                      <img src={"https://i.ibb.co/BN3KSNH/Deployment.png"} alt="office" />
                    </AddImgWrapp2>
                    <AddImgWrapp2>
                      <img src={"https://i.ibb.co/Z1sK4wN/integration.webp"} alt="office" />
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
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;


const ListsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style-type: disc; /* Use 'disc' for filled circles or 'circle' for empty circles */
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 8px; /* Adjust the spacing between list items */
`;


const TablesWrapper = styled.div`

  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;

  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;

const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
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
    width: 80%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 0 auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
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
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;



