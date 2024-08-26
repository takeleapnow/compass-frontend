import { LiaCheckCircle } from "react-icons/lia";
const AuthSidebar = () => {
  return (
    <div className="bg-gradient-to-tr min-h-screen from-darkAccent/95 via-purple-700 to-purple-900 w-full py-12 px-12 text-white">
      <div className="flex flex-col items-start">
        <div className="flex flex-col items-end">
          <p className="text-2xl tracking-wide font-bold  ">Compass</p>
          <p className="text-xs "> by Mentara</p>
        </div>
        <div className="mt-16">
          <p className="text-3xl font-bold">
            Trusted Partner for 700+ Students
          </p>
          <p className="mt-1">
            Your go to resource for Unversitt application Success
          </p>
          <div className="text-gray-200 mt-4 flex items-center gap-4">
            <p className="flex items-center gap-1">
              <LiaCheckCircle /> AI Powered
            </p>
            <p className="flex items-center gap-1">
              <LiaCheckCircle /> Fully Customizable
            </p>
            <p className="flex items-center gap-1">
              <LiaCheckCircle /> 100% Secure
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSidebar;
