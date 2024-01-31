import React, { ReactNode } from "react";
import { UserDataProvider } from "@/app/contexts/userDataContext";
import SidebarDashboard from "../components/layout/SideBarDashboard";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <UserDataProvider>
        <div style={{width: "500px"}} className="w-auto md:w-[250px]">
        <SidebarDashboard/>
        </div>
        {children}
      </UserDataProvider>
    </>
  );
};

export default Layout;
