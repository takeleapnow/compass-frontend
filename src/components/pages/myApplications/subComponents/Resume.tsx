import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RemoveFields } from "@/components/customComponents";
import { IoAdd } from "react-icons/io5";

interface ResumeProps {
  nameOfResume: string;
  status: string;
  globalUse: boolean;
}

const Resume = () => {
  const [resumes, setResumes] = useState<ResumeProps[]>([
    {
      nameOfResume: "",
      status: "",
      globalUse: false,
    },
  ]);

  const handleAddResume = () => {
    setResumes([
      ...resumes,
      {
        nameOfResume: "",
        status: "",
        globalUse: false,
      },
    ]);
  };

  const handleRemoveResume = (index: number) => {
    const newResumes = [...resumes];
    newResumes.splice(index, 1);
    setResumes(newResumes);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newResumes = [...resumes];
    newResumes[index] = {
      ...newResumes[index],
      [name]: value,
    };
    setResumes(newResumes);
  };

  const handleCheckboxChange = (index: number) => {
    const newResumes = [...resumes];
    newResumes[index] = {
      ...newResumes[index],
      globalUse: !newResumes[index].globalUse,
    };
    setResumes(newResumes);
  };

  return (
    <div className="pt-2">
      <ScrollArea className="max-h-[500px]">
        {resumes.map((resume, index) => (
          <div key={index} className="flex flex-col gap-4 pt-2">
            <div className="font-medium flex justify-between items-center mr-4">
              Resume - {index + 1}
              <div className="border h-0 border-purple-50 dark:border-gray-800 w-[75%]"></div>
              <RemoveFields handleRemove={() => handleRemoveResume(index)} />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-5/6">
                <Label htmlFor="nameOfResume">Name of Resume</Label>
                <Input
                  type="text"
                  id="nameOfResume"
                  name="nameOfResume"
                  value={resume.nameOfResume}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Name of Resume"
                />
              </div>
              <div className="w-5/6">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={resume.status}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "status", value },
                      } as React.ChangeEvent<HTMLSelectElement>,
                      index
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-5/6 flex items-center gap-2">
                <Checkbox
                  id="globalUse"
                  name="globalUse"
                  checked={resume.globalUse}
                  onCheckedChange={() => handleCheckboxChange(index)}
                />
                Use this resume for all applications
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex justify-end mt-4">
        <Button variant="sleekTransparent" onClick={handleAddResume}>
          <IoAdd className="text-lg" />
          Add Resume
        </Button>
      </div>
    </div>
  );
};

export default Resume;
