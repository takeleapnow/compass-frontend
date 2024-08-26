import { MdOutlinePlaylistRemove } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RemoveFields = ({handleRemove}:
    {handleRemove:()=>void}
) => {
  return (
    <div>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger  className="text-xl cursor-pointer hover:text-red-700"
          onClick={handleRemove}>
            {" "}
            <MdOutlinePlaylistRemove />
          </TooltipTrigger>
          <TooltipContent>
            <p>Delete</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default RemoveFields;
