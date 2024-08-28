import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RemoveFields } from "@/components/customComponents";
import { IoAdd } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

interface EssayProps {
  title: string;
  type: string;
  wordLimit: number;
  status: string;
  essayPrompt: string;
  globalUse: boolean;
  associatedUniversity?: string;
}

const Essay = () => {
  const [essays, setEssays] = useState<EssayProps[]>([
    {
      title: "",
      type: "",
      wordLimit: 0,
      status: "",
      essayPrompt: "",
      globalUse: false, //true if the user wants to use it for multiple applications
      associatedUniversity: "", //parent university
    },
  ]);

  const handleAddEssay = () => {
    setEssays([
      ...essays,
      {
        title: "",
        type: "",
        wordLimit: 0,
        status: "",
        essayPrompt: "",
        globalUse: false,
        associatedUniversity: "",
      },
    ]);
  };

  const handleRemoveEssay = (index: number) => {
    const newEssays = [...essays];
    newEssays.splice(index, 1);
    setEssays(newEssays);
  };

  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | HTMLTextAreaElement
      | HTMLInputElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    const newEssays = [...essays];

    if (name.includes(".")) {
      const keys = name.split(".");
      newEssays[index] = {
        ...newEssays[index],
        [keys[0]]: {
          ...(newEssays[index] as any)[keys[0]],
          [keys[1]]: value,
        },
      };
    } else {
      newEssays[index] = {
        ...newEssays[index],
        [name]: value,
      };
    }
    setEssays(newEssays);
  };

  return (
    <div className="pt-2">
      <ScrollArea className="">
        {essays.map((essay, index) => (
          <div key={index} className="flex flex-col gap-4 pt-2">
            <div className="font-medium flex justify-between items-center mr-4">
              Essay - {index + 1}
              <div className="border h-0 border-purple-50 dark:border-gray-800 w-[75%]"></div>
              <RemoveFields handleRemove={() => handleRemoveEssay(index)} />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-5/6">
                <Label htmlFor="title">Title</Label>
                <Input
                  type="text"
                  id="title"
                  name="title"
                  value={essay.title}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Title"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="type">Essay Type</Label>
                <Select
                  value={essay.type}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "type", value },
                      } as React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >,
                      index
                    );
                  }}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Essay Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal Statement">
                      Personal Statement
                    </SelectItem>
                    <SelectItem value="Statement of Purpose">
                      Statement of Purpose
                    </SelectItem>
                    <SelectItem value="Diversity Statement">
                      Diversity Statement
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/5">
                <Label htmlFor="type">Associated University</Label>
                <Select
                  value={essay.associatedUniversity}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "associatedUniversity", value },
                      } as React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >,
                      index
                    );
                  }}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Associated University " />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Personal Statement">
                      Personal Statement
                    </SelectItem>
                    <SelectItem value="Statement of Purpose">
                      Statement of Purpose
                    </SelectItem>
                    <SelectItem value="Diversity Statement">
                      Diversity Statement
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/5">
                <Label htmlFor="wordLimit">Word Limit</Label>
                <Input
                  type="number"
                  id="wordLimit"
                  name="wordLimit"
                  value={essay.wordLimit}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Word Limit"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={essay.status}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "status", value },
                      } as React.ChangeEvent<
                        | HTMLInputElement
                        | HTMLSelectElement
                        | HTMLTextAreaElement
                      >,
                      index
                    );
                  }}
                >
                  <SelectTrigger className="">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Pending</SelectItem>
                    <SelectItem value="dark">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-5/6">
                <Label htmlFor="essayPrompt">Essay Prompt</Label>
                <Textarea
                  id="essayPrompt"
                  value={essay.essayPrompt}
                  name="essayPrompt"
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Essay Prompt"
                />
              </div>
              <div className="w-5/6 flex items-center gap-2">
                <Checkbox
                  id="globalUse"
                  name="globalUse"
                  checked={essay.globalUse}
                  onCheckedChange={() => {
                    const newEssays = [...essays];
                    newEssays[index] = {
                      ...newEssays[index],
                      globalUse: !newEssays[index].globalUse,
                    };
                    setEssays(newEssays);
                  }}
                />
                Use this essay for all applications
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex justify-end mt-4">
        <Button variant="sleekTransparent" onClick={handleAddEssay}>
          <IoAdd className="text-lg" />
          Add Essay
        </Button>
      </div>
    </div>
  );
};

export default Essay;
