
const WritingLabCard = ({
  title,
  subTitle,
  status,
  deadline,
  university,
}: {
  title: string;
  subTitle: string;
  status: string;
  deadline: string;
  university: string;
}) => {
  return (
    <div className=" bg-white gap-4 flex flex-col 2xl:w-1/5 w-1/3 p-3 rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <p className="text-lg font-medium flex-wrap">{title}Essay title</p>
          <p className="text-sm">{subTitle}Essay type</p>
          <p className="text-xs px-4 mt-2 py-1 text-center rounded-full bg-lightAccent">
            {status} pending
          </p>
        </div>
        <p>edit</p>
      </div>
      <div className="flex justify-between items-start">
        <p className="text-lg text-lightPrimary font-semibold dark:text-darkContrast text-wrap">
          {university}University
        </p>
        <div className="flex flex-col items-end">
          <p className="text-sm">Deadline</p>
          <p className="text-xs">{deadline}22/1/24</p>
        </div>
      </div>
    </div>
  );
};

export default WritingLabCard;
