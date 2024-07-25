import { Input, Avatar, Button, Divider } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import './index.css';
const SubHeader = () => {
    return (
        <div className="sub_header">
    <Input.Search 
    className='search_input'
    placeholder='Search'/>
    <Divider type='vertical' />
    <Avatar.Group max={{
        count: 4,
        styles: {color: '#156a00', backgroundColor: '#fde3cf', cursor: 'pointer'},
        popover: {
            trigger: "hover"
        }
    }}>
        <Avatar style={{backgroundColor: 'green'}}>DS</Avatar>
        <Avatar style={{backgroundColor: 'indigo'}}>KK</Avatar>
        <Avatar style={{backgroundColor: 'red'}}>MA</Avatar>
        <Avatar style={{backgroundColor: 'blue'}}>HM</Avatar>
        <Avatar style={{backgroundColor: 'pink'}}>GA</Avatar>
    </Avatar.Group>
    <Divider type='vertical' />
    <Button type='primary' icon={<PlusOutlined />}>
     Create issue
    </Button>
        </div>
    )
}
export default SubHeader;