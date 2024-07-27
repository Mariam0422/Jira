import { useState } from 'react';
import { Modal, Form, Input, Select } from 'antd';
import { issueTypes, priority } from '../../../../core/constant/issue';
// import Editor from '../Editor';
import { doc, setDoc, db } from '../../../../services/firebase/firebase';

const CreateIssueModal = ({visible, setVisible}) => {
  const [form] = Form.useForm();
  const [confirmLoading, setconfirmLoading] = useState(false);

    const handleCloseModal = () => {
        setVisible(false)
    }
    const handleCreateIssue = async(values) => {
      setconfirmLoading(true);
      try{
        console.log(values);
        const createDoc =  doc(db, "issue", `${Date.now()}`);
        setDoc(createDoc, values);
        setVisible(false);
      }
      catch(error){

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
   confirmLoading={confirmLoading}>
    <Form layout="vertical" form={form} onFinish={handleCreateIssue}>

        <Form.Item 
          name="isuueType"
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
         {/* <Editor/> */}
         <Input.TextArea placeholder='Despription'/> 
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