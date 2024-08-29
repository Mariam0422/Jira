import { useState, useContext } from "react";
import { Modal, Form, Input, Select, notification } from "antd";
import {
  issueTypes,
  priority,
  taskStatus,
} from "../../../../core/constant/issue";
import Editor from "../Editor";
import {
  doc,
  setDoc,
  db,
  updateDoc,
  arrayUnion,
} from "../../../../services/firebase/firebase";
import { AuthContext } from "../../../../context/AuthContext";

const CreateIssueModal = ({ visible, setVisible, users }) => {
  const [form] = Form.useForm();
  const [confirmLoading, setconfirmLoading] = useState(false);
  const { hadleGetIssues } = useContext(AuthContext);

  const handleUpdateAssigneesTask = async (taskId, assignerId) => {
    const docRef = doc(db, "registerUsers", assignerId);
    await updateDoc(docRef, {
      task: arrayUnion(taskId),
    });
  };

  const handleCloseModal = () => {
    setVisible(false);
    form.resetFields();
  };
  const handleCreateIssue = async (values) => {
    const taskId = `${Date.now()}`;
    setconfirmLoading(true);
    const taskDataModel = {
      key: taskId,
      status: taskStatus.TODO.key,
      ...values,
    };

    try {
      const createDoc = doc(db, "issue", taskId);
      await setDoc(createDoc, taskDataModel);
      await handleUpdateAssigneesTask(taskId, values.assignees);
      setVisible(false);
      form.resetFields();
      hadleGetIssues();
      notification.success({
        message: "Your task has been created",
      });
    } catch (error) {
      notification.error({
        message: "Error ooops :(",
      });
    } finally {
      setconfirmLoading(false);
    }
  };
  return (
    <Modal
      title="Create Issue"
      okText="Create Issue"
      centered
      open={visible}
      width={800}
      onCancel={handleCloseModal}
      onOk={form.submit}
      confirmLoading={confirmLoading}
      styles={{
        body: {
          maxHeight: "600px",
          overflowY: "auto",
          overflowX: "hidden",
        },
      }}
    >
      <Form layout="vertical" form={form} onFinish={handleCreateIssue}>
        <Form.Item
          name="issueType"
          label="Issue Type"
          rules={[{ required: true, message: "Plese select Issue Type" }]}
        >
          <Select showSearch placeholder="Issue Type">
            {issueTypes.map((item) => {
              return (
                <Select.Option value={item.value}>
                  {item.icon}
                  {" "} 
                  {item.label}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>

        <Form.Item
          name="shortSummary"
          label=" Short Summary"
          rules={[{ required: true, message: "Plese input short summary" }]}
        >
          <Input placeholder="Short Summary" />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input Description" }]}
        >
          <Editor />
        </Form.Item>

        <Form.Item
          name="reporter"
          label="Reporter"
          rules={[{ required: true, message: "Plese select Reporter" }]}
        >
          <Select showSearch placeholder="Reporter" options={users} />
        </Form.Item>

        <Form.Item
          name="assignees"
          label="Assignees"
          rules={[{ required: true, message: "Plese select Assignees" }]}
        >
          <Select showSearch placeholder="Assignees" options={users} />
        </Form.Item>

        <Form.Item
          name="priority"
          label="Priority"
          rules={[{ required: true, message: "Plese select priority" }]}
        >
          <Select showSearch placeholder="Priority">
            {priority.map((item) => {
              return (
                <Select.Option value={item.value}>
                  {item.icon} {item.label}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default CreateIssueModal;
