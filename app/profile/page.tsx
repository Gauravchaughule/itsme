import Greetings from "@/components/Greeting";
import React from "react";

export default function page() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#120d1b] text-white font-[700] text-2xl">
      <Greetings/>
    </div>
  );
}
