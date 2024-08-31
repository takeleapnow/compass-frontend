const DocInfoSection = ({
  prompt,
  wordLimit,
  currWordCount,
}: {
  prompt: string;
  wordLimit: number;
  currWordCount: number;
}) => {
  return (
    <div className="flex flex-col gap-2 items-end w-full">
      <div className="bg-purple-50 text-sm px-4 py-2 rounded-md w-full">{prompt}</div>
      <div className="flex justify-end items-center bg-gray-100   px-4 py- text-sm rounded-full">
        {currWordCount} / {wordLimit} words
      </div>
    </div>
  );
};

export default DocInfoSection;
