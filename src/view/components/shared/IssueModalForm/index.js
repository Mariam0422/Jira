import { Form, Select, Input } from "antd";
import Editor from "../Editor";
import { issueTypes, priority } from "../../../../core/constant/issue";

const IssueModalForm = ({ form, onFinish, users = [] }) => {
return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
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
)
}
export default IssueModalForm;