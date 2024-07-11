import {Layout, Button, Typography, Space} from 'antd';
import UserProfile from '../../shared/UserProfile';
import './index.css'
export const Header = () => {
    return (
        <div>
        <Layout.Header className='main_header'>
            <Typography.Title level={3}>
                Jira
            </Typography.Title>
            <Space>
                <Button>
                    Login
                </Button>
                <Button>
                    Register
                </Button>
                <UserProfile/>
            </Space>         
        </Layout.Header>
        </div>
    )
}