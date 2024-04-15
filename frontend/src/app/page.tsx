import { Button } from "@/components/ui/button";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/authOptions";
 

export default  async function Home() {

  const session = await getServerSession(authOptions)
  return (
   <div>
    I am App file
    <Button>Click Me</Button>
    <p>{JSON.stringify(session)}</p>

   </div>

  );

}
 