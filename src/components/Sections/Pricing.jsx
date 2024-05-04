import React, { useRef, useState } from "react";
import styled from "styled-components";
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  const containerRef = useRef(null);
  const [hoveredLeft, setHoveredLeft] = useState(false);
  const [hoveredRight, setHoveredRight] = useState(false);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = container.clientWidth * 0.8; // Adjust the scroll amount as needed
    if (direction === "left") {
      container.scrollTo({
        left: container.scrollLeft - scrollAmount,
        behavior: 'smooth' // Smooth scrolling animation to the left
      });
    } else {
      container.scrollTo({
        left: container.scrollLeft + scrollAmount,
        behavior: 'smooth' // Smooth scrolling animation to the right
      });
    }
  };

  return (
    <Wrapper id="pricing">
      <CardContent>
        <HeaderInfo>
          <h1 className="font40 extraBold">Check Our Pricing</h1>
          <p className="font13">Here are our pricing for Separate services</p>
        </HeaderInfo>

        <CardsWrapper ref={containerRef}>
          {pricingTables.map((table, index) => (
            <TableBox key={index}>
              <PricingTable {...table} />
            </TableBox>
          ))}
        </CardsWrapper>
      </CardContent>
      <ScrollButtonLeft 
        onClick={() => handleScroll("left")}
        onMouseEnter={() => setHoveredLeft(true)}
        onMouseLeave={() => setHoveredLeft(false)}
      >
        ⮜
      </ScrollButtonLeft>
      <ScrollButtonRight 
        onClick={() => handleScroll("right")}
        onMouseEnter={() => setHoveredRight(true)}
        onMouseLeave={() => setHoveredRight(false)}
      >
        ⮞
        
      </ScrollButtonRight>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
  position: relative;
`;

const CardContent = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  overflow: hidden; /* Hide scrollbars */
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

const CardsWrapper = styled.div`
  display: flex;
  overflow-x: auto;
  text-align: left; // Centers the text

  scroll-snap-type: x mandatory;
  padding: 0 10px;
  gap: 20px; /* Adjust this value to set the space between cards */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  &::-webkit-scrollbar {
    display: none; /* Hide scrollbar for WebKit browsers */
  }
`;

const TableBox = styled.div`
  flex: 0 0 auto;
  justify-content:left;
  text-align: left; // Centers the text

  scroll-snap-align: start;
  padding: 0 10px;
  width: 400px; 
`;


const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: lightgrey;
  border: none;
  font-size: 24px;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  transition: all 0.3s ease;

  &:hover {
    color: #007bff;
    background-color: #fff;
  }
`;

const ScrollButtonLeft = styled(ScrollButton)`
  left: 10px;

  @media (max-width: 768px) {
    display: block; /* Always display on small screens */
  }
`;

const ScrollButtonRight = styled(ScrollButton)`
  right: 10px;

  @media (max-width: 768px) {
    display: block; /* Always display on small screens */
  }
`;






const pricingTables = [
  {
    icon: "monitor",
    title: "UI/UX Designs",
    price: "Starting with 300$",
    text: "You can choose from following Services and more",
    offers: [
      { name: "Figma Designs" },
      { name: "Canva Designs" },
      { name: "Wireframes" },
      { name: "Adobe XD" },
      { name: "Adobe Photoshop" },


    ],
    action: () => alert("contacts"),
  },
  {
    icon: "browser",
    price: "Starting with 500$",
    title: "Web Develop",
    text: "You can choose from following Services and more",
    offers: [
      { name: "React " },
      { name: "Node" },
      { name: "Express" },
      { name: "MongoDB" },
      { name: "Wordpress" },
    ],
    action: () => alert("clicked"),
  },
  {
    icon: "Database",
    price: "Starting with 100$",
    title: "Data Bases",
    text: "You can choose from following Services and more",
    offers: [
      { name: "SQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "OracleDB" },
      { name: "Postgresql" },

    ],
    action: () => alert("clicked"),
  },
  {
    icon: "Integration",
    price: "Starting with 200$",
    title: "Integration",
    text: "You can choose from following Services and more",
    offers: [
      { name: "Frontend with backend" },
      { name: "Backend with Database" },
      { name: "UI integration" },
      { name: "Api integration" },
      { name: "Third party Api's" },


    ],
    action: () => alert("clicked"),
  },
  {
    icon: "Deployment",
    price: "Starting with 200$",
    title: "Deployment",
    text: "You can choose from following Services and more",
    offers: [
      { name: "AWS" },
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "Jenkins" },
      { name: "Github Action" },

      ],
    action: () => alert("clicked"),
  },
  {
    icon: "AI",
    price: "Starting with 400$",
    title: "AI Services",
    text: "You can choose from following Services and more",
    offers: [
      { name: "Machine Learning" },
      { name: "NLP" },
      { name: "Computer Vision" },
      { name: "Data Analytics " },
      { name: "Deep learning" },

      ],
    action: () => alert("clicked"),
  },
  {
    icon: "blockchain1",
    price: "Starting with 600$",
    title: "Blockchain ",
    text: "You can choose from following Services and more",
    offers: [
      { name: "Smart Contracts" },
      { name: "DApps" },
      { name: "DEX" },
      { name: "Contract Auditing" },
      { name: "Token Creation" },

    ],
    action: () => alert("clicked"),
  },
];
