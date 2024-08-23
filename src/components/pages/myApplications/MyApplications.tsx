import Dashboard from "@/components/shared/wrappers/Dashboard";
import Stats from "./subComponents/Stats";
import DashboardNavbar from "./subComponents/DashboardNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import no_shortlist from "@/assets/images/no_shortlists.webp";

interface ApplicationShortlists {
  title: string;
  applicationFees: number;
  currency: string;
  status: string;
  id: number;
}
[];

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
    // fetchShortlists();
    setTimeout(() => {
      setShortlists(applications);
    }, 2000);
  }, []);

  const applications = [
    {
      title: "Standford University",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 1,
    },
    {
      title: "Harvard University",
      applicationFees: 300,
      currency: "USD",
      status: "Pending",
      id: 2,
    },
    {
      title: "MIT",
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
        <div className="bg-lightAccent rounded-md min-h-screen">
          {loading ? (
            <p>Loading...</p>
          ) : shortlists.length > 0 ? (
            <>
              
            </>
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
