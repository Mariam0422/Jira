import { Typography } from "antd";
import '../index.css';

const { Title, Text } = Typography;

const Collaborate = () => {
    return (
        <div className="mainSection">
        <div className="textSection">
        <Title className="title">
        Collaborate
        </Title>
        <Text className="text">
        Turn Jira into your team’s collaboration hub with real-time updates from popular 3rd party apps, commenting, Smart Links, and attachments.
        </Text>
        </div>
        <div className="imgSection">
         <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/003%20Collab-1370881390.webp" alt="Collaborateimage"/>
        </div>
      </div>
    )
}
export default Collaborate;