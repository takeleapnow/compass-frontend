import { Link, useLocation } from "react-router-dom";
// import { TbLogout2 } from "react-icons/tb";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { FaChevronDown, FaChevronUp, FaMoon, FaSun } from "react-icons/fa";
import { Button } from "../ui/button";
import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";
import { IconType } from "react-icons/lib";

interface SidebarProps {
  data: { title: string; icon: IconType; link: string; status: string }[];
  isSideBarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ data, isSideBarOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  return (
    <div className="pt-16  h-screen z-100">
      {isSideBarOpen ? (
        <aside
          id="icon-sidebar"
          className="fixed bg-lightPrimary w-1/3 lg:w-1/4 2xl:w-1/6  h-screen pb-16 transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-3 py-4 overflow-y-auto flex flex-col justify-between pb-12 shadow-md dark:bg-gray-900">
            <div>
              <div className="space-y-2 font-medium flex flex-col items-start w-full">
                {data.map((item, index) => (
                  <div key={index} className="w-full">
                    <Link to={item.link} className="w-full">
                      <div
                        className={` w-full flex gap-2 justify-start items-center p-2 ${location.pathname === item.link
                            ? "  border-purple-400 bg-gradient-to-tr dark:border-purple-800 dark:from-purple-800 dark:to-violet-800  bg-white  rounded-md dark:text-white text-purple-800 "
                            : " hover:bg-gradient-to-tr hover:to-purple-400   dark:hover:from-gray-800 dark:hover:to-gray-700 hover:from-purple-400 dark:hover:bg-gray-700 group rounded-lg dark:text-white text-white group-hover:text-white"
                          }`}
                      >
                        <item.icon className="text-2xl" />
                        <p className="text-lg font-normal flex justify-between w-full items-center ">
                          {item.title}
                          {item.status !== "" && (
                            <span
                              className={`text-sm rounded-md font-semibold px-2 py-1  ${location.pathname === item.link
                                  ? "bg-secondary text-white"
                                  : "bg-white text-center text-secondary dark:bg-gray-800 dark:text-secondaryDark"
                                }`}
                            >
                              {item.status}
                            </span>
                          )}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>

            </div>
            <div className="mt-8 flex-col flex gap-2 ">
              <div className="flex gap-2">
                <Button
                  onClick={toggleSidebar}
                  className="bg-transparent text-white text-2xl  dark:bg-transparent dark:text-gray-200 border-none"
                >
                  <LuArrowLeftFromLine className="" />
                </Button>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <aside
          id="icon-sidebar"
          className="fixed  bg-lightPrimary pb-16 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div className="h-full px-2 items-center gap-4 py-4 overflow-y-auto  flex flex-col justify-between pb-8 shadow-md">
            <div className="flex flex-col gap-4 items-center">
              {data.map((item, index) => (
                <Link to={item.link} key={index}>
                  <div
                    className={`w-full flex gap-2 px-4 justify-start items-center p-2 ${location.pathname === item.link
                        ? "  border-purple-400 bg-gradient-to-tr dark:border-purple-800 dark:from-purple-800 dark:to-violet-800  bg-white  rounded-md dark:text-white text-purple-800 "
                        : " hover:bg-gradient-to-tr hover:to-purple-400   dark:hover:from-gray-800 dark:hover:to-gray-700 hover:from-purple-400 dark:hover:bg-gray-700 group rounded-lg dark:text-white text-white group-hover:text-white"
                      }`}
                  >
                    <item.icon className="text-2xl" />
                  </div>
                </Link>
              ))}
            </div>
            <div className="flex flex-col items-center gap-1 border-t dark:border-gray-600 pt-2 border-gray-300">
              <Button
                onClick={toggleSidebar}
                className="bg-transparent text-white text-2xl dark:bg-transparent dark:text-gray-200 border-none "
              >
                <LuArrowRightFromLine />
              </Button>
            </div>
          </div>
        </aside>
      )}
    </div>
  );
};

export default Sidebar;
