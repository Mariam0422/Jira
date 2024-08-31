import { Typography } from "antd";
import '../index.css';

const {Title, Text } = Typography;

const Track = () => {
    return (
        <div className="mainSection">
        <div className="textSection">
        <Title className="title">
        Track
        </Title>
        <Text className="text">
        No matter how your team gets work done - Scrum, Kanban, or something in-between - Jira gives you visibility from start to finish.
        </Text>
        </div>
        <div className="imgSection">
         <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/002%20Track-61709455.webp" alt="trackimage"/>
        </div>
      </div>
    )
}
export default Track;