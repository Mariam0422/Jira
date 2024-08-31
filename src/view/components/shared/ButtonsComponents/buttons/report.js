import { Typography } from "antd";
import '../index.css'

const {Title, Text } = Typography;

const Report = () => {
    return (
        <div className="mainSection">
        <div className="textSection">
        <Title className="title">
        Report
        </Title>
        <Text className="text">
        Gather insights into work - before, during, and after the project - to confirm everything is on track, and pivot when it’s not.
        </Text>
        </div>
        <div className="imgSection">
         <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/005%20Report-161454665.webp" alt="trackimage"/>
        </div>
      </div>
    )
}
export default Report;