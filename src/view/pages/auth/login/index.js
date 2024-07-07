import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../services/firebase/firebase";
import { Typography, Input, Button,  Form, notification } from "antd";
import "./index.css"
export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
       
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
    const {name, value} = event.target
      this.setState({ [name]: value });
    }

    async handleLogin() {
      const { email, password } = this.state;
      try {
        await signInWithEmailAndPassword(auth, email, password);
        notification.success({
            message: "Login successful",            
        })
      } catch (error) {
        notification.error({
            message: "Incorrect login details"
        })
      }
    }
    render() {
        return (
          <div className="auth_login_container">
            <Typography.Title level={2}>Login</Typography.Title>
            <Form layout="vertical" onFinish={this.handleLogin} >
              <Form.Item label="Email">                
                <Input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </Form.Item>
              
              <Form.Item label="Password">                
                <Input
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">Login</Button>
            </Form>        
          </div>
        );
      }
}
