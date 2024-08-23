import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { GrResources } from "react-icons/gr";
export const sidebarData = [
    {
        title: "My Applications",
        link: "/applications",
        icon: RxDashboard,
        status: "",
      },
      {
        title: "Task Manager",
        link: "/task-manager",
        icon: FaTasks,
        status: "",
      },
      {
        title: "Writing Lab",
        link: "/writing-lab",
        icon: ImLab,
        status:"",

      },
      {
        title: "Resources",
        link: "/resources",
        icon: GrResources,
        status:"",
      }
];