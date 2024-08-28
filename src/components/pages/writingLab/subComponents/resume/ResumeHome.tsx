import { ResumeProps } from "@/types/writing-lab";
import WritingLabCard from "../../WritingLabCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import WLAddResume from "./WLAddResume";
const ResumeHome = ({
  resumeData,
  setResumeData,
}: {
  resumeData: ResumeProps[];
  setResumeData: React.Dispatch<React.SetStateAction<ResumeProps[]>>;
}) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="wl-section">
        <p className="wl-section-title">Resume</p>
        <div className="flex items-center gap-4">
          {resumeData.map((resume, index) => (
            <WritingLabCard
              key={index}
              title={resume.resumeTitle}
              subTitle={resume.resumeStatus}
              status="N/A"
              deadline={resume.universityDeadline.seconds}
              university={resume.associatedUniversity}
            />
          ))}
          <WLAddResume />
        </div>
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
};

export default ResumeHome;
