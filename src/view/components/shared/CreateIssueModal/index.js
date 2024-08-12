import { useState } from 'react';
import { Modal, Form, Input, Select, notification } from 'antd';
import { issueTypes, priority, taskStatus } from '../../../../core/constant/issue';
import Editor from '../Editor';
import { doc, setDoc, db } from '../../../../services/firebase/firebase';

const CreateIssueModal = ({visible, setVisible, users}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setconfirmLoading] = useState(false);
 
  
    const handleCloseModal = () => {      
        setVisible(false);
        form.resetFields();
    }
    const handleCreateIssue = async(values) => {
      setconfirmLoading(true);
      const taskDataModel = {
        status: taskStatus.TODO,
        ...values
      }
    
      try{       
        const createDoc =  doc(db, "issue", `${Date.now()}`);
        setDoc(createDoc, taskDataModel);
        setVisible(false);
        form.resetFields();
        notification.success({
          message: "Your task has been created",          
        })
      }
      catch(error){
         notification.error({
          message: "Error ooops :("
         });
      }finally{
      setconfirmLoading(false);
      }
      
    }
 return(
   <Modal
   title="Create Issue"
   okText="Create Issue"
   centered
   open={visible}
   width={800}
   onCancel={handleCloseModal}
   onOk={form.submit}
   confirmLoading={confirmLoading}
   >
    <Form layout="vertical" form={form} onFinish={handleCreateIssue}>
        <Form.Item 
          name="issueType"
          label="Issue Type"
          rules={[{required: true, message: "Plese select Issue Type"}]}>
          <Select 
          showSearch
          placeholder="Issue Type"
          options={issueTypes}
          />
        </Form.Item>


        <Form.Item
        name="shortSummary"
        label=" Short Summary"
        rules={[{required: true, message: "Plese input short summary"}]}
        >        
        <Input placeholder="Short Summary"/>
        </Form.Item>


        <Form.Item label="Description" name="description" rules={[{required:true, message: "Please input Description"}]}>
         <Editor/>
        </Form.Item>
        
        <Form.Item 
          name="reporter"
          label="Reporter"
          rules={[{required: true, message: "Plese select Reporter"}]}>
          <Select 
          showSearch
          placeholder="Reporter"
          options={users}
          />
        </Form.Item>

        <Form.Item 
          name="assignees"
          label="Assignees"
          rules={[{required: true, message: "Plese select Assignees"}]}>
          <Select 
          showSearch
          placeholder="Assignees"
          options={users}
          />
        </Form.Item>

        <Form.Item 
          name="priority"
          label="Priority"
          rules={[{required: true, message: "Plese select priority"}]}>
          <Select 
          showSearch
          placeholder="Priority"
          options={priority}
          />
        </Form.Item>


    </Form>
   </Modal>
 )
}
export default CreateIssueModal;