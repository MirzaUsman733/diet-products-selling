import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import SessionProvider from "@/app/utils/SessionProvider";
import { AppProvider } from "@/app/contexts/AppContext";
import { UserProvider } from "@/app/contexts/userData";
import { UserDataProvider } from "@/app/contexts/userDataContext";
import { Toaster } from "react-hot-toast";
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
              <AppProvider>
                <Toaster />
                <div className="gap-2 mb-10">{children}</div>
              </AppProvider>
            </UserDataProvider>
          </SessionProvider>
        </UserProvider>
      </body>
    </html>
  );
}
