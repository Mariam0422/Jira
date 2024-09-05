import { useState } from "react";
import { Typography, Button } from "antd";
import { Collaborate, Track, Report, Plan, Launch } from "../../components/shared/ButtonsComponents";
import "./index.css";

   
 const HomeLayout = () => {
    const [activeComponent, setActiveComponent] = useState("Plan");
    const { Title, Text } = Typography;
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
    <div>    
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
                    <span>Company</span>                  
                </li>
                <li style={{fontWeight: "500"}}>                 
                    <span>Careers</span>                  
                </li>
                <li style={{fontWeight: "500"}}>                 
                    <span>Events</span>             
                </li>
                <li style={{fontWeight: "500"}}>                
                    <span>Blogs</span>              
                </li>
                <li style={{fontWeight: "500"}}>                  
                   <span>Investor Relations</span>                  
                </li>
                <li style={{fontWeight: "500"}}>                  
                    <span>Atlassian Foundation</span>                
                </li>
                <li style={{fontWeight: "500"}}>                  
                    <span>Contact us</span>                  
                </li>
              </ul>
            </div>

            <div>
              <div>
                <Text strong>PRODUCTS</Text>
              </div>
              <ul>
                <li>                    
                    <span>Rovo</span>                    
                </li>
                <li>
                    <span>Jira</span>
                </li>
                <li>
                    <span>Jira Align</span>
                </li>
                <li>
                    <span>Jira Service Management</span>
                </li>
                <li>
                    <span>Confluence</span>
                </li>
                <li>
                    <span>Trello</span>
                </li>
                <li>
                    <span>Bitbucket</span>
                </li>
              </ul>
            </div>

            <div>
            <div>
                <Text strong>RESOURCES</Text>
              </div>
              <ul>
                <li>                    
                    <span>Technical support</span>                    
                </li>
                <li>
                    <span>Purchasing & licensing</span>
                </li>
                <li>
                    <span>Atlassian Community</span>
                </li>
                <li>
                    <span>Knowledge base</span>
                </li>
                <li>
                    <span>Marketplace</span>
                </li>
                <li>
                    <span>My account</span>
                </li>                
              </ul>
            </div>

            <div>
            <div>
                <Text strong>LEARN</Text>
              </div>
              <ul>
                <li>                    
                    <span>Partners</span>                    
                </li>
                <li>
                    <span>Training & certification</span>
                </li>
                <li>
                    <span>Documentation</span>
                </li>
                <li>
                    <span>Developer resources</span>
                </li>
                <li>
                    <span>Enterprise services</span>
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
                    <span>Privacy policy</span>
                </p>
                <p>
                    <span>Terms</span>
                </p>
                <p>
                    <span>Impressum</span>
                </p>
            </div>
          </div>
        </footer>
      
    </div>
    )
 }
 export default HomeLayout;