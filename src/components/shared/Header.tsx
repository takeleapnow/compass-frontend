import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { MdLogout, MdOutlineSupportAgent } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
const Header = () => {
  const handleLogout = () => {};
  const handleThemeChange = () => {
    const currTheme = localStorage.getItem("theme");
    if (currTheme === "dark") {
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };
  return (
    <div className="flex items-center justify-between py-4 px-8 bg-lightPrimary text-white  z-0 ">
      <p className="text-2xl font-medium">Compass</p>
      <Popover>
        <PopoverTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="px-0 pb-0">
          <div className="flex items-center flex-col">
            <Avatar className="2xl:w-20 2xl:h-20 w-16 h-16">
              <AvatarImage src="https://github.com/shadcn.png" className="" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="2xl:text-lg">Chirag Rajput</p>
            <p className="text-sm">chirag.3r@gmail.com</p>
          </div>
          <Separator className="mt-4 w-[90%] mx-auto" />
          <div className="flex flex-col gap-1 mt-4 ">
            <Link to={"/profile"} className="profileTabOption">
              <FiUser />
              Profile
            </Link>

            <div onClick={handleThemeChange} className="profileTabOption">
              <FaMoon className="dark:block hidden" />
              <FaSun className="dark:hidden block" />
              Theme
            </div>

            <div onClick={handleLogout} className="profileTabOption">
              <MdLogout /> Logout
            </div>
            <Link to={"/support"} className="profileTabOption rounded-b-md">
              <MdOutlineSupportAgent />
              Support
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Header;
