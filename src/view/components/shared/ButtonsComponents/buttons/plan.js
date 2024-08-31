import { Typography } from "antd";
import '../index.css';

const { Title, Text } = Typography;

const Plan = () => {
    return (
    <div className="mainSection">
      <div className="textSection">
      <Title className="title">
        Plan
      </Title>
      <Text className="text">
      Align teams, resources, and deliverables to ensure the project hits deadlines and maps to company goals from the start.
      </Text>
      </div>
      <div className="imgSection">
       <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/001%20Plan-1878220112.webp" alt="planimage"/>
      </div>
    </div>
    )
}
export default Plan;