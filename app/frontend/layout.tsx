import React, { ReactNode } from "react";
import { UserDataProvider } from "@/app/contexts/userDataContext";
import Navbar from "@/app/components/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <UserDataProvider>{children}</UserDataProvider>
    </>
  );
};

export default Layout;
