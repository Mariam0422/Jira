import { useState, useContext } from 'react';
import { AuthContext } from '../../../../context/AuthContext';
import { Input, Avatar, Button, Divider } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import CreateIssueModal from '../../shared/CreateIssueModal';
import { getFirstLetters } from '../../../../core/helpers/getFirstLetters';
import './index.css';
const SubHeader = () => {
    const [modalVisible, setmodalVisible] = useState(false);    
    const handleOpenModal = () => {
        setmodalVisible(true);
    }

 
 const { users } = useContext(AuthContext);


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
        {
            users.map((user) => {
                return (
                    <Avatar style={{backgroundColor: "green"}}>
                        {getFirstLetters(`${user.label}`)}
                    </Avatar>
                )
            })
        }     
        
    </Avatar.Group>
    <Divider type='vertical' />
    <Button type='primary' 
    icon={<PlusOutlined />}
    onClick={handleOpenModal}>
     Create issue
    </Button>
    <CreateIssueModal visible={modalVisible} setVisible={setmodalVisible}/>
    </div>
    )
}
export default SubHeader;