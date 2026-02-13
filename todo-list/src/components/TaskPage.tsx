import { useState, type FC, type ChangeEvent } from "react";

interface ITask {
  id: number;
  title: string;
  isComplete: boolean;
  description?: string;
}

function addTask(tasks: ITask[], title: string): ITask[] {
  const newTask: ITask = {
    id: tasks.length + 1,
    title,
    isComplete: false,
  };

  return [...tasks, newTask];
}

function toggleTaskStatus(tasks: ITask[], id: number): ITask[] {
  return tasks.map((task) =>
    task.id === id
      ? { ...task, isComplete: !task.isComplete }
      : task
  );
}
const TaskPage: FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const handleTask = () => {
    setTasks(addTask(tasks, newTaskTitle));
    setNewTaskTitle("")
  };
  const handleToggle = (id: number) => {
    setTasks(toggleTaskStatus(tasks, id));
  };
  const deleteTask =(id:number)=>{
const filteredTasks = tasks.filter(task=>task.id!==id)
setTasks(filteredTasks)
  }
  console.log(tasks);
  console.log(newTaskTitle);
  return (
    <div className="w-[500px] min-h-[400px] bg-purple-100 p-6 flex  flex-col items-center gap-10 rounded-md">
     <div className="flex gap-4 h-[50px]  w-[85%] justify-between">
     <input className=" bg-white rounded-md w-[60%] " type="text" value={newTaskTitle} onChange={(event:ChangeEvent<HTMLInputElement>)=>{
        const newTaskToAdd = event.target.value
        setNewTaskTitle(newTaskToAdd)
      }}/>
      <button className="text-white !bg-purple-600 " onClick={handleTask}> Add Task</button>
     </div>
      
       <div className="flex  flex-col gap-3 w-[85%]">
       {tasks.map((task,key)=>(
          <div key={key} className="flex gap-3 items-center justify-between  bg-white rounded-md p-3">
            <span className={task.isComplete?"line-through text-gray-400":""}>{task.title}</span>
           <div className="flex gap-2">
           <input type="checkbox" className="w-8 h-8" checked={task.isComplete}   onChange={() => handleToggle(task.id)}/>
            <button className="text-white !bg-red-600 w-[33px] h-[33px] flex items-center justify-center" onClick={()=>deleteTask(task.id)}>X</button>
           </div>
          </div>
        ))}
       </div>
    </div>
  );
};

export default TaskPage;
