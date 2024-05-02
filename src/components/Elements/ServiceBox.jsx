import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import DatabaseDeploymentIcon from "../../assets/svg/Services/DatabaseIcon";
import IntegrationIcon from "../../assets/svg/Services/IntegrationIcon";
import DeploymentIcon from "../../assets/svg/Services/DeploymentIcon";

// Import additional icons related to AI, blockchain, and database services
import AIIcon from "../../assets/svg/Services/AIIcon";
import AIIcon2 from "../../assets/svg/Services/AIIcon2";
import AIIcon3 from "../../assets/svg/Services/AIIcon3";
import AIIcon4 from "../../assets/svg/Services/AIIcon4";
import AIIcon5 from "../../assets/svg/Services/AIIcon5";

import Blockchain1 from "../../assets/svg/Services/blockchain1";
import Blockchain2 from "../../assets/svg/Services/blockchain2";
import Blockchain3 from "../../assets/svg/Services/blockchain3";
import Blockchain4 from "../../assets/svg/Services/blockchain4";
import Blockchain5 from "../../assets/svg/Services/blockchain5";

import Mysql from "../../assets/svg/Services/mysql";
import Mongodb from "../../assets/svg/Services/Mongodb";
import Sql from "../../assets/svg/Services/Sql";
import PostgreSQL from "../../assets/svg/Services/Postgrsql";
import Oracledb from "../../assets/svg/Services/Oracledb";
import { PiFileSqlFill } from "react-icons/pi";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  // Update switch case to include new icons
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
      break;
    case "Integration":
      getIcon = <IntegrationIcon />;
      break;
    case "Deployment":
      getIcon = <DeploymentIcon />;
      break;
    // Add cases for new icons
    case "AI":
      getIcon = <AIIcon />;
      break;
      case "AI2":
      getIcon = <AIIcon2 />;
      break;
      case "AI3":
      getIcon = <AIIcon3 />;
      break;
      case "AI4":
      getIcon = <AIIcon4 />;
      break;
      case "AI5":
      getIcon = <AIIcon5 />;
      break;
    case "blockchain1":
      getIcon = <Blockchain1/>;
      break;
      case "blockchain2":
      getIcon = <Blockchain2 />;
      break;

      case "blockchain3":
        getIcon = <Blockchain3 />;
        break;

        case "blockchain4":
          getIcon = <Blockchain4 />;
          break;

          case "blockchain5":
            getIcon = <Blockchain5 />;
            break;

            case "mysql":
            getIcon = <Mysql />;
            break;

            case "mongodb":
            getIcon = <Mongodb />;
            break;

            case "oracledb":
            getIcon = <Oracledb />;
            break;case "postgresql":
            getIcon = <PostgreSQL />;
            break;case "sql":
            getIcon = <Sql/>;
            break;
    
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 120%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;

  max-width: 300px;
  margin: 0 auto;
  margin-top:5%;

`;
