import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { textToSpeech } from "@/lib/helper";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const TextToSpeech = ({ description }: { description: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <HiOutlineSpeakerWave
            className=""
            onClick={() => textToSpeech(description)}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Speak</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TextToSpeech;
