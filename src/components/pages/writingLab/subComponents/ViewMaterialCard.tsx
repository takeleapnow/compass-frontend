import { handleDateFormatter, stripHtmlTags } from "@/lib/helper";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FiEdit, FiFileText, FiUserPlus } from "react-icons/fi";
import { LuFileLock2 } from "react-icons/lu";
import { Mail } from "lucide-react";
import { CiEdit } from "react-icons/ci";
import { FaRegFilePdf } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

interface MaterialCardProps {
  writingMaterialTitle: string;
  id: number;
  writingMaterialType: string;
  lastEdited: {
    seconds: number;
    nanos: number;
  };
  description: string;
  writingMaterialInView: {
    writingMaterialTitle: string;
    writingMaterialType: string;
    lastEdited: {
      seconds: number;
      nanos: number;
    };
    description: string;
    id: number;
  };
  setWritingMaterialInView: (material: {
    writingMaterialTitle: string;
    writingMaterialType: string;
    lastEdited: {
      seconds: number;
      nanos: number;
    };
    description: string;
    id: number;
  }) => void;
}

// Function to get the first 15 words
const getFirst15Words = (text: string): string => {
  const words = text.split(/\s+/).filter(Boolean);
  return words.slice(0, 60).join(" ");
};

const ViewMaterialCard = ({
  writingMaterialTitle,
  writingMaterialType,
  lastEdited,
  description,
  setWritingMaterialInView,
  writingMaterialInView,
  id,
}: MaterialCardProps) => {
  // Ensure description is defined before processing
  const plainText = description ? stripHtmlTags(description) : "";
  const previewText = plainText ? getFirst15Words(plainText) : "";

  return (
    <div
      className={`flex flex-col rounded-lg relative border pb-4 h-fit ${
        writingMaterialInView.writingMaterialTitle === ""
          ? "2xl:w-1/6 w-1/5 "
          : " 2xl:w-1/4 w-1/3"
      } ${
        writingMaterialInView.id === id
          ? "bg-lightAccent border border-lightPrimary transition-all"
          : ""
      }`}
    >
      <p className="text-xs right-0 px-2 rounded-r-none rounded-tl-none text-center rounded-lg bg-lightAccent rounded-tr-lg absolute">
        Last edited: {handleDateFormatter(lastEdited)}
      </p>
      <div className="bg-gray-100 rounded-lg 2xl:h-52 h-64 py-5">
        {/* Display the first 15 words */}
        <p className="px-4 text-sm text-gray-700">{previewText}...</p>
      </div>
      <div className="p-2">
        <p className="text-lg font-medium">{writingMaterialTitle}</p>
        <div className="flex justify-between items-center">
          <p className="text-sm">{writingMaterialType}</p>
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
                <DropdownMenuItem
                  onClick={() =>
                    setWritingMaterialInView({
                      writingMaterialTitle,
                      writingMaterialType,
                      lastEdited,
                      description,
                      id,
                    })
                  }
                >
                  <FiFileText className="mr-2 h-4 w-4" />
                  <span>View</span>
                </DropdownMenuItem>

                <Link to={"/writing-lab/editor"}>
                  <DropdownMenuItem>
                    <CiEdit className="mr-2 h-4 w-4" />
                    <span>Edit </span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem>
                  <MdDeleteOutline className="mr-2 h-4 w-4" />
                  <span>Delete</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <FiUserPlus className="mr-2 h-4 w-4" />
                  <span>Take a review</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <LuFileLock2 className="mr-2 h-4 w-4" />
                    <span>Share</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem>
                        <Mail className="mr-2 h-4 w-4" />
                        <span>Email</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <FaRegFilePdf className="mr-2 h-4 w-4" />
                        <span>Download PDF</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default ViewMaterialCard;
