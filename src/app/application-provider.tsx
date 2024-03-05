"use client"

import Explorer from "@/layout/Explorer"
import Header from "@/layout/Header";
import FileHeader from "@/layout/FileHeader";
import { Toaster } from 'react-hot-toast';
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full min-h-screen">
      <Header />
      
      <main className="flex bg-[#1e1e1e]">
        <div>
         
          <Explorer />
        </div>
        
        <div>
           <FileHeader />
          <div className="py-2">{ }</div>
          {children}
        </div>
      </main>
      <Toaster />
    </div>
  );
}
