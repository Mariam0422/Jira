import { useState } from 'react';
import {Button, Menu} from 'antd';
import {DatabaseOutlined, SettingOutlined, TeamOutlined} from '@ant-design/icons';

const items = [
{
    key: 'board',
    label: 'Kabinet Board',
    icon: <DatabaseOutlined/>
},
{
    key: 'projectSetting',
    label: 'Project Setting',
    icon: <SettingOutlined />
},
{
    key: 'teams',
    label: 'Teams',
    icon: <TeamOutlined />
}

];

const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(true);
   const handleChangedCollapsed = () =>{
     setCollapsed(!collapsed);
    }
    return (
        <div className='sidebar'>
            <Button onClick={handleChangedCollapsed}>
                {collapsed ? 'open' : 'close'}
            </Button>
       <Menu
         items={items}
         mode='inline'
         inlineCollapsed={collapsed}
         />
        </div>
    )
}
export default Sidebar;