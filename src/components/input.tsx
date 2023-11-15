"use client";

import { ChangeEvent, useEffect, useState } from "react";

interface InputInterface {
  saveToken: (token: string) => void;
}

export const Input = ({ saveToken }: InputInterface) => {
  const [identity, setIdentity] = useState<string>("");
  const [appId, setAppId] = useState<string>("");
  const [pushCredential, setPushCredential] = useState<string>("");

  const generateToken = () => {
    fetch("/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ identity, appId, pushCredential }),
    })
      .then(async (res) => {
        const responseBody = await res.json();
        saveToken(responseBody);
      })
      .catch((err) => {
        console.log(err.message);
        // saveToken(err);
      });
  };

  return (
    <div className=" relative flex flex-col justify-center items-center max-w-full gap-2 lg:flex-row lg:gap-4">
      <div className="relative my-4">
        <input
          type="text"
          className="block w-full rounded-2xl border 
                border-slate-300 bg-transparent p-4 text-base/6 text-neutral-950 
                ring-4 ring-transparent transition placeholder:text-neutral-500 
                focus:border-slate-400 focus:outline-none focus:ring-slate-400/5 dark:text-white"
          placeholder="Identity"
          aria-label="Twilio Identity"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setIdentity(event.target.value)
          }
        />
      </div>
      <div className="relative my-4">
        <input
          type="text"
          className="block w-full rounded-2xl border 
                border-slate-300 bg-transparent p-4 text-base/6 text-neutral-950 
                ring-4 ring-transparent transition placeholder:text-neutral-500 
                focus:border-slate-400 focus:outline-none focus:ring-slate-400/5 dark:text-white"
          placeholder="APP ID"
          aria-label="Twilio App Id"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setAppId(event.target.value)
          }
        />
      </div>
      <div className="relative my-4">
        <input
          type="text"
          className="block w-full rounded-2xl border 
                border-slate-300 bg-transparent p-4 text-base/6 text-neutral-950 
                ring-4 ring-transparent transition placeholder:text-neutral-500 
                focus:border-slate-400 focus:outline-none focus:ring-slate-400/5 dark:text-white"
          placeholder="Push Credential"
          aria-label="Twilio Push Credential"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            setPushCredential(event.target.value)
          }
        />
      </div>
      <div className="relative my-4">
        <button
          className="flex w-full rounded-full text-center text-white gap-4 font-mono
                border border-slate-300 bg-black px-12 py-4 text-base/6 dark:bg-white dark:text-neutral-950 
                ring-4 ring-transparent transition placeholder:text-neutral-500 
                focus:border-slate-400 focus:outline-none focus:ring-slate-400/5
                active:scale-90 hover:shadow-lg hover:scale-105 ease-in-out duration-150"
          onClick={generateToken}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            // stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="stroke-white dark:stroke-black"
          >
            <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2" />
          </svg>
          Generate
        </button>
      </div>
    </div>
  );
};
