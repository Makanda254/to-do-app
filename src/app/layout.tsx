import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./ui/globals.css";
import StoreProvider from "../store/StoreProvider";
import NavBar from '../components/NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My To-Do App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
    <html lang="en">
      <body>
         <NavBar/> 
         {children} 
      </body>
    </html>
    </StoreProvider>
  
  );
}
