import { useState, useRef, useMemo, useEffect } from "react";
import JoditEditor, { Jodit } from "jodit-react";
import Editor from "./Editor";

interface EditorProps {
    placeholder: string;
    currWordCount?: number;
    setCurrWordCount?: (val: number) => void;
}

const TemplateEditor = ({
    placeholder,
    currWordCount,
    setCurrWordCount,
}: EditorProps) => {
    return (
        <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-y-4">
                <div className="bg-blue-300 w-1/3 rounded-full">
                    <p className="px-4 py-2 text-center">Part 1: Introduction</p>
                </div>
                <div>
                    <Editor
                        placeholder="Part 1..."
                        currWordCount={currWordCount}
                        setCurrWordCount={setCurrWordCount}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="bg-blue-300 w-1/3 rounded-full">
                    <p className="px-4 py-2 text-center">Part 2: Experience</p>
                </div>
                <div>
                    <Editor
                        placeholder="Part 2..."
                        currWordCount={currWordCount}
                        setCurrWordCount={setCurrWordCount}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="bg-blue-300 w-1/3 rounded-full">
                    <p className="px-4 py-2 text-center">Part 3: About Program</p>
                </div>
                <div>
                    <Editor
                        placeholder="Part 3..."
                        currWordCount={currWordCount}
                        setCurrWordCount={setCurrWordCount}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4">
                <div className="bg-blue-300 w-1/3 rounded-full">
                    <p className="px-4 py-2 text-center">Part 4: Conclusion</p>
                </div>
                <div>
                    <Editor
                        placeholder="Part 4..."
                        currWordCount={currWordCount}
                        setCurrWordCount={setCurrWordCount}
                    />
                </div>
            </div>
        </div>
    );
};

export default TemplateEditor;
