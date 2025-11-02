"use client";
import Link from "next/link";
import { useState } from "react";


type FormElem = React.FormEvent<HTMLFormElement>;


export default function Login(){
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (e: FormElem) =>{
    e.preventDefault();
    setIsDataSubmitted(true);
  }

  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-15">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl w-full px-4">
        {/* Login container */}
        <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Welcome Back</h2>
          <form onSubmit={onSubmitHandler} className="w-full max-w-sm">
            <div className="mb-5 mt-10">
              <input onChange={(e)=>setEmail(e.target.value)} value={email} required
              type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div className="mb-5">
              <input onChange={(e)=>setPassword(e.target.value)} value={password} required
              type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            {!isDataSubmitted ? (
              <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 cursor-pointer"
              >Log in</button>
            ):(
              <button disabled
              className="w-full flex justify-center items-center gap-2 text-white
             bg-blue-700 font-medium rounded-lg text-md px-4 py-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Logging in...</button>
            )}
          </form>
          <label className="mt-4">Forgot your password? <Link href="/" className="text-blue-500">Reset Password.</Link></label>
          <label className="mt-2">Do not have an account? <Link href="/register" className="text-blue-500">Sign Up.</Link></label>
        </div>
        {/* Info about tracker Container */}
        <div className="flex flex-col justify-center bg-gray-800 text-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Track Prices, Save Money</h2>
          <p className="text-gray-200 text-lg mb-4">
            Stay on top of price drops with our intelligent tracking system...
          </p>
          <p className="text-gray-300 text-sm">
            Our system monitors price changes across supported stores...
          </p>
        </div>
      </div>
    </div>
  );
}