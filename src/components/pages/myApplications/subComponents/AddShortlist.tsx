import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { MdFormatListBulletedAdd, MdOutlineFileDownloadDone } from "react-icons/md";
import DatePicker from "@/components/customComponents/DatePicker";
import { TooltipComponent } from "@/components/customComponents";
import { FaUniversity } from "react-icons/fa";

const AddShortlist = () => {
  const [shortlist, setShortlist] = useState({
    universityName: "",
    program: "",
    applicationFees: {
      currency: "",
      amount: 0,
    },
    applicationDeadline: {
      seconds: 0,
      nanos: 0,
    },
    //format?
    time: "",
    portalLink: "",
    decisionDate: {
      seconds: 0,
      nanos: 0,
    },
    status: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShortlist({
      ...shortlist,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button>
          <MdFormatListBulletedAdd className="text-lg" /> Add shortlist
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle><FaUniversity /> Add new University shortlist</DialogTitle>
          <DialogDescription></DialogDescription>
          <div className="flex flex-wrap gap-4">
            <div className="w-2/5">
              <Label>University name</Label>
              <Input
                type="text"
                name="universityName"
                value={shortlist.universityName}
                onChange={handleChange}
                placeholder="University name"
              />
            </div>
            <div className="w-2/5">
              <Label>Program</Label>
              <Input
                type="text"
                name="program"
                value={shortlist.program}
                onChange={handleChange}
                placeholder="Program"
              />
            </div>

            <div className="w-3/5">
              <Label>Application fees</Label>
              <div className="flex gap-2">
                <Select
                  value={shortlist.applicationFees.currency}
                  onValueChange={(value) => {
                    setShortlist({
                      ...shortlist,
                      applicationFees: {
                        ...shortlist.applicationFees,
                        currency: value,
                      },
                    });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">USD</SelectItem>
                    <SelectItem value="dark">INR</SelectItem>
                    <SelectItem value="system">EU</SelectItem>
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  name="applicationFees"
                  value={shortlist.applicationFees.amount}
                  onChange={(e) => {
                    setShortlist({
                      ...shortlist,
                      applicationFees: {
                        ...shortlist.applicationFees,
                        amount: Number(e.target.value),
                      },
                    });
                  }}
                  placeholder="application fees"
                />
              </div>
            </div>
            <div className="w-2/5">
              <Label><TooltipComponent text="Deadline to apply to the program on university portal" />Application deadline</Label>
              <DatePicker
                date={shortlist.applicationDeadline}
                setDate={(date) =>
                  setShortlist({
                    ...shortlist,
                    applicationDeadline: date,
                  })
                }
                placeholder="Application deadline"
              />
            </div>
            <div className="w-2/5">
              <Label>Time</Label>
              <Input
                type="text"
                name="time"
                value={shortlist.time}
                onChange={handleChange}
                placeholder="Time"
              />
            </div>
            <div className="w-2/5">
              <Label>Portal link</Label>
              <Input
                type="text"
                name="portalLink"
                value={shortlist.portalLink}
                onChange={handleChange}
                placeholder="Portal link"
              />
            </div>
            <div className="w-2/5">
              <Label>
                <TooltipComponent text="The date by which you want to decide about the application" />
                Decision date
              </Label>
              <DatePicker
                date={shortlist.decisionDate}
                setDate={(date) =>
                  setShortlist({
                    ...shortlist,
                    decisionDate: date,
                  })
                }
                placeholder="Decision date"
              />
            </div>
            <div className="w-2/5">
              <Label>Status</Label>
              <Select
                value={shortlist.status}
                onValueChange={(value) => {
                  setShortlist({
                    ...shortlist,
                    status: value,
                  });
                }}
              >
                <SelectTrigger className="">
                  <SelectValue placeholder="Status of application" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Applying">Applying</SelectItem>
                  <SelectItem value="Considering">Considering</SelectItem>
                  <SelectItem value="Submitted">Submitted</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-end justify-end pt-8">
            <Button variant="formGradient"><MdOutlineFileDownloadDone />Add shortlist</Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddShortlist;
