import Dashboard from "@/components/shared/wrappers/Dashboard";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { HiOutlineSparkles } from "react-icons/hi2";

interface PromptData {
  personalBackground: {
    workExperience: string;
    achievements: string;
  };
  academicGoals: {
    interestInProgram: string;
  };
  fitWithUniversity: {
    attractionToUniversity: string;
  };
  uniqueSellingPoint: {
    uniqueApplicant: string;
  };
}
const WLAIPrompt = () => {
  const [promptData, setPromptData] = useState<PromptData>({
    personalBackground: {
      workExperience: "",
      achievements: "",
    },
    academicGoals: {
      interestInProgram: "",
    },
    fitWithUniversity: {
      attractionToUniversity: "",
    },
    uniqueSellingPoint: {
      uniqueApplicant: "",
    },
  });
  return (
    <Dashboard>
      <div>
        <p className="page-title">Application promopt for ESSAY</p>
        <div className="bg-purple-50 rounded-md min-h-screen flex flex-col  gap-8 p-4">
          <div className="flex flex-col gap-2">
            <p className=" bg-purple-400 w-fit px-4 py-1 rounded-md text-white font-medium">
              Personal Background
            </p>
            <div>
              <Label>Briefly explain your work experience</Label>
              <Textarea
                placeholder="Type here..."
                value={promptData.personalBackground.workExperience}
                onChange={(e) =>
                  setPromptData({
                    ...promptData,
                    personalBackground: {
                      ...promptData.personalBackground,
                      workExperience: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div>
              <Label>Mention your achievements (if any)</Label>
              <Textarea
                placeholder="Type here..."
                value={promptData.personalBackground.achievements}
                onChange={(e) =>
                  setPromptData({
                    ...promptData,
                    personalBackground: {
                      ...promptData.personalBackground,
                      achievements: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-purple-400 w-fit px-4 py-1 rounded-md text-white font-medium">
              Academic Goals
            </p>
            <div>
              <Label>Why are you interested in this program/field</Label>
              <Textarea
                placeholder="Type here..."
                value={promptData.academicGoals.interestInProgram}
                onChange={(e) =>
                  setPromptData({
                    ...promptData,
                    academicGoals: {
                      ...promptData.academicGoals,
                      interestInProgram: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-purple-400 w-fit px-4 py-1 rounded-md text-white font-medium">
              Fit with the University
            </p>
            <div>
              <Label>What attracted you to the University</Label>
              <Textarea
                placeholder="Type here..."
                value={promptData.fitWithUniversity.attractionToUniversity}
                onChange={(e) =>
                  setPromptData({
                    ...promptData,
                    fitWithUniversity: {
                      ...promptData.fitWithUniversity,
                      attractionToUniversity: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="bg-purple-400 w-fit px-4 py-1 rounded-md text-white font-medium">
              Unique selling point
            </p>
            <div>
              <Label>What makes you a unique applicant</Label>
              <Textarea
                placeholder="Type here..."
                value={promptData.uniqueSellingPoint.uniqueApplicant}
                onChange={(e) =>
                  setPromptData({
                    ...promptData,
                    uniqueSellingPoint: {
                      ...promptData.uniqueSellingPoint,
                      uniqueApplicant: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
          <Button className="w-lg px-24 mx-auto"> <HiOutlineSparkles/>Create with AI</Button>
        </div>
      </div>
    </Dashboard>
  );
};

export default WLAIPrompt;
