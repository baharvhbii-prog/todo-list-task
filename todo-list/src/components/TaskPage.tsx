import { useState, type FC } from "react";

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
  const handleTask = () => {
    setTasks(addTask(tasks, "Learn TS"));
  };
  const handleToggle = (id: number) => {
    setTasks(toggleTaskStatus(tasks, id));
  };
  console.log(tasks);
  return (
    <div>
      Task Page
      <button onClick={handleTask}>add task</button>
      <button onClick={() => handleToggle(1)}>toggle</button>
    </div>
  );
};

export default TaskPage;
