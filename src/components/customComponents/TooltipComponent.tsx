import { BsInfoCircleFill } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
const TooltipComponent = ({ text }: {text:string}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger className="bg-transparent border-none p-0">
          <BsInfoCircleFill />
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-primary"> {text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
