import React, { ReactNode } from "react";
import { UserDataProvider } from "@/app/contexts/userDataContext";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
        <UserDataProvider>{children}</UserDataProvider>
    </>
  );
};

export default Layout;
