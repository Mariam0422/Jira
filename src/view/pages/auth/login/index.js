import React, {useState} from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import { Typography, Input, Button,  Form, notification, Divider, Flex } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import LoginCoverImg from '../../../../core/images/loginCover.jpg';
import { Link, useNavigate } from "react-router-dom";
import { ROUTES_CONSTANTS } from "../../../../routes";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  
  const handleLogin = async (values) => {
    setLoading(true);
    try{
      const { email, password } = values
      await signInWithEmailAndPassword(auth, email, password);
      navigate(ROUTES_CONSTANTS.CABINET);
    }catch(error) {
      console.log(error);
      notification.error({
        message: "Error",
        description: "Invalid login credentials",
      })
    } finally{
      setLoading(false)
    }
  }
  return (
    <AuthWrapper coverImg={LoginCoverImg}>
    <Typography.Title level={3}>Sign In</Typography.Title>
    <Form layout="vertical" form={form} onFinish={handleLogin}>
      <Form.Item name="email" label="Email"
      rules={[
        {
          required: true,
          message: 'Please input your email!'
        }
      ]}
      >                
        <Input
          type="text"
          placeholder="Email"
        />
      </Form.Item>
      
      <Form.Item name="password" label="Password"
        rules={[
          {
            required: true,
            message: 'Password required!'
          }
        ]}
      >                
        <Input.Password                 
          placeholder="Password"
        />
      </Form.Item>
      <Divider/>
      <Flex justify="space-between" align="flex-end">
        <Typography.Text underline>
        <Link to={ROUTES_CONSTANTS.REGISTER}> 
        Create Account
        </Link>
        </Typography.Text>
    
      <Button type="primary" 
      loading={loading}
      htmlType="submit"
      >
      Login
      </Button>
      </Flex>
     
    </Form>        
    </AuthWrapper>
  )
}

export default Login;
