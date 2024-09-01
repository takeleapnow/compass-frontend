import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  // DropdownMenuPortal,
  DropdownMenuSeparator,
  // DropdownMenuSub,
  // DropdownMenuSubContent,
  // DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiEdit, FiFileText } from "react-icons/fi";
import { LuFileEdit } from "react-icons/lu";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
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
    <div className=" bg-white gap-4 flex flex-col w-96 p-3 rounded-md">
      <div className="flex justify-between">
        <div className="flex flex-col items-start">
          <p className="text-lg font-medium flex-wrap">{title}Essay title</p>
          <p className="text-sm">{subTitle}Essay type</p>
          <p className="text-xs px-4 mt-2 py-1 text-center rounded-full bg-lightAccent">
            {status} pending
          </p>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div>
              <FiEdit className="text-lg" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 -mt-12 mr-48">
            <DropdownMenuLabel>Application material menu</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link to={"/writing-lab/view/all"}>
                <DropdownMenuItem>
                  <FiFileText className="mr-2 h-4 w-4" />
                  <span>View all</span>
                </DropdownMenuItem>
              </Link>
              <Link to={"/writing-lab/editor"}>
                <DropdownMenuItem>
                  <LuFileEdit className="mr-2 h-4 w-4" />
                  <span>Create new version</span>
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <CiEdit className="mr-2 h-4 w-4" />
                <span>Edit details</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <MdDeleteOutline className="mr-2 h-4 w-4" />
                <span>Delete material</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
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
