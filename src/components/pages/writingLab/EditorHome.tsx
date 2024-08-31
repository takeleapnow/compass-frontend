import Dashboard from "@/components/shared/wrappers/Dashboard";
import EditorNav from "./subComponents/EditorNav";
import DocInfoSection from "./subComponents/DocInfoSection";

const EditorHome = () => {
  return (
    <Dashboard>
      <div>
        {/* header */}
        <EditorNav
          title="Essay Writing Lab"
          subTitle="Essay 1"
          status="Pending"
        />
        {/* main content */}
        <div className="flex gap-4 mt-8 justify-between">
          {/* editor */}
          <div className="w-2/3 border">
          <DocInfoSection
           prompt="Write a 500 word essay on the topic of your choice"
              wordLimit={500}
              currWordCount={0}
          
          />
            <p>Editor </p>
          </div>
          <div className="border w-1/4">{/* help/ai */}</div>
        </div>
      </div>
    </Dashboard>
  );
};

export default EditorHome;
