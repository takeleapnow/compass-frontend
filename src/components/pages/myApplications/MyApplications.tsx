import Dashboard from "@/components/shared/wrappers/Dashboard";
import Stats from "./subComponents/Stats";
import DashboardNavbar from "./subComponents/DashboardNavbar";
import { useEffect, useState } from "react";
// import axios from "axios";
import no_shortlist from "@/assets/images/no_shortlists.webp";
import uni from "@/assets/images/uni.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { GoArrowUpRight } from "react-icons/go";
import AddTask from "./subComponents/AddTask";
import AddApplicationMaterial from "./subComponents/AddApplicationMaterial";
interface ApplicationShortlists {
  uniName: string;
  program: string;
  applicationFees: number;
  currency: string;
  status: string;
  id: number;
};

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
      uniName: "Standford University",
      program: "Masters in Computer Science",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 1,
    },
    {
      uniName: "Harvard University",
      applicationFees: 300,
      program: "Masters in Computer Science",
      currency: "USD",
      status: "Pending",
      id: 2,
    },
    {
      uniName: "MIT",
      program: "Masters in Computer Science",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 3,
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
                  className="w-2/5 border rounded-md p-2 shadow-sm "
                  key={index}
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2">
                      <img
                        alt="University logo"
                        src={uni}
                        className="w-24 h-24"
                      />
                      <div className="flex flex-col ">
                        <p className="text-lightPrimary font-semibold text-xl">
                          {shortlist.uniName}
                        </p>
                        <p>{shortlist.program}</p>
                        <p className="bg-gray-200 rounded-full w-fit px-3 mt-1 text-sm">
                          {shortlist.status}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-1">
                      <Link to={""}>
                        <Button variant={"sleekTransparent"} size={"sleek"}>
                          <IoAdd /> Pre-requisites
                        </Button>
                      </Link>
                     <AddApplicationMaterial/>
                      <AddTask/>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm mt-4">
                    <div className="flex gap-2 items-center">
                      <p className="text-gray-700 font-semibold">
                        Application Fees
                      </p>
                      <p>
                        {shortlist.currency} {shortlist.applicationFees}
                      </p>
                    </div>
                    <Link to={""}>
                      <p className="flex items-center gap-1 hover:text-lightSecondary">
                        Portal Link <GoArrowUpRight />{" "}
                      </p>
                    </Link>
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
