import Dashboard from "@/components/shared/wrappers/Dashboard";
import { KanbanBoard } from "./KanbanBoard";

const TaskManger = () => {
  return (
    <Dashboard>
      <div>task manger home page
        <KanbanBoard />
      </div>
    </Dashboard>
  );
};

export default TaskManger;
