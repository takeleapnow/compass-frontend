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
import { LucidePlusCircle } from "lucide-react"
// import { Column } from "../BoardColumn"
import { ChangeEvent, useState } from "react"

interface Props {
    handleAddSection: (id: string, title: string) => void,
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AddSectionModal({ handleAddSection, open, setOpen }: Props) {
    const [title, setTitle] = useState<string>("");
    function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
        setTitle(event?.target?.value);
    }
    const addSection = () => {
        handleAddSection(title.toLowerCase(), title);
        setOpen(false);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {/* <Button  variant={"ghost"}> */}
                <LucidePlusCircle size={64} onClick={() => setOpen(true)} className="hover:cursor-pointer text-lightPrimary p-2 hover:bg-lightAccent transition-all delay-100 ease-in-out rounded-full" strokeWidth={1} />
                {/* Add Section */}
                {/* </Button> */}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit profile</DialogTitle>
                    <DialogDescription>
                        Add a new section to your kanban board
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Title
                        </Label>
                        <Input
                            id="name"
                            defaultValue="New Section"
                            className="col-span-3"
                            onChange={handleNameChange}
                        />
                    </div>
                    {/* <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div> */}
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={addSection}>Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
