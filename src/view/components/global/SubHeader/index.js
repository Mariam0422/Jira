import { useState, useEffect } from 'react';
import { Input, Avatar, Button, Divider } from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import CreateIssueModal from '../../shared/CreateIssueModal';
import { getDocs, db, collection } from '../../../../services/firebase/firebase';
import { getFirstLetters } from '../../../../core/helpers/getFirstLetters';
import './index.css';
const SubHeader = () => {
    const [modalVisible, setmodalVisible] = useState(false);
    const [users, setUsers] = useState([]);
    const handleOpenModal = () => {
        setmodalVisible(true);
    }

    useEffect(() => {
        const handleGetUserData = async () => {
        
          const queryData = await getDocs(collection(db, 'registerUsers'));
          
          const result = queryData.docs.map((doc) => {
            const { firstName, lastName } = doc.data();
            return {label: `${firstName} ${lastName}`, value: doc.id}
          })
              setUsers(result);
        }
        handleGetUserData();
      }, [])

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
    <CreateIssueModal users={users} visible={modalVisible} setVisible={setmodalVisible}/>
    </div>
    )
}
export default SubHeader;