const DocInfoSection = ({
  prompt,
  wordLimit,
  currWordCount,
  editorType,
  setEditorType,
}: {
  prompt: string;
  wordLimit: number;
  currWordCount: number;
  editorType: string;
  setEditorType: (val: string) => void;
}) => {
  return (
    <div className="flex flex-col gap-4  w-full">
      <div className="bg-purple-50 text-sm px-4  py-2 rounded-lg w-full">
        {prompt}
      </div>
      <div className="flex justify-between w-full items-center  py- text-sm rounded-full">
        <div className="border border-lightPrimary rounded-full">
          <button
            className={`${
              editorType === "plain"
                ? "bg-lightPrimary text-gray-100"
                : "text-gray-600"
            } px-3 py-1 rounded-full `}
            onClick={() => setEditorType("plain")}
          >
            Plain Editor
          </button>
          <button
            className={`${
              editorType === "template"
                ? "bg-lightPrimary text-gray-100"
                : "text-gray-600"
            } px-3 py-1 rounded-full `}
            onClick={() => setEditorType("template")}
          >
            Template based
          </button>
        </div>
        <p className="border border-lightAccent px-4 py-1 rounded-full">
          {currWordCount} / {wordLimit} words
        </p>
      </div>
    </div>
  );
};

export default DocInfoSection;
