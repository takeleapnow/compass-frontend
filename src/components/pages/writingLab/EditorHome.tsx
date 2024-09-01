import Dashboard from "@/components/shared/wrappers/Dashboard";
import EditorNav from "./subComponents/EditorNav";
import DocInfoSection from "./subComponents/DocInfoSection";
import { useState } from "react";
import Editor from "./subComponents/Editor";
import EditorSidebar from "./EditorSidebar";
import { ScrollArea } from "@/components/ui/scroll-area";

const EditorHome = () => {
  const [editorType, setEditorType] = useState<string>("plain"); // can have "plain" or "template" as values
  const [currWordCount, setCurrWordCount] = useState<number>(0);
  return (
    <Dashboard>
      <div>
        {/* header */}
        <EditorNav
          title="Essay Title"
          subTitle="Essay subtitle"
          status="Pending"
        />
        {/* main content */}
        <div className="flex gap-4 mt-8 justify-between">
          {/* editor */}
          <div className="w-2/3 ">
            <DocInfoSection
              prompt={
                "An essay is a piece of writing that can be used to inform or convince the reader about a specific topic. It can also be used to present a logical and intellectual discussion of a topic. Some types of essays include:  Expository essays: These essays explain or investigate a specific subject.  Descriptive essays: These essays provide a detailed description of a person, place, event, emotion, situation, or object.  Persuasive essays: These essays aim to get the reader to agree with the writer or change their minds.  Argumentative essays: These essays help the reader understand different viewpoints on a topic.  Narrative essays: These essays tell a story from the first-person point of view.  Compare and contrast essays: These essays compare and contrast two subjects to highlight their key differences and similarities.  Analytical essays: These essays analyze an event, occurrence, or literary form.  Admissions essays: These essays present an argument about the applicant's suitability for graduate study. "
              }
              wordLimit={500}
              currWordCount={currWordCount}
              editorType={editorType}
              setEditorType={setEditorType}
            />
            <div className="mt-4">
              <ScrollArea className="h-[80vh]">
                <Editor
                  placeholder="Start typing..."
                  currWordCount={currWordCount}
                  setCurrWordCount={setCurrWordCount}
                />
              </ScrollArea>
            </div>
          </div>
          <div className=" w-1/3 2xl:w-1/4">
            <EditorSidebar />
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default EditorHome;
