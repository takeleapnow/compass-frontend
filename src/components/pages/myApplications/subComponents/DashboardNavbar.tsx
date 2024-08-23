import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MdFormatListBulletedAdd } from "react-icons/md";

const DashboardNavbar = () => {
  return (
    <div className="flex justify-end gap-4">
      <Input className="w-1/4" placeholder="Search shortlist..." />
      <Button>
        <MdFormatListBulletedAdd className="text-lg" /> Add shortlist
      </Button>
    </div>
  );
};

export default DashboardNavbar;
