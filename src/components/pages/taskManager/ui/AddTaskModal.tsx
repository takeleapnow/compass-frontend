import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import { UniqueIdentifier } from "@dnd-kit/core";
import { LucidePlusCircle } from "lucide-react";
import { Task } from "../TaskCard";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; // Import Select components

interface Props {
    handleAddTask: ({ id, columnId, content, priority, transcript, deadline }: Task) => void;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    columnId: string;
    length: number;
}

export default function AddTaskModal({ handleAddTask, open, setOpen, columnId, length }: Props) {
    const [id] = useState<UniqueIdentifier>(`task-${length + 1}`); // Unique ID for each task
    const [content, setContent] = useState<string>('');
    const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
    const [transcript, setTranscript] = useState<'SOP' | 'LOR' | 'Resume' | 'Other'>('Other');
    const [deadline, setDeadline] = useState<string>('');

    function handleContentChange(event: ChangeEvent<HTMLInputElement>): void {
        setContent(event.target.value);
    }

    function handleDeadlineChange(event: ChangeEvent<HTMLInputElement>): void {
        setDeadline(event.target.value);
    }

    const addTask = () => {
        handleAddTask({ id, columnId, content, priority, transcript, deadline });
        setOpen(false); // Close the modal after adding a task
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <LucidePlusCircle size={20} onClick={() => setOpen(true)} />
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add a new task to your kanban board
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {/* Task content input using shadcn Input component */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="content" className="text-right">
                            Content
                        </Label>
                        <Input
                            id="content"
                            value={content}
                            className="col-span-3"
                            onChange={handleContentChange}
                        />
                    </div>
                    {/* Dropdown for Priority using shadcn DropdownMenu components */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="priority" className="text-right">
                            Priority
                        </Label>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{priority.charAt(0).toUpperCase() + priority.slice(1)}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuLabel>Select Priority</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuRadioGroup
                                    value={priority}
                                    onValueChange={(value) => setPriority(value as 'high' | 'medium' | 'low')}
                                >
                                    <DropdownMenuRadioItem value="high">High</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="medium">Medium</DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="low">Low</DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    {/* Transcript input using shadcn Select component */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="transcript" className="text-right">
                            Transcript
                        </Label>
                        <Select value={transcript} onValueChange={(value) => setTranscript(value as 'SOP' | 'LOR' | 'Resume' | 'Other')}>
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select Transcript" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="SOP">SOP</SelectItem>
                                <SelectItem value="LOR">LOR</SelectItem>
                                <SelectItem value="Resume">Resume</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* Deadline input using shadcn Input component */}
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="deadline" className="text-right">
                            Deadline
                        </Label>
                        <Input
                            id="deadline"
                            value={deadline}
                            type="date"
                            className="col-span-3"
                            onChange={handleDeadlineChange}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" onClick={addTask}>Save Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
