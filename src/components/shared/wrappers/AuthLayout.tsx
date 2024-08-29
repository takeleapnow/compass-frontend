import { AuthSidebar } from "@/components/pages/auth";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex">
      <div className="w-3/5">
        <AuthSidebar />
      </div>
      <div className="w-2/5 bg-purple-100">{children}</div>
    </div>
  );
};

export default AuthLayout;
