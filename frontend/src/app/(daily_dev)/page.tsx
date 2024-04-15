import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import Navbar from "@/components/base/Navbar";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div>
     <h1>I am home page</h1>
    </div>
  );
}
