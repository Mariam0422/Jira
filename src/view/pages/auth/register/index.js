import React, { useState } from "react";
import { Typography, Input, Button, Divider, Form, notification, Flex } from "antd";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, setDoc, doc, db } from "../../../../services/firebase/firebase";
import AuthWrapper from '../../../components/shared/AuthWrapper';
import RegisterCoverImg from '../../../../core/images/registerCover.png';
import { Link, useNavigate } from "react-router-dom";

const { Title,Text } = Typography;

const Register = ()  => {
  const [ form ] = Form.useForm();
  const navigate = useNavigate();
  const [ loading, setLoading ] = useState(false);

  const handleRegister = async (values) => {
    setLoading(true);
    try{
     const { email, password, ...restData } = values;
     const response = await createUserWithEmailAndPassword(auth, email, password);
     const uid = response.user.uid;
     const createDoc = doc(db, 'registerUsers', uid);
     await setDoc(createDoc, {
      email, ...restData
     });
     navigate("/login");
    }catch{
      notification.error({
        message: "Wrong Registration",
        description: "Ooooooooops"
       })
    }finally{
    setLoading(false);
    }
  }
  return(
      <AuthWrapper coverImg={RegisterCoverImg}>
        <Title level={2}>
          Register
          </Title>
        <Form form={form} layout="vertical" onFinish={handleRegister}>
          <Form.Item 
          name="firstName"
          label="First Name" 
          rules={[
            {
              required: true,
              message: 'First Name is required!'
            }
          ]}
          >
            <Input type="text" placeholder="Firts Name" />
          </Form.Item>
          <Form.Item           
          name="lastName"
          label="Last Name" 
          rules={[
            {
              required: true,
              message: 'Last Name is required!'
            }
          ]}>
            <Input type="text" placeholder="Last Name" />
          </Form.Item>
          <Form.Item        
          name="headLine"
          label="HeadLine" 
          rules={[
            {
              required: true,
              message: 'HeadLine is required!'
            }
          ]}
          >
            <Input type="text" placeholder="HeadLine" />
          </Form.Item>
          <Form.Item          
            name="email"
            label="Email" 
            rules={[
            {
              required: true,
              message: 'Email is required!'
            }
          ]}>
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item              
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: 'Password is required!'
              }
            ]}>
          <Input.Password  placeholder="Password" />
          </Form.Item>
          <Divider />
         <Flex justify="space-between" align="flex-end">
          <Text underline>
           <Link to="/login">
            Sign In
           </Link>
          </Text>
          
         <Button type="primary"
         htmlType="submit"       
         loading={loading}>
          Register
          </Button>
         </Flex>
       
        </Form>
        </AuthWrapper>
  )
}
export default Register; 
