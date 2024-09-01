import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { downloadAsPdf } from "@/lib/helper";
import { FaRegFilePdf } from "react-icons/fa";

const DownloadAsPdf = ({
  writingMaterialTitle,
  writingMaterialType = "",
  lastEdited = { seconds: 0, nanos: 0 },
  description,
}: {
  writingMaterialTitle: string;
  writingMaterialType?: string;
  lastEdited?: {
    seconds: number;
    nanos: number;
  };
  description: string;
}) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <FaRegFilePdf
            className=""
            onClick={() =>
              downloadAsPdf(
                writingMaterialTitle,
                writingMaterialType,
                lastEdited,
                description,
              )
            }
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Download as PDF</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default DownloadAsPdf;
