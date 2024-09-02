import type { UniqueIdentifier } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Card, CardContent, CardHeader } from "@/components/pages/taskManager/ui/card";
import { Button } from "@/components/pages/taskManager/ui/button";
import { cva } from "class-variance-authority";
import { GripVertical, LucideTrash2 } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Import DropdownMenu components
import { useState } from "react"; // Import useState for managing state
import { ColumnId } from "./KanbanBoard";
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Define task interface with priority
export interface Task {
    id: UniqueIdentifier;
    columnId: ColumnId;
    content: string;
    priority: 'high' | 'medium' | 'low'; // New field added
    transcript: 'SOP' | 'LOR' | 'Resume' | 'Other'; // New field added
    deadline: string;
}

interface TaskCardProps {
    task: Task;
    isOverlay?: boolean;
    handleDeleteTask: (taskId: UniqueIdentifier) => void;
}

export type TaskType = "Task";

export interface TaskDragData {
    type: TaskType;
    task: Task;
}

export function TaskCard({ task, isOverlay, handleDeleteTask }: TaskCardProps) {
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        } satisfies TaskDragData,
        attributes: {
            roleDescription: "Task",
        },
    });

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
    };

    const variants = cva("", {
        variants: {
            dragging: {
                over: "ring-2 opacity-30",
                overlay: "ring-2 ring-primary",
            },
        },
    });

    // State for managing task priority
    const [priority, setPriority] = useState(task.priority);

    // Function to handle priority change
    const handlePriorityChange = (newPriority: 'high' | 'medium' | 'low') => {
        setPriority(newPriority);
        task.priority = newPriority; // Update the task priority
    };

    // Determine badge color based on priority
    const badgeColor = {
        high: 'bg-red-800 text-white',
        medium: 'bg-green-500 text-white',
        low: 'bg-yellow-500 text-black',
    }[priority];

    return (
        <Card
            ref={setNodeRef}
            style={style}
            className={variants({
                dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
            })}
        >
            <CardHeader className="px-3 pt-3 flex flex-row justify-between items-center relative">
                <Button
                    variant={"ghost"}
                    {...attributes}
                    {...listeners}
                    className="p-1 text-secondary-foreground/50 -ml-2 h-auto cursor-grab"
                >
                    <span className="sr-only">Move task</span>
                    <GripVertical />
                </Button>
                <CardContent className="text-left whitespace-pre-wrap text-ellipsis">
                    {task.content}
                </CardContent>
                {/* Dropdown Menu for Priority Selection */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            className={`ml-auto font-semibold ${badgeColor} px-4 py-2 rounded-full text-xs w-16 h-6`}
                        >
                            {priority.charAt(0).toUpperCase() + priority.slice(1)} {/* Capitalize first letter */}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => handlePriorityChange('high')}>
                            High
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handlePriorityChange('medium')}>
                            Medium
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handlePriorityChange('low')}>
                            Low
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardHeader>
            <div className="flex justify-between px-3 py-3">
                <Badge variant="secondary">{task.transcript}</Badge>
                <div className="flex justify-end items-center gap-x-2">
                    <Badge variant="outline">Deadline: {task.deadline}</Badge>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <LucideTrash2 size={20} onClick={() => { handleDeleteTask(task.id) }} className="hover:cursor-pointer" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Delete Task</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
            </div>
            {/* <CardContent className="px-3 pt-3 pb-6 text-left whitespace-pre-wrap">
                {task.content}
            </CardContent> */}
        </Card>
    );
}
