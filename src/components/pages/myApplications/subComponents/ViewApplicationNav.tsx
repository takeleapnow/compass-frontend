import { RiDeleteBin5Line } from "react-icons/ri";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { HiOutlineGlobeAsiaAustralia } from "react-icons/hi2";

const ViewApplicationNav = () => {
  return (
    <div className="w-full flex justify-end items-center gap-4">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <RiDeleteBin5Line className="text-xl" />
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete Application Permanently</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <HiOutlineGlobeAsiaAustralia className="text-xl" />
          </TooltipTrigger>
          <TooltipContent>
            <p>View portal</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ViewApplicationNav;
