"use client";
import Link from "next/link";
import { useState } from "react";



type FormElem = React.FormEvent<HTMLFormElement>;

export default function Register(){
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [desiredUse, setDesiredUse] = useState("");
  const [acceptedPolicy, setAcceptedPolicy] = useState(false);
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const onSubmitHandler = (e: FormElem) =>{
    e.preventDefault();

    if (confirmPassword !== password){
      alert("Your password does not match, please try again!");
      return;
    }

    if(!acceptedPolicy){
      alert("Please accept the privacy policy before registering!");
      return;
    }

    setIsDataSubmitted(true);
  }

  return(
    <div className="flex justify-center items-center min-h-screen bg-gray-100 mt-15">
      <div className="flex flex-col justify-center items-center bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Register Your Account</h2>
        <form onSubmit={onSubmitHandler} className="w-full max-w-sm">
        <div className="mb-5 mt-10">
          <input onChange={(e)=>setEmail(e.target.value)} value={email} required
            type="email" placeholder="Email Address" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-5">
            <input onChange={(e)=>setFullName(e.target.value)} value={fullName} required
            type="fullname" placeholder="Full Name" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-5">
          <input onChange={(e)=>setPassword(e.target.value)} value={password} required
            type="password" placeholder="Password" className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"/>
        </div>
        <div className="mb-5">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              required
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-5">
            <label className="block text-gray-700 mb-2 font-medium">Desired Use:</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="useType"
                  value="work"
                  checked={desiredUse === "work"}
                  onChange={(e) => setDesiredUse(e.target.value)}
                />
                <span>Work</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="useType"
                  value="individual"
                  checked={desiredUse === "individual"}
                  onChange={(e) => setDesiredUse(e.target.value)}
                />
                <span>Individual</span>
              </label>
            </div>
          </div>
          <div className="mb-5">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={acceptedPolicy}
                onChange={(e) => setAcceptedPolicy(e.target.checked)}
              />
              <span className="text-sm text-gray-600">I agree to the privacy policy</span>
            </label>
          </div>
          {!isDataSubmitted ? (
            <button onClick={()=>setIsDataSubmitted(true)} type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 transition focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-3 cursor-pointer"
            >Sign Up</button>
          ):(
            <button disabled
            className="w-full flex justify-center items-center gap-2 text-white
             bg-blue-700 font-medium rounded-lg text-md px-4 py-2">
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            Creating account...</button>
            )}
        </form>
        <label className="mt-4">Already have an account? <Link href="/login" className="text-blue-500">Log in.</Link></label>
      </div>
    </div>
  );
}