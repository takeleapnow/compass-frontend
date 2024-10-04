import Dashboard from "@/components/shared/wrappers/Dashboard";
import no_resource from "@/assets/no_resource.svg";
import ResourcesNav from "./ResourcesNav";
const Resources = () => {
  return (
    <Dashboard>
      <div>
        <ResourcesNav/>
        <div className="flex flex-col items-center gap-4">
          <img src={no_resource} alt="" className="w-1/4"/>
          <p>No resources available</p>
        </div>
      </div>
    </Dashboard>
  );
};

export default Resources;
