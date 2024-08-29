// Path: /components/DatePicker.js

import { useState } from "react";
import { format, getYear, getMonth, setMonth } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface DatePickerProps {
  date: {
    seconds: number;
    nanos: number;
  };
  setDate: (date: { seconds: number; nanos: number }) => void;
  placeholder: string;
}
const DatePicker = ({ date, setDate, placeholder }:
  DatePickerProps
) => {
  const [viewDate, setViewDate] = useState(date.seconds ? new Date(date.seconds * 1000) : new Date());

  // const handleYearChange = (newYear:
  //   number
  // ) => {
  //   setViewDate((prevDate) => setYear(prevDate, newYear));
  // };

  const handleMonthChange = (newMonth:
    Date
  ) => {
    setViewDate((prevDate) => setMonth(prevDate, getMonth(newMonth)));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"input"}
          className={cn(
            "justify-start text-left font-normal bg-transparent dark:bg-zinc-800 border-gray-200 hover:bg-purple-50 dark:border-gray-800",
            !date.seconds && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date.seconds ? format(new Date(date.seconds * 1000), "MM/yyyy") : <span>{placeholder}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date.seconds ? new Date(date.seconds * 1000) : undefined}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              const seconds = Math.floor(selectedDate.getTime() / 1000);
              setDate({ seconds, nanos: 0 });
            }
          }}
          initialFocus
          month={new Date(getYear(viewDate), getMonth(viewDate))}
          // year={getYear(viewDate)}
          // onYearChange={handleYearChange}
          onMonthChange={handleMonthChange}
        />
      </PopoverContent>
    </Popover>
  );
};

export default DatePicker;
