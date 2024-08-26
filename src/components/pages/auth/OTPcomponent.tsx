import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaWhatsapp } from "react-icons/fa";

const OTPcomponent = ({
  handleVerify,
}: {
  handleVerify: (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => void;
}) => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button className="w-full mt-4" onClick={handleVerify}>
          <FaWhatsapp /> Verify Whatsapp number
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter the otp below</DialogTitle>
          <DialogDescription>
            use shadcn otp component here
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default OTPcomponent;
