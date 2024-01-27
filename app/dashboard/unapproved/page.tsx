"use client";
import React from "react";
import { redirect } from "next/navigation";
import Approval from "@/app/components/Approval";
import { useUser } from "@/app/contexts/userData";
import { Container } from "@mui/material";

const page = () => {
  // const { userWithEmail } = useUser();
  // if (!userWithEmail) {
  //   redirect("/login");
  // }

  // const userEmail = userWithEmail?.email;
  // if (
  //   userEmail !== undefined &&
  //   userEmail !== null &&
  //   userWithEmail?.role === "admin"
  // ) {
  return (
    <Container className="mt-20">
      <Approval />
    </Container>
  );
  //   } else {
  //   redirect("/frontend");
  //   return null;
  // }
};

export default page;
