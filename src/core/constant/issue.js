import { 
    ArrowUpOutlined, 
    ArrowDownOutlined, 
    CheckSquareOutlined, 
    BugOutlined, 
    FlagOutlined
} from '@ant-design/icons';

const ISSUE_OPTION = {
    task: {
        icon:<CheckSquareOutlined style={{color: "#4fade6"}}/>
    },
    bag: {
        icon: <BugOutlined style={{color: "#e44d42"}}/>
    },
    story: {
        icon: <FlagOutlined style={{color: "#65ba43"}}/>
    }
}
const issueTypes = [
    {
    value: "bag",
    label: "Bag",
    icon: ISSUE_OPTION.bag.icon
    },
   {
    value: "task",
    label: "Task",
    icon: ISSUE_OPTION.task.icon
   }, 
   {
    value: "story",
    label: "Story",
    icon: ISSUE_OPTION.story.icon
   },
]

const PRIORITY_OPTION = {
    high : { 
        icon: <ArrowUpOutlined style={{color: "red"}}/>
    },
    highest: {
        icon: <ArrowUpOutlined style={{color: "red"}}/>
    },
    medium: {
        icon: <ArrowUpOutlined style={{color: "orange"}}/>
    },
    low: {
        icon: <ArrowDownOutlined style={{color: "green"}}/>
    },
    lowest: {
        icon: <ArrowDownOutlined style={{color: "green"}}/>
    }
}
 const priority  = [
    {
        value: "highest",
        label: "Highest",
        icon: PRIORITY_OPTION.highest.icon
    },
    {
        value: "high",
        label: "High",
        icon: PRIORITY_OPTION.high.icon
    },
    {
        value: "medium",
        label: "Medium",
        icon: PRIORITY_OPTION.medium.icon
    },
    {
        value: "low",
        label: "Low",
        icon: PRIORITY_OPTION.low.icon
    },
    {
        value: "lowest",
        label: "Lowest",
        icon: PRIORITY_OPTION.lowest.icon
    },
 ]

 const taskStatus = {
    TODO:{
        key: '0',
        title: "Todo"
    },
    IN_PROGRESS: {
        key: '1',
        title: "In Progress"
    },
    TEST: {
        key: '2',
        title: "Test"
    },
    DONE: {
        key: '3',
        title: "Done"
    },
 }
export {
    issueTypes, 
    priority,
    taskStatus,
    ISSUE_OPTION,
    PRIORITY_OPTION
}