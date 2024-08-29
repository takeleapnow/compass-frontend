import Dashboard from "@/components/shared/wrappers/Dashboard";
import WritingLabNav from "./subComponents/WritingLabNav";
import EssayHome from "./subComponents/essay/EssayHome";
import LORHome from "./subComponents/lor/LORHome";
import ResumeHome from "./subComponents/resume/ResumeHome";
import { useState } from "react";
import { EssayProps, LorProps, ResumeProps } from "@/types/writing-lab";


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
      resumeStatus:"",
      resumeTitle:"",
      associatedUniversity: "",
      universityDeadline: {
        seconds: "",
        nanos: "",
      },
    },
  ]);

  return (
    <Dashboard>
      <div>
        <p className="page-title"> Writing lab</p>
        <WritingLabNav />
        <div className="flex flex-col gap-4 mt-8">
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
      </div>
    </Dashboard>
  );
};

export default WritingLab;
