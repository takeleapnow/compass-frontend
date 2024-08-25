import { Input } from "@/components/ui/input";
import AddShortlist from "./AddShortlist";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-end gap-4">
      <Input className="w-1/4" placeholder="Search shortlist..." />
     <AddShortlist/>
    </div>
  );
};

export default DashboardNavbar;
