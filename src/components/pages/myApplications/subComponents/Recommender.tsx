import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface RecommenderProps {
  recommendationType: string;
  nameOfRecommender: string;
  emailOfRecommender: string;
  organisationOfRecommender: string;
  recommenderType: string;
  relationWithApplicant: string;
  status: string;
  globalUse: boolean;
}

const Recommender = () => {
  const [recommenders, setRecommenders] = useState<RecommenderProps[]>([
    {
      recommendationType: "",
      nameOfRecommender: "",
      emailOfRecommender: "",
      organisationOfRecommender: "",
      recommenderType: "",
      relationWithApplicant: "",
      status: "",
      globalUse: false,
    },
  ]);

  const handleAddRecommender = () => {
    setRecommenders([
      ...recommenders,
      {
        recommendationType: "",
        nameOfRecommender: "",
        emailOfRecommender: "",
        organisationOfRecommender: "",
        recommenderType: "",
        relationWithApplicant: "",
        status: "",
        globalUse: false,
      },
    ]);
  };

  const handleRemoveRecommender = (index: number) => {
    const newRecommenders = [...recommenders];
    newRecommenders.splice(index, 1);
    setRecommenders(newRecommenders);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
    index: number
  ) => {
    const { name, value } = e.target;
    const newRecommenders = [...recommenders];
    newRecommenders[index] = {
      ...newRecommenders[index],
      [name]: value,
    };
    setRecommenders(newRecommenders);
  };

  const handleCheckboxChange = (index: number) => {
    const newRecommenders = [...recommenders];
    newRecommenders[index] = {
      ...newRecommenders[index],
      globalUse: !newRecommenders[index].globalUse,
    };
    setRecommenders(newRecommenders);
  };

  return (
    <div className="pt-2">
      <ScrollArea className="">
        {recommenders.map((recommender, index) => (
          <div key={index} className="flex flex-col gap-4 pt-2">
            <div className="font-medium flex justify-between items-center mr-4">
              Recommender - {index + 1}
              <div className="border h-0 border-purple-50 dark:border-gray-800 w-[75%]"></div>
              <RemoveFields handleRemove={() => handleRemoveRecommender(index)} />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-5/6">
                <Label htmlFor="recommendationType">Recommendation Type</Label>
                <Select
                  value={recommender.recommendationType}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "recommendationType", value },
                      } as React.ChangeEvent<HTMLSelectElement>,
                      index
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Recommendation Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Academic">Academic</SelectItem>
                    <SelectItem value="Professional">Professional</SelectItem>
                    <SelectItem value="Extra Curricular">Extra Curricular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/5">
                <Label htmlFor="nameOfRecommender">Name</Label>
                <Input
                  type="text"
                  id="nameOfRecommender"
                  name="nameOfRecommender"
                  value={recommender.nameOfRecommender}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Name of Recommender"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="emailOfRecommender">Email</Label>
                <Input
                  type="email"
                  id="emailOfRecommender"
                  name="emailOfRecommender"
                  value={recommender.emailOfRecommender}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Email of Recommender"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="organisationOfRecommender">
                  Organisation/Institute
                </Label>
                <Input
                  type="text"
                  id="organisationOfRecommender"
                  name="organisationOfRecommender"
                  value={recommender.organisationOfRecommender}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Organisation of Recommender"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="recommenderType">Recommender Type</Label>
                <Select
                  value={recommender.recommenderType}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "recommenderType", value },
                      } as React.ChangeEvent<HTMLSelectElement>,
                      index
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Recommender Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Primary">Primary</SelectItem>
                    <SelectItem value="Backup">Backup</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-2/5">
                <Label htmlFor="relationWithApplicant">
                  Relation with Applicant
                </Label>
                <Input
                  type="text"
                  id="relationWithApplicant"
                  name="relationWithApplicant"
                  value={recommender.relationWithApplicant}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Relation with Applicant"
                />
              </div>
              <div className="w-2/5">
                <Label htmlFor="status">Status</Label>
                <Select
                  value={recommender.status}
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
                  checked={recommender.globalUse}
                  onCheckedChange={() => handleCheckboxChange(index)}
                />
                Use this recommendation for all applications
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex justify-end mt-4">
        <Button variant="sleekTransparent" onClick={handleAddRecommender}>
          <IoAdd className="text-lg" />
          Add Recommender
        </Button>
      </div>
    </div>
  );
};

export default Recommender;
