import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import { Typography, Input, Button,  Form, notification, Divider } from "antd";
import './index.css'

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
          <div className="auth_container">
            <Typography.Title level={3}>Login</Typography.Title>
            <Form onValuesChange={this.handleFormChange} >
              <Form.Item name="email">                
                <Input
                  type="text"
                  placeholder="Email"
                />
              </Form.Item>
              
              <Form.Item name="password">                
                <Input
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Divider/>
              <Button type="primary" 
              loading={this.state.loading}
              onClick={this.handleLogin}
              >
                Login</Button>
            </Form>        
          </div>
        );
      }
}
export default Login