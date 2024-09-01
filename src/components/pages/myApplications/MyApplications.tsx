import Dashboard from "@/components/shared/wrappers/Dashboard";
import Stats from "./subComponents/Stats";
import DashboardNavbar from "./subComponents/DashboardNavbar";
import { useEffect, useState } from "react";
import no_shortlist from "@/assets/images/no_shortlists.webp";
import uni from "@/assets/images/uni.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import AddTask from "./subComponents/AddTask";
import AddApplicationMaterial from "./subComponents/AddApplicationMaterial";
import { FiEdit, FiFileText } from "react-icons/fi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PiArrowUpRightBold, PiCompassRoseThin } from "react-icons/pi";
import { LifeBuoy } from "lucide-react";
import { LuFileClock, LuFileEdit, LuFileLock2 } from "react-icons/lu";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";
import { handleDateFormatter } from "@/lib/helper";

interface ApplicationShortlists {
  uniName: string;
  program: string;
  applicationFees: number;
  currency: string;
  status: string;
  id: number;
  deadline: {
    seconds: number;
    nanos: number;
  };
  tasksToComplete: string;
  progress:number
}

const MyApplications = () => {
  const [shortlists, setShortlists] = useState<ApplicationShortlists[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchShortlists = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("");
        // setShortlists(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchShortlists();
    setTimeout(() => {
      setShortlists(applications);
    }, 2000);
  }, []);

  const applications = [
    {
      uniName: "Stanford University",
      program: "Masters in Computer Science",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 1,
      deadline: {
        seconds: 1630000000,
        nanos: 0,
      },
      tasksToComplete: "5",
      progress:20
    },
    {
      uniName: "Harvard University",
      applicationFees: 300,
      program: "Masters in Computer Science",
      currency: "USD",
      status: "Pending",
      id: 2,
      deadline: {
        seconds: 1630000000,
        nanos: 0,
      },
      tasksToComplete: "9",
      progress:20
    },
    {
      uniName: "MIT",
      program: "Masters in Computer Science",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 3,
      deadline: {
        seconds: 1630000000,
        nanos: 0,
      },
      tasksToComplete: "4",
      progress:20
    },
  ];

  
  return (
    <Dashboard>
      <div>
        <p className="page-title">Dashboard</p>
        {/* applications will be shown here */}
        <DashboardNavbar />
        <Stats />
        <div className="bg-purple-50 rounded-md min-h-screen p-4">
          {loading ? (
            <p>Loading...</p>
          ) : shortlists.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {shortlists.map((shortlist, index) => (
                <div
                  className="w-2/5 2xl:w-1/4  border rounded-md p-2 shadow-sm "
                  key={index}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <img
                        alt="University logo"
                        src={uni}
                        className="w-24 h-24"
                      />
                      <div className="flex flex-col w-full ">
                        <div className="flex justify-between items-center w-full">
                          <p className="text-lightPrimary font-semibold text-xl">
                            {shortlist.uniName}
                          </p>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div>
                                <FiEdit className="text-lg" />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                              <DropdownMenuLabel>
                                Application Menu
                              </DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup>
                                <DropdownMenuItem>
                                  <FiFileText className="mr-2 h-4 w-4" />
                                  <span>View application</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <PiCompassRoseThin className="mr-2 h-4 w-4" />
                                  <span>Quick access</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <HiOutlineGlobeAsiaAustralia className="mr-2 h-4 w-4" />
                                  <span>View Portal</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <LuFileEdit className="mr-2 h-4 w-4" />
                                  <span>Edit application</span>
                                </DropdownMenuItem>
                              </DropdownMenuGroup>
                              <DropdownMenuSeparator />
                              <DropdownMenuGroup>
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger>
                                    <LuFileClock className="mr-2 h-4 w-4" />
                                    <span>Status</span>
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                      <DropdownMenuRadioGroup
                                        value={"Applying"}
                                        onValueChange={() => {}}
                                      >
                                        <DropdownMenuRadioItem value="Applying">
                                          Applying
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Considering">
                                          Considering
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Submitted">
                                          Submitted
                                        </DropdownMenuRadioItem>
                                      </DropdownMenuRadioGroup>
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger>
                                    <LuFileLock2 className="mr-2 h-4 w-4" />
                                    <span>Privacy</span>
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                      <DropdownMenuRadioGroup
                                        value={"Public"}
                                        onValueChange={() => {}}
                                      >
                                        <DropdownMenuRadioItem value="Public">
                                          Visible to mentor
                                        </DropdownMenuRadioItem>
                                        <DropdownMenuRadioItem value="Private">
                                          Private
                                        </DropdownMenuRadioItem>
                                      </DropdownMenuRadioGroup>
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                              </DropdownMenuGroup>
                              <DropdownMenuSeparator />

                              <DropdownMenuItem>
                                <LifeBuoy className="mr-2 h-4 w-4" />
                                <span>Support</span>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                        <p>{shortlist.program}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <p className="bg-gray-200 rounded-full w-fit px-3 text-sm">
                            {shortlist.status}
                          </p>
                          <div className="flex gap-2 items-center">
                            <p className="text-gray-700 font-semibold">
                              Deadline
                            </p>
                            <p>{handleDateFormatter(shortlist.deadline)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      <Link to={""}>
                        <Button variant={"sleekTransparent"} size={"sleek"}>
                          <IoAdd /> Pre-requisites
                        </Button>
                      </Link>
                      <AddApplicationMaterial />
                      <AddTask />
                      <Link to={""}>
                        <Button variant={"sleekTransparent"} size={"sleek"}>
                          <PiArrowUpRightBold /> View
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mt-4">
                   <div className="flex items-center gap-2">
                   <p className="text-gray-700">Tasks to complete</p>
                   <p className="text-gray-700">{shortlist.tasksToComplete}</p>
                   </div>
                    <div className="flex items-center gap-2">
                    <p className="text-gray-700">Progress</p>
                    <p className="text-gray-700">{shortlist.progress}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center gap-4 flex-col">
              <img
                src={no_shortlist}
                alt="No shortlists"
                className="w-1/4 mx-auto"
              />
              <p className="text-2xl font-medium text-darkPrimary">
                Get started by adding shortlists!
              </p>
            </div>
          )}
        </div>
      </div>
    </Dashboard>
  );
};

export default MyApplications;
