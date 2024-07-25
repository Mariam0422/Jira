import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import { Typography, Input, Button,  Form, notification, Divider, Flex } from "antd";
import AuthWrapper from "../../../components/shared/AuthWrapper";
import LoginCoverImg from '../../../../core/images/loginCover.jpg';
import { Link } from "react-router-dom";
 class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loading: false       
      };   
    }

  handleFormChange = (value) => {
    this.setState(value)
    }

     handleLogin = async() => {
      const { email, password } = this.state;
      try {
      const respons = await signInWithEmailAndPassword(auth, email, password);
      console.log(respons);
        notification.success({
            message: "Login successful",            
        })
      } catch (error) {
        notification.error({
            message: "Incorrect login details"
        })
      }
      finally{
        this.setState({
          loading: false
        })
      }
    }
    render() {
        return (
         <AuthWrapper coverImg={LoginCoverImg}>
            <Typography.Title level={3}>Sign In</Typography.Title>
            <Form onValuesChange={this.handleFormChange} layout="vertical">
              <Form.Item name="email" label="Email">                
                <Input
                  type="text"
                  placeholder="Email"
                />
              </Form.Item>
              
              <Form.Item name="password" label="Password">                
                <Input.Password                 
                  placeholder="Password"
                />
              </Form.Item>
              <Divider/>
              <Flex justify="space-between" align="flex-end">
                <Typography.Text underline>
                <Link to="/register"> 
                Create Account
                </Link>
                </Typography.Text>
            
              <Button type="primary" 
              loading={this.state.loading}
              onClick={this.handleLogin}>
              Login
              </Button>
              </Flex>
             
            </Form>        
            </AuthWrapper>
        );
      }
}
export default Login