import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { AiOutlineFilter, AiFillFilter } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const WritingLabNav = () => {
  const [filterOption, setFilterOption] = useState<string[]>([]);
  const [selectedUniversities, setSelectedUniversities] = useState<string[]>(
    []
  );
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("");

  const universities = ["Stanford", "Harvard", "MIT"]; // Example universities
  const statuses = ["Pending", "Submitted", "Accepted", "Rejected"]; // Example statuses

  const handleToggle = (
    value: string,
    setState: (val: string[]) => void,
    state: string[]
  ) => {
    if (state.includes(value)) {
      setState(state.filter((item) => item !== value));
    } else {
      setState([...state, value]);
    }
  };

  const handleSortChange = (value: string) => {
    setSortOption(value);
  };

  const handleApplyFilters = () => {
    setFilterOption([...selectedUniversities, ...selectedStatuses]);
    // Additional logic to apply filters
  };

  const handleResetFilters = () => {
    setSelectedUniversities([]);
    setSelectedStatuses([]);
    setSortOption("");
    setFilterOption([]);
    // Additional logic to reset filters
  };

  return (
    <div className="flex justify-end gap-4 h-[10%]">
      <Input className="w-1/4" placeholder="Search shortlist..." />
      {/* filter options */}
      <Popover>
        <PopoverTrigger>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {filterOption.length > 0 ? (
                  <AiFillFilter className="text-2xl" />
                ) : (
                  <AiOutlineFilter className="text-2xl" />
                )}
              </TooltipTrigger>
              <TooltipContent>
                <p>Apply Filter</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex w-full  gap-8">
            <div className="w-2/3">
              <div className="flex flex-col items-start gap-1">
                <p className="font-semibold text-sm">Universities</p>
                <ToggleGroup type="multiple" className="flex gap-2 flex-wrap">
                  {universities.map((uni) => (
                    <ToggleGroupItem
                      key={uni}
                      value={uni}
                      size={"sm"}
                      variant={"outline"}
                      className={` py-1 ${selectedUniversities.includes(uni)
                          ? "bg-purple-100 "
                          : "bg-gray-200"
                        }`}
                      onClick={() =>
                        handleToggle(
                          uni,
                          setSelectedUniversities,
                          selectedUniversities
                        )
                      }
                    >
                      {uni}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
              <div className="flex flex-col gap-1 mt-3">
                <p className="font-semibold text-sm">Status</p>
                <ToggleGroup type="multiple" className="flex gap-2 flex-wrap">
                  {statuses.map((status) => (
                    <ToggleGroupItem
                      key={status}
                      value={status}
                      size={"sm"}
                      className={` py-1 ${selectedStatuses.includes(status)
                          ? "bg-purple-100 "
                          : "bg-gray-200"
                        }`}
                      onClick={() =>
                        handleToggle(
                          status,
                          setSelectedStatuses,
                          selectedStatuses
                        )
                      }
                    >
                      {status}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1">
              <p className="font-semibold text-sm">Sort By Deadline</p>
              <ToggleGroup type="single" className="flex gap-2">
                <ToggleGroupItem
                  value="asc"
                  variant={"outline"}
                  size={"sm"}
                  className={`px-2 py-1 ${sortOption === "asc" ? "bg-purple-100 " : "bg-gray-200"
                    }`}
                  onClick={() => handleSortChange("asc")}
                >
                  Ascending
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="desc"
                  variant={"outline"}
                  size={"sm"}
                  className={`px-2 py-1 ${sortOption === "desc" ? "bg-purple-100 " : "bg-gray-200"
                    }`}
                  onClick={() => handleSortChange("desc")}
                >
                  Descending
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={handleApplyFilters} size={"sleek"}>
              Apply
            </Button>
            <Button
              variant={"sleekTransparent"}
              onClick={handleResetFilters}
              size={"sleek"}
            >
              Reset
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default WritingLabNav;
