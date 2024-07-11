import { Avatar, Dropdown, Typography, Flex, Divider } from "antd";
import {UserOutlined} from '@ant-design/icons';


const {Text} = Typography;
// const User = {
//     firstName: 'Davit',
//     lastName: 'Sargsyan',
//     headLine: 'Front End Developer',
//     email: 'sargsyan@mail.ru',
//     logout: '',
// }
const items = [
    {
        key: 'profile',
        label: (
            <Flex vertical justify="center" align="center">
            <Avatar size={64} icon={<UserOutlined/>}/>
            <Text>
                Davit Sargsyan
            </Text>
            <Text underline>
            sargsyan@mail.ru
            </Text>        
            <Divider/>
            </Flex>
         
        ) 
    },
    {
        key: 'logout',
        label: 'Logout'
    }
]
const UserProfile = () => {
    return(
       <Dropdown 
       menu={{
        items
       }}>
        <Avatar size="large">
            MH
         </Avatar>
       </Dropdown>         
       
    )
}
export default UserProfile;