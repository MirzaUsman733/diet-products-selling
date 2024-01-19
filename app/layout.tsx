import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/app/utils/SessionProvider";
import { UserProvider } from "@/app/contexts/userData";
import { UserDataProvider } from "@/app/contexts/userDataContext";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <SessionProvider session={session}>
           <UserDataProvider>
        <Navbar />
            <div className="gap-2 mb-10">{children}</div>
          </UserDataProvider>
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  );
}
