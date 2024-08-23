import Dashboard from "@/components/shared/wrappers/Dashboard";
import Stats from "./subComponents/Stats";
import DashboardNavbar from "./subComponents/DashboardNavbar";

const MyApplications = () => {
  return (
    <Dashboard>
      <div>
        <p className="page-title">Dashboard</p>
        {/* applications will be shown here */}
        <DashboardNavbar/>
        <Stats/>
        <div className="bg-lightAccent rounded-md min-h-screen">

        </div>
      </div>
    </Dashboard>
  );
};

export default MyApplications;
