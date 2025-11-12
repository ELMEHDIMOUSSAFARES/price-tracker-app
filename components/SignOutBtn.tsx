"use client";

import { signOut } from "@/lib/auth-client";
import { useRouter } from "next/navigation";


const SignOutBtn = () => {
  const router = useRouter()
  async function clickHandler() {
    await signOut({
      fetchOptions: {
        onError: (ctx) =>{
          alert(ctx.error.message);
        },
        onSuccess: ()=>{
          router.refresh();
          router.push("/login");
        }
      }
    })
  }
  return (
    <div>
      <button onClick={clickHandler} type="button" 
      className="text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-red-500 dark:hover:bg-red-500 dark:focus:ring-red-700 mr-3 cursor-pointer">Sign Out</button>
    </div>
  )
}

export default SignOutBtn