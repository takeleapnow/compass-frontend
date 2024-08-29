import Dashboard from "@/components/shared/wrappers/Dashboard";
import { initialTasks, KanbanBoard } from "./KanbanBoard";
import { Search } from "./ui/search";
import { useState } from "react";
import { Task } from "./TaskCard";

const TaskManager = () => {
  const [allTasks, setAllTasks] = useState<Task[]>(initialTasks);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleSearch = (query: string) => {
    // Filter tasks based on the content
    const filteredTasks = allTasks.filter(task =>
      task.content.toLowerCase().includes(query.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  const reset = () => {
    setTasks(allTasks);
  }

  const addTask = (newTask: Task) => {
    setAllTasks(prevTasks => [...prevTasks, newTask]);
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  return (
    <Dashboard>
      <div className="flex flex-col space-y-4 max-w-screen-xl">
        <div className="flex justify-between items-center">
          <p className="page-title flex h-full pt-auto justify-center items-center text-center">Task Manager</p>
          <Search onSearch={handleSearch} reset={reset} />
        </div>
        <div className="">
          <KanbanBoard tasks={tasks} setTasks={setTasks} addTask={addTask} />
        </div>
      </div>
    </Dashboard>
  );
};

export default TaskManager;
