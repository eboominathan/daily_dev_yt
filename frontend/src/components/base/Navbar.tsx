import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { BellIcon } from "lucide-react";
import UserAvatar from "../common/UserAvatar";
import SearchInput from "./SearchInput";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-2 ">
      <Image src="/logo.svg" width={120} height={120} alt="logo" />
      <SearchInput />
      <div className="flex space-x-3 items-center ">
        <Button size="icon" variant="secondary">
            <BellIcon className="w-5 h-5"/>
        </Button>
        <UserAvatar />
      </div>
    </nav>
  );
}
