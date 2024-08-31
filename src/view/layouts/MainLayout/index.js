import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MainHeader } from "../../components/global";
import { Typography, Button } from "antd";
import {
  Collaborate,
  Track,
  Report,
  Plan,
  Launch,
} from "../../components/shared/ButtonsComponents";
import "./index.css";

const { Title, Text } = Typography;

const MainLayout = () => {
  const [activeComponent, setActiveComponent] = useState("Plan");

  const renderComponent = () => {
    switch (activeComponent) {
      case "Plan":
        return <Plan />;
      case "Track":
        return <Track />;
      case "Collaborate":
        return <Collaborate />;
      case "Launch":
        return <Launch />;
      case "Report":
        return <Report />;
      default:
        return null;
    }
  };

  return (
    <div className="main_layout_container">
      <MainHeader/>
      <main>
        <div className="firstSection">
          <div className="text_section">
            <Title
              style={{
                fontWeight: "1000",
                fontSize: "50px",
                marginBottom: "0",
              }}
              className="title"
            >
              Project management features for all teams
            </Title>
            <Text style={{ fontSize: "20px" }}>
              Built for every team, Jira is how modern organizations take work
              from to-do to done.
            </Text>
            <div>
              <Button
                style={{ fontSize: "24px", padding: "24px", marginTop: "10px" }}
                type="primary"
                shape="round"
              >
                Try Jira free
              </Button>
            </div>
          </div>
          <div  className="list_view">
            <img             
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/image-368080789.webp"
              alt="List View"
            />
          </div>
        </div>
        <div className="secondSection">
          <Title
            style={{
              fontWeight: "700",
              fontSize: "40px",
              width: "650px",
              textAlign: "center",
            }}
          >
            Where devs, marketers, and every team in between get work done
          </Title>
          <div className="buttons">
            <Button onClick={() => setActiveComponent("Plan")}>Plan</Button>
            <Button onClick={() => setActiveComponent("Track")}>Track</Button>
            <Button onClick={() => setActiveComponent("Collaborate")}>
              Collaborate
            </Button>
            <Button onClick={() => setActiveComponent("Launch")}>Launch</Button>
            <Button onClick={() => setActiveComponent("Report")}>Report</Button>
          </div>
          <div className="mainContent">{renderComponent()}</div>
        </div>
        <div className="thirdSection">
          <div className="thImageSection">
            <img
              src="https://wac-cdn.atlassian.com/misc-assets/webp-images/tab5image-29413207.webp"
              alt="thimage"
            />
          </div>
          <div className="thTextSection">
            <Text style={{ fontSize: "30px" }}>
              “Full visibility in Jira across the whole organization enables you
              to make better management judgment.”
            </Text>
            <Text strong style={{ fontSize: "20px", marginTop: "20px" }}>
              Paul Leaon
            </Text>
            <Text style={{ fontSize: "18px" }}>
              Digital Portfolio Director, Inchcape
            </Text>
          </div>
        </div>
        <footer>
          <div className="frfooterSection">
            <div>
                <div>
                    <Text strong>
                    LOGO
                    </Text>
                    </div>
              <ul>
                <li style={{fontWeight: "500"}}>                 
                    <a href="#">Company</a>                  
                </li>
                <li style={{fontWeight: "500"}}>                 
                    <a href="#">Careers</a>                  
                </li>
                <li style={{fontWeight: "500"}}>                 
                    <a href="#">Events</a>                 
                </li>
                <li style={{fontWeight: "500"}}>                
                    <a href="#">Blogs</a>              
                </li>
                <li style={{fontWeight: "500"}}>                  
                    <a href="#">Investor Relations</a>                  
                </li>
                <li style={{fontWeight: "500"}}>                  
                    <a href="#">Atlassian Foundation</a>                  
                </li>
                <li style={{fontWeight: "500"}}>                  
                    <a href="#">Contact us</a>                  
                </li>
              </ul>
            </div>

            <div>
              <div>
                <Text strong>PRODUCTS</Text>
              </div>
              <ul>
                <li>                    
                    <a href="#">Rovo</a>                    
                </li>
                <li>
                    <a href="#">Jira</a>
                </li>
                <li>
                    <a href="#">Jira Align</a>
                </li>
                <li>
                    <a href="#">Jira Service Management</a>
                </li>
                <li>
                    <a href="#">Confluence</a>
                </li>
                <li>
                    <a href="#">Trello</a>
                </li>
                <li>
                    <a href="#">Bitbucket</a>
                </li>
              </ul>
            </div>

            <div>
            <div>
                <Text strong>RESOURCES</Text>
              </div>
              <ul>
                <li>                    
                    <a href="#">Technical support</a>                    
                </li>
                <li>
                    <a href="#">Purchasing & licensing</a>
                </li>
                <li>
                    <a href="#">Atlassian Community</a>
                </li>
                <li>
                    <a href="#">Knowledge base</a>
                </li>
                <li>
                    <a href="#">Marketplace</a>
                </li>
                <li>
                    <a href="#">My account</a>
                </li>                
              </ul>
            </div>

            <div>
            <div>
                <Text strong>LEARN</Text>
              </div>
              <ul>
                <li>                    
                    <a href="#">Partners</a>                    
                </li>
                <li>
                    <a href="#">Training & certification</a>
                </li>
                <li>
                    <a href="#">Documentation</a>
                </li>
                <li>
                    <a href="#">Developer resources</a>
                </li>
                <li>
                    <a href="#">Enterprise services</a>
                </li>
                               
              </ul>
            </div>
          </div>
          <div className="scFooterSection">
            <div>
                <Text strong style={{color:"grey"}}>Copyright © 2024 Atlassian</Text>
            </div>
            <div style={{display: "flex", gap: "20px"}}>
                <p>
                    <a href="#">Privacy policy</a>
                </p>
                <p>
                    <a href="#">Terms</a>
                </p>
                <p>
                    <a href="#">Impressum</a>
                </p>
            </div>
          </div>
        </footer>
        <Outlet />
      </main>
    </div>
  );
};
export default MainLayout;
