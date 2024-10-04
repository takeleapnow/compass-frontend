import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { IoCameraSharp } from "react-icons/io5";

const PersonalDetails = () => {
  const handleProfileClick = () => {
    console.log("Profile Clicked");
    alert("Profile Clicked");
  };

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "Chriag Rajput",
    email: "chirag@gmail.com",
    phoneNumber: "+91 1234567890",
    });
  return (
    <div className="py-4">
        
      <div className="relative">
        <Avatar
          className="2xl:w-20 2xl:h-20 w-16 h-16 hover:opacity-30 z-20 cursor-pointer "
          onClick={handleProfileClick}
        >
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Button className=" bg-gray-900 absolute top-0 z-10 2xl:w-20 2xl:h-20 w-16 h-16  rounded-full">
          <IoCameraSharp className="text-2xl" />
        </Button>
      </div>
      {/* personal details */}
      <div>
       
        <div className="flex flex-col gap-2 mt-2">
          <div className="flex gap-2">
            <p className="text-darkAccent font-medium">Full Name</p>
            <p className="text-darkPrimary font-medium">{personalDetails.fullName}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-darkAccent font-medium">Email</p>
            <p className="text-darkPrimary font-medium">{personalDetails.email}</p>
          </div>
          <div className="flex gap-2">
            <p className="text-darkAccent font-medium">Phone Number</p>
            <p className="text-darkPrimary font-medium">{personalDetails.phoneNumber}</p>
          </div>
        </div>


        
      </div>
    </div>
  );
};

export default PersonalDetails;
