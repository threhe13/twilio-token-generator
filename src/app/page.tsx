"use client";

import { Input } from "@/components/input";
import { useState } from "react";

export default function Home() {
  const [token, setToken] = useState<string>("");

  const saveToken = (token: string) => {
    setToken(token);
  };

  return (
    <main className="flex min-h-screen flex-col justify-center items-center gap-4 p-16 lg:gap-16">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <p
          className="flex w-full justify-center border-b font-mono border rounded-full
                  border-gray-200 bg-white py-4 backdrop-blur-2xl 
                  dark:border-neutral-800 dark:bg-zinc-600/30 dark:from-inherit
                  lg:static lg:w-auto lg:py-4 lg:px-6"
        >
          Twilio Token Generator
        </p>
        <div
          className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center 
                    bg-gradient-to-t from-white via-white dark:from-black dark:via-black 
                    lg:static lg:h-auto lg:w-auto lg:bg-none"
        >
          <a
            className="pointer-events-none flex place-items-center font-mono gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://deep-hearing.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <span
              className="px-4 py-2 text-white rounded-full
                        bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              SungHyun Kim
            </span>
          </a>
        </div>
      </div>

      <div className="w-full flex flex-row justify-center items-center min-w-full">
        <Input saveToken={saveToken} />
      </div>

      <div className="flex flex-col bg-white w-full h-64 rounded-lg dark:bg-zinc-600/30 border">
        <div className="flex p-2 gap-1">
          <div className="">
            <span className="bg-[#FD4646] inline-block center w-3 h-3 mx-1 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-[#FCB026] inline-block center w-3 h-3 mx-1 rounded-full"></span>
          </div>
          <div className="circle">
            <span className="bg-[#28C131] box inline-block center w-3 h-3 mx-1 rounded-full"></span>
          </div>
        </div>
        <div className="flex flex-wrap w-full mx-auto items-center p-4 break-all">
          {token}
        </div>
      </div>
    </main>
  );
}
