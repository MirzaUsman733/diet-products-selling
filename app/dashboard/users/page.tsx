"use client";
import React from "react";
import { useUser } from "@/app/contexts/userData";
import UserDataDashboard from "@/app/components/UserDataDashboard";
import { Container } from "@mui/material";

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
    <Container className="mt-20">
      <UserDataDashboard />
    </Container>
  );
  // } else {
  //   redirect("/frontend");
  //   return null;
  // }
};

export default Dashboard;
