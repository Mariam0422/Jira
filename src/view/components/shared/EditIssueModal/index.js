import { useEffect } from "react";
import {
  Modal, Form, Input,
  Select,
  notification,
  Typography,
  Space,
} from "antd";
import { ISSUE_OPTION } from "../../../../core/constant/issue";
import IssueModalForm from "../IssueModalForm";

const { Text } = Typography;
const EditIssueModal = ({ visible, onClose, users, issueData }) => {
  const [form] = Form.useForm();

  useEffect((() => {
    const { key, index, ...restData } = issueData; 
    form.setFieldValue(restData);
  }), [])
  const handleEditForm = () => {

  }
  const handleClose = () => {
    onClose();
  };

  return (
    <div>
      <Modal
        title={
          <div>
            <Space>
              {ISSUE_OPTION[issueData.issueType].icon}
              <Text type="secondary">
                {ISSUE_OPTION[issueData.issueType].label} {issueData.key}
              </Text>
            </Space>
          </div>
        }
        okText="Edit Issue"
        centered
        open={visible}
        onCancel={handleClose}
        width={800}
        style={{
          body: {
            maxHeight: "600px",
            overflowY: "auto",
            overflowX: "hidden",
          },
        }}
      >
        <IssueModalForm
        form={form}
        onFinish={handleEditForm}
        users={[]}
        />
      </Modal>
    </div>
  );
};
export default EditIssueModal;
