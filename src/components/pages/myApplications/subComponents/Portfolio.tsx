import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RemoveFields } from "@/components/customComponents";
import { IoAdd } from "react-icons/io5";

interface PortfolioProps {
  portfolioPrompt: string;
  portfolioStatus: string;
  globalUse: boolean;
}

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState<PortfolioProps[]>([
    {
      portfolioPrompt: "",
      portfolioStatus: "",
      globalUse: false,
    },
  ]);

  const handleAddPortfolio = () => {
    setPortfolios([
      ...portfolios,
      {
        portfolioPrompt: "",
        portfolioStatus: "",
        globalUse: false,
      },
    ]);
  };

  const handleRemovePortfolio = (index: number) => {
    const newPortfolios = [...portfolios];
    newPortfolios.splice(index, 1);
    setPortfolios(newPortfolios);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>
  , index: number) => {
    const { name, value } = e.target;
    const newPortfolios = [...portfolios];
    newPortfolios[index] = {
      ...newPortfolios[index],
      [name]: value,
    };
    setPortfolios(newPortfolios);
  };

  const handleCheckboxChange = (index: number) => {
    const newPortfolios = [...portfolios];
    newPortfolios[index] = {
      ...newPortfolios[index],
      globalUse: !newPortfolios[index].globalUse,
    };
    setPortfolios(newPortfolios);
  };

  return (
    <div className="pt-2">
      <ScrollArea className="">
        {portfolios.map((portfolio, index) => (
          <div key={index} className="flex flex-col gap-4 pt-2">
            <div className="font-medium flex justify-between items-center mr-4">
              Portfolio - {index + 1}
              <div className="border h-0 border-purple-50 dark:border-gray-800 w-[75%]"></div>
              <RemoveFields handleRemove={() => handleRemovePortfolio(index)} />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="w-5/6">
                <Label htmlFor="portfolioPrompt">Portfolio Prompt</Label>
                <Textarea
                  id="portfolioPrompt"
                  name="portfolioPrompt"
                  value={portfolio.portfolioPrompt}
                  onChange={(e) => handleChange(e, index)}
                  placeholder="Portfolio Prompt"
                />
              </div>
              <div className="w-5/6">
                <Label htmlFor="portfolioStatus">Portfolio Status</Label>
                <Select
                  value={portfolio.portfolioStatus}
                  onValueChange={(value) => {
                    handleChange(
                      {
                        target: { name: "portfolioStatus", value },
                      } as React.ChangeEvent<HTMLSelectElement>,
                      index
                    );
                  }}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Portfolio Status" />
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
                  checked={portfolio.globalUse}
                  onCheckedChange={() => handleCheckboxChange(index)}
                />
                Use this portfolio for all applications
              </div>
            </div>
          </div>
        ))}
      </ScrollArea>
      <div className="flex justify-end mt-4">
        <Button variant="sleekTransparent" onClick={handleAddPortfolio}>
          <IoAdd className="text-lg" />
          Add Portfolio
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
