import { EssayProps } from "@/types/writing-lab";
import WritingLabCard from "../../WritingLabCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { IoAddOutline } from "react-icons/io5";
import WLAddEssay from "./WLAddEssay";
const EssayHome = ({
  essayData,
  setEssayData,
}: {
  essayData: EssayProps[];
  setEssayData: React.Dispatch<React.SetStateAction<EssayProps[]>>;
}) => {
  return (
    <div className="z-1">
      <ScrollArea className="rounded-md border z-0">
        <div className="wl-section">
          <p className="wl-section-title">Essay</p>
          <div className="flex items-center gap-4">
            {essayData.map((essay, index) => (
              <WritingLabCard
                key={index}
                title={essay.essayTitle}
                subTitle={essay.essayType}
                status={essay.essayStatus}
                deadline={essay.universityDeadline.seconds}
                university={essay.associatedUniversity}
              />
            ))}
            <WLAddEssay />
          </div>
          <ScrollBar orientation="horizontal" />
        </div>
      </ScrollArea>
    </div>
  );
};

export default EssayHome;
