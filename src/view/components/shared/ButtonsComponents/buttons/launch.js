import { Typography } from "antd";
import '../index.css';

const { Title, Text } = Typography;

const Launch = () => {
    return (
        <div className="mainSection">
        <div className="textSection">
        <Title className="title">
        Launch
        </Title>
        <Text className="text">
        Connect your go-to-market and software teams with shared release calendars, so launch day goes off without a hitch.
        </Text>
        </div>
        <div className="imgSection">
         <img src="https://wac-cdn.atlassian.com/misc-assets/webp-images/004%20Launch-3779179643.webp" alt="lauchImage"/>
        </div>
      </div>
    )
}
export default Launch;