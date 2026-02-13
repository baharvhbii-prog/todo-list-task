import { useState, type FC } from "react"

interface ITask {
  id: number
  title: string
  isComplete: boolean
  description?: string
}

function addTask(tasks: ITask[], title: string): ITask[] {
  const newTask: ITask = {
    id: tasks.length + 1,
    title,
    isComplete: false
  }

  return [...tasks, newTask]
}

const TaskPage: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])
  const handleTask = ()=>{
    setTasks(addTask(tasks, "Learn TS"))
  }
  console.log(tasks)
  return (
    <div>
      Task Page
      <button onClick={handleTask} >add task</button>
    </div>
  )
}

export default TaskPage