import React from "react";
//app/page.tsx
import { UserButton } from "@clerk/nextjs";
import SearchInput from "@/components/SearchInput";

const RootPage = () => {
  return (
    <div className="h-full p-4 space-y-2">
      <SearchInput />
    </div>
  );
};

export default RootPage;
