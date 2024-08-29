import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { UniqueIdentifier, useDndContext } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import { Task, TaskCard } from "./TaskCard";
import { cva } from "class-variance-authority";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { GripVertical, LucideTrash2 } from "lucide-react";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import AddTaskModal from "./ui/AddTaskModal";
import { ColumnId } from "./KanbanBoard";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


export interface Column {
    id: string;
    title: string;
}

export type ColumnType = "Column";

export interface ColumnDragData {
    type: ColumnType;
    column: Column;
}

interface BoardColumnProps {
    column: Column;
    tasks: Task[];
    isOverlay?: boolean;
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    handleDeleteTask: (taskId: UniqueIdentifier) => void;
    handleDeleteColumn: (columnId: ColumnId) => void;
    addTask: (newTask: Task) => void;
}

export function BoardColumn({ column, tasks, isOverlay, setTasks, handleDeleteTask, handleDeleteColumn, addTask }: BoardColumnProps) {
    const [open, setOpen] = useState(false);
    const tasksIds = useMemo(() => {
        return tasks.map((task) => task.id);
    }, [tasks]);

    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: column.id,
        data: {
            type: "Column",
            column,
        } satisfies ColumnDragData,
        attributes: {
            roleDescription: `Column: ${column.title}`,
        },
    });

    const style = {
        transition,
        transform: CSS.Translate.toString(transform),
        background: "rgba(103, 58, 183, 0.08)",
    };

    const variants = cva(
        "h-[500px] max-h-[500px] w-[350px] max-w-full bg-primary-foreground flex flex-col flex-shrink-0 snap-center",
        {
            variants: {
                dragging: {
                    default: "border-2 border-transparent",
                    over: "ring-2 opacity-30",
                    overlay: "ring-2 ring-primary",
                },
            },
        },
    );
    const handleAddTask = ({ columnId, content, priority, transcript, deadline }: Task) => {
        // setTasks((prevTasks) => [...prevTasks, { id: `task${prevTasks.length + 1}`, columnId, content, priority, transcript, deadline }]);
        // const newTask = { columnId, content, priority, transcript, deadline }
        addTask({ id: `task${tasks.length + 1}`, columnId, content, priority, transcript, deadline })
    }
    return (
        <Card
            ref={setNodeRef}
            style={style}
            className={variants({
                dragging: isOverlay ? "overlay" : isDragging ? "over" : undefined,
            })}

        >
            <CardHeader className="p-4 font-semibold border-b-2 text-left flex flex-row justify-between items-center">
                <Button
                    variant={"ghost"}
                    {...attributes}
                    {...listeners}
                    className=" p-1 text-primary/50 -ml-2 h-auto cursor-grab relative"
                >
                    <span className="sr-only">{`Move column: ${column.title}`}</span>
                    <GripVertical />
                </Button>
                <span className="inline-flex items-center justify-center">{column.title}</span>
                <div className="flex gap-x-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <AddTaskModal handleAddTask={handleAddTask} open={open} setOpen={setOpen} columnId={column.id} length={tasks.length} />
                                <TooltipContent>
                                    <p>Add Task</p>
                                </TooltipContent>
                            </TooltipTrigger>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger>
                                <LucideTrash2 size={20} onClick={() => handleDeleteColumn(column.id)} className="hover:cursor-pointer" xlinkTitle="Delete Section" />
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Delete Column</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                {/* <Button
                    variant={"ghost"}
                    className="text-primary/50 h-auto cursor-pointer relative"
                    onClick={() => console.log("clicked")}
                >
                    <LucidePlusCircle size={20} />
                </Button> */}
            </CardHeader>
            <ScrollArea>
                <CardContent className="flex flex-grow flex-col gap-2 p-2">
                    <SortableContext items={tasksIds}>
                        {tasks.map((task) => (
                            <TaskCard key={task.id} task={task} handleDeleteTask={handleDeleteTask} />
                        ))}
                    </SortableContext>
                </CardContent>
            </ScrollArea>
        </Card>
    );
}

export function BoardContainer({ children }: { children: React.ReactNode }) {
    const dndContext = useDndContext();

    const variations = cva("px-2 md:px-0 flex lg:justify-center pb-4", {
        variants: {
            dragging: {
                default: "snap-x snap-mandatory",
                active: "snap-none",
            },
        },
    });

    return (
        <ScrollArea
            className={variations({
                dragging: dndContext.active ? "active" : "default",
            })}
        >
            <div className="flex gap-4 items-center flex-row justify-center">
                {children}
            </div>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
}