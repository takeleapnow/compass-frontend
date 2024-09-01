const EditorNav = ({
  title,
  subTitle,
  status,
}: {
  title: string;
  subTitle?: string;
  status?: string;
}) => {
  return (
    <div className="flex justify-between w-full items-center">
      <p className="text-lightPrimary text-xl font-bold">{title} </p>
      <div className="flex gap-4 items-center">
        <p className="">{subTitle} </p>
        <p className="px-2 py-1 text-xs bg-purple-100 rounded-full">
          {status} 
        </p>
      </div>
    </div>
  );
};

export default EditorNav;
