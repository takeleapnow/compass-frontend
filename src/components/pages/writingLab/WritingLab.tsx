import Dashboard from "@/components/shared/wrappers/Dashboard";
import WritingLabNav from "./subComponents/WritingLabNav";
import EssayHome from "./subComponents/essay/EssayHome";
import LORHome from "./subComponents/lor/LORHome";
import ResumeHome from "./subComponents/resume/ResumeHome";
import { useState } from "react";
import { EssayProps, LorProps, ResumeProps } from "@/types/writing-lab";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const WritingLab = () => {
  const [essayData, setEssayData] = useState<EssayProps[]>([
    {
      essayTitle: "",
      essayType: "",
      essayStatus: "",
      associatedUniversity: "",
      universityDeadline: {
        seconds: "",
        nanos: "",
      },
    },
  ]);

  const [lorData, setLorData] = useState<LorProps[]>([
    {
      lorTitle: "",
      lorStatus: "",
      associatedUniversity: "",
      universityDeadline: {
        seconds: "",
        nanos: "",
      },
    },
  ]);
  const [resumeData, setResumeData] = useState<ResumeProps[]>([
    {
      resumeStatus: "",
      resumeTitle: "",
      associatedUniversity: "",
      universityDeadline: {
        seconds: "",
        nanos: "",
      },
    },
  ]);

  return (
    <Dashboard>
      <div className="  flex flex-col gap-y-4 h-screen">
        <p className="page-title h-[10%]">Writing Lab</p>
        <WritingLabNav />
        <div className="h-[80%] ">
          <ScrollArea className="h-[100%] w-full rounded-md">
            <div className="w-[100%] h-full flex flex-col gap-y-4">
              <EssayHome
                essayData={essayData}
                setEssayData={setEssayData}
              />
              <LORHome
                lorData={lorData}
                setLorData={setLorData}
              />
              <ResumeHome
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </div>
      </div>
    </Dashboard>
    // <Dashboard>
    //   <div>
    //     <p className="page-title">Writing Lab</p>
    //     <WritingLabNav />
    //     <div className="grid grid-cols-1 gap-y-4 mt-8">
    //       <ScrollArea className="max-h-screen">
    //         <div className="flex flex-col gap-y-4 ">
    //           {/* <div className="m-4 w-full"> Container for spacing */}
    //           <EssayHome
    //             essayData={essayData}
    //             setEssayData={setEssayData}
    //           />
    //           {/* </div> */}

    //           {/* <div className="m-4"> */}
    //           <LORHome
    //             lorData={lorData}
    //             setLorData={setLorData}
    //           />

    //           {/* </div> */}
    //           {/* <div className="m-4"> */}
    //           <ResumeHome
    //             resumeData={resumeData}
    //             setResumeData={setResumeData}
    //           />
    //           {/* </div> */}
    //         </div>
    //         <ScrollBar orientation="vertical" />
    //       </ScrollArea>
    //     </div>
    //   </div>
    // </Dashboard>
  );
};

export default WritingLab;
