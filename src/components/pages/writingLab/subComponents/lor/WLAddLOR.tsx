import Recommender from "@/components/pages/myApplications/subComponents/Recommender";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoAddOutline } from "react-icons/io5";
import { MdOutlineFileDownloadDone } from "react-icons/md";

const WLAddLOR = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <div className=" border border-purple-300 shadow-sm w-12 h-12 flex items-center justify-center rounded-full">
          <IoAddOutline className="text-2xl cursor-pointer" />
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Recommender</DialogTitle>
          <div>
            <Recommender />
            <Button className="w-full mt-4">
              <MdOutlineFileDownloadDone />
              Add
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default WLAddLOR;
