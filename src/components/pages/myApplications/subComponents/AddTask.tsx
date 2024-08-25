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
import {
  MdFormatListBulletedAdd,
  MdOutlinePlaylistRemove,
  MdOutlineTask,
} from "react-icons/md";
import DatePicker from "@/components/customComponents/DatePicker";
import { IoAdd } from "react-icons/io5";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { TooltipComponent } from "@/components/customComponents";

interface Task {
  taskName: string;
  associatedUniversity: string;
  deadline: {
    seconds: string;
    nanos: string;
  };
  associatedApplicationMaterial: string;
  priority: string;
  status: string;
  description: string;
  section: {
    id: number;
    name: string;
  };
}
const AddTask = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      taskName: "",
      associatedUniversity: "",
      deadline: {
        seconds: "",
        nanos: "",
      },
      associatedApplicationMaterial: "",
      priority: "",
      status: "",
      description: "",
      section: {
        id: 0,
        name: "",
      },
    },
  ]);

  const handleAddTask = () => {
    setTasks([
      ...tasks,
      {
        taskName: "",
        associatedUniversity: "",
        deadline: {
          seconds: "",
          nanos: "",
        },
        associatedApplicationMaterial: "",
        priority: "",
        status: "",
        description: "",
        section: {
          id: 0,
          name: "",
        },
      },
    ]);
  };

  const handleRemoveTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;
    const newTasks = [...tasks];

    if (name.includes(".")) {
      const keys = name.split(".");
      newTasks[index] = {
        ...newTasks[index],
        [keys[0]]: {
          ...newTasks[index][keys[0]],
          [keys[1]]: value,
        },
      };
    } else {
      newTasks[index] = {
        ...newTasks[index],
        [name]: value,
      };
    }

    setTasks(newTasks);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"sleekTransparent"} size={"sleek"}>
          <IoAdd /> Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            <MdOutlineTask /> Add Tasks
          </DialogTitle>
          <DialogDescription></DialogDescription>
          <ScrollArea className="max-h-[500px]">
            <div className="flex flex-wrap gap-4">
              {tasks.map((task, index) => (
                <div className="flex flex-col gap-4">
                  <div className="font-medium flex justify-between items-center mr-4">
                    Task - {index + 1}
                    <div className="border h-0 border-purple-50 dark:border-gray-800 w-[75%]"></div>
                    <div
                      className="text-xl cursor-pointer hover:text-red-700"
                      onClick={() => handleRemoveTask(index)}
                    >
                      <MdOutlinePlaylistRemove />
                    </div>
                  </div>
                  <div
                    key={index}
                    className="flex flex-wrap gap-4 items-center"
                  >
                    <div className="w-2/5">
                      <Label htmlFor={`taskName-${index}`}>Task Name</Label>
                      <Input
                        id={`taskName-${index}`}
                        name="taskName"
                        value={task.taskName}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Task Name"
                      />
                    </div>
                    <div className="w-2/5">
                      <Label htmlFor={`deadline-${index}`}>Deadline</Label>
                      <DatePicker
                        placeholder="Deadline"
                        setDate={(date) =>
                          handleChange(
                            {
                              target: {
                                name: "deadline.seconds",
                                value: date.seconds.toString(),
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
                            index
                          )
                        }
                        date={{
                          seconds: parseInt(task.deadline.seconds),
                          nanos: parseInt(task.deadline.nanos),
                        }}
                      />
                    </div>
                    <div className="w-2/5">
                      <Label htmlFor={`associatedUniversity-${index}`}>
                        Associated University
                      </Label>
                      <Select
                        value={task.associatedUniversity}
                        onValueChange={(value) => {
                          handleChange(
                            {
                              target: {
                                name: "associatedUniversity",
                                value: value,
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
                            index
                          );
                        }}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Associated University" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">uni 1</SelectItem>
                          <SelectItem value="dark">uni 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-2/5">
                      <Label htmlFor={`associatedApplicationMaterial-${index}`}>
                        Associated Application Material
                      </Label>
                      <Select
                        value={task.associatedApplicationMaterial}
                        onValueChange={(value) => {
                          handleChange(
                            {
                              target: {
                                name: "associatedApplicationMaterial",
                                value: value,
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
                            index
                          );
                        }}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Associated Application Material" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">mat 1</SelectItem>
                          <SelectItem value="dark">mat 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-2/5">
                      <Label htmlFor={`priority-${index}`}>Priority</Label>
                      <Select
                        value={task.priority}
                        onValueChange={(value) => {
                          handleChange(
                            {
                              target: {
                                name: "priority",
                                value: value,
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
                            index
                          );
                        }}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">High</SelectItem>
                          <SelectItem value="dark">Medium</SelectItem>
                          <SelectItem value="system">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-2/5">
                      <Label htmlFor={`status-${index}`}>Status</Label>
                      <Select
                        value={task.status}
                        onValueChange={(value) => {
                          handleChange(
                            {
                              target: {
                                name: "status",
                                value: value,
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
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

                    <div className="w-2/5">
                      <Label htmlFor={`section-${index}`}>
                        <TooltipComponent text="The section in which the task is to be added, to update sections go to task manager" />{" "}
                        Section
                      </Label>
                      <Select
                        value={task.section.name}
                        onValueChange={(value) => {
                          handleChange(
                            {
                              target: {
                                name: "section.name",
                                value: value,
                              },
                            } as React.ChangeEvent<HTMLInputElement>,
                            index
                          );
                        }}
                      >
                        <SelectTrigger className="">
                          <SelectValue placeholder="Section" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="light">Section 1</SelectItem>
                          <SelectItem value="dark">Section 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="w-5/6">
                      <Label htmlFor={`description-${index}`}>
                        Description
                      </Label>
                      <Textarea
                        id={`description-${index}`}
                        name="description"
                        value={task.description}
                        onChange={(e) => handleChange(e, index)}
                        placeholder="Description"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="flex items-end justify-end pt-8 gap-4">
            <Button variant="formGradient" onClick={handleAddTask}>
              <IoAdd />
              Add Task
            </Button>
            <Button variant="formGradient">
              <MdFormatListBulletedAdd />
              Save Tasks
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTask;
