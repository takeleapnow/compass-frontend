import { ResumeProps } from "@/types/writing-lab";
import WritingLabCard from "../WritingLabCard";
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
    <div className="wl-section w-screen">
      {/* temp addition */}
      <p className="wl-section-title" onClick={() => {
        setResumeData([
          ...resumeData,
          {
            resumeStatus: "",
            resumeTitle: "",
            associatedUniversity: "",
            universityDeadline: {
              seconds: "",
              nanos: "",
            },
          },
        ])

      }}>Resume</p>
      <ScrollArea className="rounded-md border w-full whitespace-nowrap">
        <div className="flex w-full items-center gap-4">
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
      </ScrollArea>
    </div>
  );
};

export default ResumeHome;
