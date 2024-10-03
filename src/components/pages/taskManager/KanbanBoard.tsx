import { useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { BoardColumn, BoardContainer } from "./BoardColumn";
import {
    DndContext,
    type DragEndEvent,
    type DragOverEvent,
    DragOverlay,
    type DragStartEvent,
    useSensor,
    useSensors,
    KeyboardSensor,
    Announcements,
    UniqueIdentifier,
    TouchSensor,
    MouseSensor,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { type Task, TaskCard } from "./TaskCard";
import type { Column } from "./BoardColumn";
import { hasDraggableData } from "./utils";
import { coordinateGetter } from "./multipleContainersKeyboardPreset";
import AddSectionModal from "./ui/AddSectionModal";

export const defaultCols = [
    {
        id: "todo",
        title: "Todo",
    },
    {
        id: "in-progress",
        title: "In progress",
    },
    {
        id: "done",
        title: "Done",
    },
] satisfies Column[];

export type ColumnId = (typeof defaultCols)[number]["id"];

export const initialTasks: Task[] = [
    {
        id: "task1",
        columnId: "done",
        content: "Project initiation and planning",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task2",
        columnId: "done",
        content: "Gather requirements from stakeholders",
        priority: "low",
        transcript: "LOR",
        deadline: "25/08/2024",
    },
    {
        id: "task3",
        columnId: "done",
        content: "Create wireframes and mockups",
        priority: "medium",
        transcript: "Resume",
        deadline: "25/08/2024",
    },
    {
        id: "task4",
        columnId: "in-progress",
        content: "Develop homepage layout",
        priority: "high",
        transcript: "LOR",
        deadline: "25/08/2024",
    },
    {
        id: "task5",
        columnId: "in-progress",
        content: "Design color scheme and typography",
        priority: "high",
        transcript: "Resume",
        deadline: "25/08/2024",
    },
    {
        id: "task6",
        columnId: "todo",
        content: "Implement user authentication",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task7",
        columnId: "todo",
        content: "Build contact us page",
        priority: "high",
        transcript: "Other",
        deadline: "25/08/2024",
    },
    {
        id: "task8",
        columnId: "todo",
        content: "Create product catalog",
        priority: "high",
        transcript: "Other",
        deadline: "25/08/2024",
    },
    {
        id: "task9",
        columnId: "todo",
        content: "Develop about us page",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task10",
        columnId: "todo",
        content: "Optimize website for mobile devices",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task11",
        columnId: "extra",
        content: "Integrate payment gateway",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task12",
        columnId: "extra",
        content: "Perform testing and bug fixing",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
    {
        id: "task13",
        columnId: "extra",
        content: "Launch website and deploy to server",
        priority: "high",
        transcript: "SOP",
        deadline: "25/08/2024",
    },
];
export interface KanbanBoardProps {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    addTask: (task: Task) => void;
}
export function KanbanBoard({ tasks, setTasks, addTask }: KanbanBoardProps) {
    const [columns, setColumns] = useState<Column[]>(defaultCols);
    const pickedUpTaskColumn = useRef<ColumnId | null>(null);
    const columnsId = useMemo(() => columns.map((col) => col.id), [columns]);

    // const [tasks, setTasks] = useState<Task[]>(initialTasks);

    const [activeColumn, setActiveColumn] = useState<Column | null>(null);

    const [activeTask, setActiveTask] = useState<Task | null>(null);

    const [open, setOpen] = useState(false);

    const sensors = useSensors(
        useSensor(MouseSensor),
        useSensor(TouchSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: coordinateGetter,
        })
    );

    function getDraggingTaskData(taskId: UniqueIdentifier, columnId: ColumnId) {
        const tasksInColumn = tasks.filter((task) => task.columnId === columnId);
        const taskPosition = tasksInColumn.findIndex((task) => task.id === taskId);
        const column = columns.find((col) => col.id === columnId);
        return {
            tasksInColumn,
            taskPosition,
            column,
        };
    }

    const announcements: Announcements = {
        onDragStart({ active }) {
            if (!hasDraggableData(active)) return;
            if (active.data.current?.type === "Column") {
                const startColumnIdx = columnsId.findIndex((id) => id === active.id);
                const startColumn = columns[startColumnIdx];
                return `Picked up Column ${startColumn?.title} at position: ${startColumnIdx + 1
                    } of ${columnsId.length}`;
            } else if (active.data.current?.type === "Task") {
                pickedUpTaskColumn.current = active.data.current.task.columnId;
                const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
                    active.id,
                    pickedUpTaskColumn.current != null ? pickedUpTaskColumn.current : "todo"
                );
                return `Picked up Task ${active.data.current.task.content
                    } at position: ${taskPosition + 1} of ${tasksInColumn.length
                    } in column ${column?.title}`;
            }
        },
        onDragOver({ active, over }) {
            if (!hasDraggableData(active) || !hasDraggableData(over)) return;

            if (
                active.data.current?.type === "Column" &&
                over.data.current?.type === "Column"
            ) {
                const overColumnIdx = columnsId.findIndex((id) => id === over.id);
                return `Column ${active.data.current.column.title} was moved over ${over.data.current.column.title
                    } at position ${overColumnIdx + 1} of ${columnsId.length}`;
            } else if (
                active.data.current?.type === "Task" &&
                over.data.current?.type === "Task"
            ) {
                const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
                    over.id,
                    over.data.current.task.columnId
                );
                if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
                    return `Task ${active.data.current.task.content} was moved over column ${column?.title
                        } in position ${taskPosition + 1} of ${tasksInColumn.length}`;
                }
                return `Task was moved over position ${taskPosition + 1
                    } of ${tasksInColumn.length} in column ${column?.title}`;
            }
        },
        onDragEnd({ active, over }) {
            if (!hasDraggableData(active) || !hasDraggableData(over)) {
                pickedUpTaskColumn.current = null;
                return;
            }
            if (
                active.data.current?.type === "Column" &&
                over.data.current?.type === "Column"
            ) {
                const overColumnPosition = columnsId.findIndex((id) => id === over.id);

                return `Column ${active.data.current.column.title} was dropped into position ${overColumnPosition + 1
                    } of ${columnsId.length}`;
            } else if (
                active.data.current?.type === "Task" &&
                over.data.current?.type === "Task"
            ) {
                const { tasksInColumn, taskPosition, column } = getDraggingTaskData(
                    over.id,
                    over.data.current.task.columnId
                );
                if (over.data.current.task.columnId !== pickedUpTaskColumn.current) {
                    return `Task was dropped into column ${column?.title
                        } in position ${taskPosition + 1} of ${tasksInColumn.length}`;
                }
                return `Task was dropped into position ${taskPosition + 1
                    } of ${tasksInColumn.length} in column ${column?.title}`;
            }
            pickedUpTaskColumn.current = null;
        },
        onDragCancel({ active }) {
            pickedUpTaskColumn.current = null;
            if (!hasDraggableData(active)) return;
            return `Dragging ${active.data.current?.type} cancelled.`;
        },
    };

    const handleAddSection = (id: string, title: string) => {
        setColumns((prevColumns) => [
            ...prevColumns,
            {
                id: `${id}`, // Ensure a unique id for each new section
                title: title,
            },
        ]);
    };
    const handleDeleteTask = (taskId: UniqueIdentifier) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    };

    const handleDeleteColumn = (columnId: ColumnId) => {
        setColumns((prevColumns) => prevColumns.filter((column) => column.id !== columnId));
        setTasks((prevTasks) => prevTasks.filter((task) => task.columnId !== columnId));
    };
    // const handleAddTask = (
    //     id: UniqueIdentifier,
    //     columnId: ColumnId,
    //     content: string,
    //     priority: 'high' | 'medium' | 'low',
    //     transcript: 'SOP' | 'LOR' | 'Resume' | 'Other',
    //     deadline: string
    // ) => {
    //     setTasks((prevTasks) => [
    //         ...prevTasks,
    //         { id, columnId, content, priority, transcript, deadline }
    //     ]);
    // };
    return (
        <div className="flex flex-col h-full justify-start items-start gap-y-4">
            {/* <div className="flex w-full justify-end items-center"> */}
            {/* <Button onClick={handleAddSection}> */}
            {/* <CirclePlusIcon className="mr-2 h-4 w-4" /> Add Section */}
            {/* </Button> */}
            {/* <AddSectionModal handleAddSection={handleAddSection} open={open} setOpen={setOpen} /> */}
            {/* </div> */}
            <div className="max-w-screen-xl">
                <DndContext
                    accessibility={{
                        announcements,
                    }}
                    sensors={sensors}
                    onDragStart={onDragStart}
                    onDragEnd={onDragEnd}
                    onDragOver={onDragOver}
                >

                    <BoardContainer>
                        <SortableContext items={columnsId}>
                            {columns.map((col) => (
                                <BoardColumn
                                    key={col.id}
                                    column={col}
                                    tasks={tasks.filter((task) => task.columnId === col.id)}
                                    setTasks={setTasks}
                                    handleDeleteTask={handleDeleteTask}
                                    handleDeleteColumn={handleDeleteColumn}
                                    addTask={addTask}
                                />
                            ))}
                            <AddSectionModal handleAddSection={handleAddSection} open={open} setOpen={setOpen} />

                        </SortableContext>
                    </BoardContainer>

                    {"document" in window &&
                        createPortal(
                            <DragOverlay>
                                {activeColumn && (
                                    <BoardColumn
                                        isOverlay
                                        column={activeColumn}
                                        tasks={tasks.filter(
                                            (task) => task.columnId === activeColumn.id
                                        )}
                                        setTasks={setTasks}
                                        handleDeleteTask={handleDeleteTask}
                                        handleDeleteColumn={handleDeleteColumn}
                                        addTask={addTask}
                                    />
                                )}
                                {activeTask && <TaskCard task={activeTask} isOverlay handleDeleteTask={handleDeleteTask} />}
                            </DragOverlay>,
                            document.body
                        )}
                </DndContext>
            </div>

        </div>
    );

    function onDragStart(event: DragStartEvent) {
        if (!hasDraggableData(event.active)) return;
        const data = event.active.data.current;
        if (data?.type === "Column") {
            setActiveColumn(data.column);
            return;
        }

        if (data?.type === "Task") {
            setActiveTask(data.task);
            return;
        }
    }

    function onDragEnd(event: DragEndEvent) {
        setActiveColumn(null);
        setActiveTask(null);

        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (!hasDraggableData(active)) return;

        const activeData = active.data.current;

        if (activeId === overId) return;

        const isActiveAColumn = activeData?.type === "Column";
        if (!isActiveAColumn) return;

        setColumns((columns) => {
            const activeColumnIndex = columns.findIndex((col) => col.id === activeId);

            const overColumnIndex = columns.findIndex((col) => col.id === overId);

            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    }

    function onDragOver(event: DragOverEvent) {
        const { active, over } = event;
        if (!over) return;

        const activeId = active.id;
        const overId = over.id;

        if (activeId === overId) return;

        if (!hasDraggableData(active) || !hasDraggableData(over)) return;

        const activeData = active.data.current;
        const overData = over.data.current;

        const isActiveATask = activeData?.type === "Task";
        const isOverATask = overData?.type === "Task";

        if (!isActiveATask) return;

        // Im dropping a Task over another Task
        if (isActiveATask && isOverATask) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const overIndex = tasks.findIndex((t) => t.id === overId);
                const activeTask = tasks[activeIndex];
                const overTask = tasks[overIndex];
                if (
                    activeTask &&
                    overTask &&
                    activeTask.columnId !== overTask.columnId
                ) {
                    activeTask.columnId = overTask.columnId;
                    return arrayMove(tasks, activeIndex, overIndex - 1);
                }

                return arrayMove(tasks, activeIndex, overIndex);
            });
        }

        const isOverAColumn = overData?.type === "Column";

        // Im dropping a Task over a column
        if (isActiveATask && isOverAColumn) {
            setTasks((tasks) => {
                const activeIndex = tasks.findIndex((t) => t.id === activeId);
                const activeTask = tasks[activeIndex];
                if (activeTask) {
                    activeTask.columnId = overId as ColumnId;
                    return arrayMove(tasks, activeIndex, activeIndex);
                }
                return tasks;
            });
        }
    }
}