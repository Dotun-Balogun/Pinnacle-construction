// app/(info)/layout.tsx
import React from "react";
import DynamicHeader from "../shared/DynamicHeader";

export default function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
   <DynamicHeader/>
      <main className="flex-1 ">{children}</main>

      
    </div>
  );
}
