"use client"
import React from "react";
import { redirect } from "next/navigation";
import { useUser } from "@/app/contexts/userData";
import UserDataDashboard from "@/app/components/UserDataDashboard";

const Dashboard: React.FC = () => {
  const { userWithEmail } = useUser();

  // if (!userWithEmail) {
  //   redirect("/login");
  //   return null;
  // }

  // const userEmail = userWithEmail?.email;

  // if (
  //   userEmail !== undefined &&
  //   userEmail !== null &&
  //   userWithEmail?.role === "admin"
  // ) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between max-w-screen-2xl">
        <div>
          <UserDataDashboard />
        </div>
      </div>
    );
  // } else {
  //   redirect("/frontend");
  //   return null;
  // }
};

export default Dashboard;
