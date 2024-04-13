import Image from "next/image";
import React from "react"; 
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "@/components/auth/Login";
import Register from "@/components/auth/Register";

export default function loginPage() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div className="hidden lg:flex justify-center items-center h-screen">
        <Image
          src="/auth_img.svg"
          alt="auth_img"
          width={500}
          height={500}
          className="w-full object-contain"
        />
      </div>
      <div className="flex justify-center items-center h-screen flex-col w-full md:w-[500px] px-4">
        <div className="flex justify-start items-start mb-6 w-full flex-col">
          <Image src="/logo.svg" alt="logo" width={150} height={150} />
          <h1 className="text-cabbage font-bold text-2xl mt-2 ">
            Where developers suffer together
          </h1>
        </div>
        <Tabs defaultValue="login" className="w-full p-2 lg:w-[500px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <Login />
          <Register />
        </Tabs>
      </div>
    </div>
  );
}
