import Dashboard from "@/components/shared/wrappers/Dashboard";
import { KanbanBoard } from "./KanbanBoard";
import { Search } from "./ui/search";


const TaskManger = () => {

  return (
    <Dashboard>
      <div className="flex flex-col space-y-4 max-w-screen-xl">
        <div className="flex justify-between">
          <p>Task Manager</p>
          <Search />
        </div>
        <div className="">
          <KanbanBoard />
        </div>
      </div>
    </Dashboard>
  );
};

export default TaskManger;
