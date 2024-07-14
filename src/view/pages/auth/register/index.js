import React from "react";
import { Typography, Input, Button, Divider, Form, notification } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, setDoc, doc, db } from "../../../../services/firebase/firebase";
import "./index.css";

const { Title } = Typography;
export default class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      firstName: "",
      lastName: "",
      headLine: "",
      email: "",
      password: ""
    };

    this.handleRegister = this.handleRegister.bind(this);
  }
  handleChangeInput = (e) => {
    this.setState(e)
  };
 async handleRegister() {
    const { email, password, firstName, lastName, headLine } = this.state;
    this.setState({
        loading: true
    });
      try{
     const response = await createUserWithEmailAndPassword(auth, email, password); 
     const uid = response.user.uid;
     const createDoc = doc(db, "registerUsers", uid);
     setDoc(createDoc, {
      firstName, lastName, headLine, email
     })     
        notification.success({
            message: "Success Registration",
            description: `Welcome ${firstName} ${lastName}`
        })        
      }catch(error){
   notification.error({
    message: "Wrong Registration",
    description: "Ooooooooops"
   })
      }finally{
         this.setState({
            loading: false
         })
      }
   
  }
  render() {
        return (
      <div className="auth_container">
        <Title level={2}>Register</Title>
        <Form layout="vertical" onValuesChange={this.handleChangeInput}>
          <Form.Item label="First Name" name="firstName">
            <Input type="text" placeholder="Firts Name" />
          </Form.Item>
          <Form.Item label="Last Name" name="lastName">
            <Input type="text" placeholder="Last Name" />
          </Form.Item>
          <Form.Item label="headLine" name="headLine">
            <Input type="text" placeholder="HeadLine" />
          </Form.Item>
          <Form.Item label="email" name="email">
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item label="password" name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Divider />
          <Button type="primary" onClick={this.handleRegister}>
            Register
          </Button>
        </Form>
      </div>
    );
  }
}
