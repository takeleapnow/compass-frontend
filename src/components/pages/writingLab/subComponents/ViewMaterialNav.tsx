import { Button } from "@/components/ui/button";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const ViewMaterialNav = () => {
  return (
    <div className="flex items-center justify-end">
      <Link to="/writing-lab/editor">
        <Button>
          <IoAdd /> Add new material
        </Button>
      </Link>
    </div>
  );
};

export default ViewMaterialNav;
