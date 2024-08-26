import  { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const Others = () => {
  const [others, setOthers] = useState({
    unofficialTranscripts: false,
    gpaConversion: false,
    wesEvaluation: false,
    interview: false,
  });

  const handleCheckboxChange = (name: keyof typeof others) => {
    setOthers({
      ...others,
      [name]: !others[name],
    });
  };

  return (
    <div className="pt-2 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <Checkbox
          id="unofficialTranscripts"
          checked={others.unofficialTranscripts}
          onCheckedChange={() => handleCheckboxChange("unofficialTranscripts")}
        />
        <Label htmlFor="unofficialTranscripts">Unofficial Transcripts</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="gpaConversion"
          checked={others.gpaConversion}
          onCheckedChange={() => handleCheckboxChange("gpaConversion")}
        />
        <Label htmlFor="gpaConversion">GPA Conversion</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="wesEvaluation"
          checked={others.wesEvaluation}
          onCheckedChange={() => handleCheckboxChange("wesEvaluation")}
        />
        <Label htmlFor="wesEvaluation">WES Evaluation</Label>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="interview"
          checked={others.interview}
          onCheckedChange={() => handleCheckboxChange("interview")}
        />
        <Label htmlFor="interview">Interview</Label>
      </div>
    </div>
  );
};

export default Others;
