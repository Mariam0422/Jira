const issueTypes = [
    {
    value: "bag",
    label: "Bag"
    },
   {
    value: "task",
    label: "Task"
   }, 
   {
    value: "story",
    label: "Story"
   },
]
 const priority  = [
    {
        value: "highest",
        label: "Highest"
    },
    {
        value: "high",
        label: "High"
    },
    {
        value: "medium",
        label: "Medium"
    },
    {
        value: "low",
        label: "Low"
    },
    {
        value: "lowest",
        label: "Lowest"
    },
 ]

 const taskStatus = {
    TODO: "todo",
    IN_PROGRESS: "inProgress",
    TEST: "test",
    DONE: "done"
 }
export {
    issueTypes, 
    priority,
    taskStatus
}