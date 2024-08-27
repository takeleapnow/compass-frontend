import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChangeEvent, useState } from "react"
import { UniqueIdentifier } from "@dnd-kit/core"
import { ColumnId } from "../KanbanBoard" // Ensure correct import path

interface Props {
    handleAddTask: (
        id: UniqueIdentifier,
        columnId: ColumnId,
        content: string,
        priority: 'high' | 'medium' | 'low',
        transcript: 'SOP' | 'LOR' | 'Resume' | 'Other',
        deadline: string
    ) => void,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddTaskModal({ handleAddTask, open, setOpen }: Props) {
    const [id, setId] = useState<UniqueIdentifier>('');
    const [columnId, setColumnId] = useState<ColumnId>('todo'); // Default or adjust as needed
    const [content, setContent] = useState<string>('');
    const [priority, setPriority] = useState<'high' | 'medium' | 'low'>('medium');
    const [transcript, setTranscript] = useState<'SOP' | 'LOR' | 'Resume' | 'Other'>('Other');
    const [deadline, setDeadline] = useState<string>('');

    function handleIdChange(event: ChangeEvent<HTMLInputElement>): void {
        setId(event.target.value);
    }

    function handleContentChange(event: ChangeEvent<HTMLInputElement>): void {
        setContent(event.target.value);
    }

    function handlePriorityChange(event: ChangeEvent<HTMLSelectElement>): void {
        setPriority(event.target.value as 'high' | 'medium' | 'low');
    }

    function handleTranscriptChange(event: ChangeEvent<HTMLSelectElement>): void {
        setTranscript(event.target.value as 'SOP' | 'LOR' | 'Resume' | 'Other');
    }

    function handleDeadlineChange(event: ChangeEvent<HTMLInputElement>): void {
        setDeadline(event.target.value);
    }

    const addTask = () => {
        handleAddTask(id, columnId, content, priority, transcript, deadline);
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>Add Task</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add a new task to your kanban board
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="id" className="text-right">
                            ID
                        </Label>
                        <Input
                            id="id"
                            value={id}
                            className="col-span-3"
                            onChange={handleIdChange}
                        />
                    </div>
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
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="priority" className="text-right">
                            Priority
                        </Label>
                        <select
                            id="priority"
                            value={priority}
                            className="col-span-3"
                            onChange={handlePriorityChange}
                        >
                            <option value="high">High</option>
                            <option value="medium">Medium</option>
                            <option value="low">Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="transcript" className="text-right">
                            Transcript
                        </Label>
                        <select
                            id="transcript"
                            value={transcript}
                            className="col-span-3"
                            onChange={handleTranscriptChange}
                        >
                            <option value="SOP">SOP</option>
                            <option value="LOR">LOR</option>
                            <option value="Resume">Resume</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
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
                    <Button type="submit" onClick={addTask}>Save Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
