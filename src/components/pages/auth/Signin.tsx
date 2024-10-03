import AuthLayout from "@/components/shared/wrappers/AuthLayout";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import OTPcomponent from "./OTPcomponent";
import { countryCodes } from "@/constants/coutryCode";

interface UserProps {
  fullName: string;
  phoneNumber: {
    extension: string;
    phoneNumber: string;
  };
}

const Signup = () => {
  const [userData, setUserData] = useState<UserProps>({
    fullName: "",
    phoneNumber: {
      extension: "+91",
      phoneNumber: "",
    },
  });

  const [errors, setErrors] = useState<{ phoneNumber?: string, fullName?:string }>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "fullName") {
      setUserData((prevData) => ({
        ...prevData,
        fullName: value.replace(/\s+/g, " ").trim(),
      }));
    } else if (name === "phoneNumber") {
      const sanitizedValue = value.replace(/\s+/g, "");
      setUserData((prevData) => ({
        ...prevData,
        phoneNumber: {
          ...prevData.phoneNumber,
          phoneNumber: sanitizedValue,
        },
      }));
    }
  };

  const handleSelectChange = (value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      phoneNumber: {
        ...prevData.phoneNumber,
        extension: value,
      },
    }));
  };

  const validatePhoneNumber = () => {
    const { phoneNumber } = userData.phoneNumber;
    if (!/^\d{10}$/.test(phoneNumber)) {
      setErrors({ phoneNumber: "Phone number must be 10 digits." });
      return false;
    }
    setErrors({});
    return true;
  };

  const validateName = () => {
    if (userData.fullName === "") {
      setErrors({
        fullName: "Name cannot be empty",
    
      })
      return false;
    }
    return true;
  };
  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const isNameValid = validateName();
    const isPhoneNumberValid = validatePhoneNumber();

    if (!isNameValid || !isPhoneNumberValid) {
      toast.error("Please enter valid details.");
      return;
    }
    // API
    console.log(userData);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center shadow-sm justify-center h-full pb-20">
        <p className="text-lightPrimary font-semibold text-2xl">Sign in</p>
        <p className="text-darkAccent">
          Welcome back! Please sign in to your account
        </p>
        <div className="w-3/4 mt-4 ">
          <div className="flex flex-col gap-2">
            
            <div className="flex gap-1 items-center">
              <Select
                value={userData.phoneNumber.extension}
                onValueChange={handleSelectChange}
              >
                <SelectTrigger className="w-20">
                  <SelectValue placeholder="Ext" />
                </SelectTrigger>
                <SelectContent>
                {countryCodes.map((code) => (
                  <SelectItem key={code.dial_code} value={code.dial_code}>
                    {code.dial_code} {code.name}
                  </SelectItem>
                ))}
                  {/* Add more options as needed */}
                </SelectContent>
              </Select>
              <div className="relative w-full">
                <LuPhone className="fixed mt-3 ml-2" />
                <Input
                  name="phoneNumber"
                  value={userData.phoneNumber.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Enter your 10 digit phone number "
                  maxLength={10}
                  className="pl-8"
                />
              </div>
            </div>
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
            <OTPcomponent handleVerify={handleSubmit} title={"Get OTP"} />
            <p className="text-xs w-[90%] text-center text-gray-600">
              By signing up you agree to our{" "}
              <Link to={""} className="hover:text-lightPrimary hover:underline">
                Privacy policy
              </Link>{" "}
              and{" "}
              <Link to={""} className="hover:text-lightPrimary hover:underline">
                Terms & Conditions
              </Link>
            </p>
            <p className="text-center mt-4 text-sm text-darkSecondary">
              Don't have an account?{" "}
              <Link to={"/signup"} className="hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Signup;
