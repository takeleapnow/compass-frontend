import { useState } from "react";
import { Header, Sidebar } from "../";
import { sidebarData } from "@/constants/sidebarData";

const Dashboard = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    localStorage.getItem("isSidebarOpen") === "true" || false
  );
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    localStorage.setItem("isSidebarOpen", (!isSidebarOpen).toString());
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex w-full ">
        <div
          className={`${
            isSidebarOpen ? " w-1/3 lg:w-1/4 2xl:w-1/6" : "w-[80px]"
          }`}
        >
          <Sidebar
            data={sidebarData}
            isSideBarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </div>
        <div
          className={` ${
            isSidebarOpen ? "w-3/4 2xl:w-5/6" : "w-full"
          } p-8 pt-24 dark:bg-darkPrimary bg-white dark:text-gray-200 text-gray-900`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
