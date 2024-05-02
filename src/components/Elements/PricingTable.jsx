import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import CheckMark from "../../assets/svg/Checkmark";
import DatabaseDeploymentIcon from "../../assets/svg/Services/DatabaseIcon";
import DeploymentIcon from "../../assets/svg/Services/DeploymentIcon";
import IntegrationIcon from "../../assets/svg/Services/IntegrationIcon";

import AIIcon from "../../assets/svg/Services/AIIcon1";
import Blockchain1 from "../../assets/svg/Services/blockchain";



export default function PricingTable({ icon, price, title, text,  offers, action }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
      case "Database":
      getIcon = <DatabaseDeploymentIcon />;
      break;case "Deployment":
      getIcon = <DeploymentIcon />;
      break;case "Integration":
      getIcon = <IntegrationIcon />;
      break;

      case "AI":
      getIcon = <AIIcon />;
      break;

      case "blockchain1":
      getIcon = <Blockchain1/>;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="whiteBg radius8 shadow">
      
       
       
     
      <div style={{ margin: "30px 0" }}>
        <h4 className="font30 extraBold">{title} {getIcon}</h4>
        <br />
        <p className="font30 extraBold">{price}</p>
        <p className="font13">{text}</p>
      </div>
      <div>
        {offers
          ? offers.map((item, index) => (
              <div className="flexNullCenter" style={{ margin: "15px 0" }} key={index}>
                <div style={{ position: "relative", top: "-1px", marginRight: "15px" }}>
                  {item.cheked ? (
                    <div style={{ minWidth: "20px" }}>
                      <CheckMark />
                    </div>
                  ) : (
                    <div style={{ minWidth: "20px" }}></div>
                  )}
                </div>
                <p className="font20 extraBold">{item.name}</p>
              </div>
            ))
          : null}
      </div>
     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  text-align: left;
  padding: 20px 30px;
  margin-top: 30px;
`;
