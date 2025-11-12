import { getSession } from "@/lib/getSession"
import { redirect } from "next/navigation"

const page = async() => {

  const session = await getSession();

  if(!session){
    redirect("/login");
  }
  
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}

export default page