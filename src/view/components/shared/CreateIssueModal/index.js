import { useState, useContext } from "react";
import { Modal, Form, notification } from "antd";
import {
  taskStatus,
} from "../../../../core/constant/issue";
import {
  doc,
  setDoc,
  db,
  updateDoc,
  arrayUnion,
} from "../../../../services/firebase/firebase";
import { AuthContext } from "../../../../context/AuthContext";
import IssueModalForm from "../IssueModalForm";

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
     <IssueModalForm
     form={form}
     users={users}
     onFinish={handleCreateIssue}
     />
    </Modal>
  );
};
export default CreateIssueModal;
