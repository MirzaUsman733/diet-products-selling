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
        <SidebarDashboard>{children}</SidebarDashboard>
      </UserDataProvider>
    </>
  );
};

export default Layout;
