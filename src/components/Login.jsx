"use client";
import Image from "next/image"
import { signIn } from "next-auth/react";

export default function Login() {
    return (
        <div className="flex items-center justify-center w-screen h-screen p-5 gap-5"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url("/bg.png")`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className="flex flex-col items-center justify-between w-80 h-[15rem] bg-zinc-800/90 rounded-md p-5 gap-10">
                <h1 className="text-3xl font-bold text-white">Faça seu Login</h1>
                <button
                    onClick={() => signIn("discord", { callbackUrl: "/term" })}
                    className="px-4 py-2 bg-[#7289da]/80 hover:bg-[#7289da] text-white rounded cursor-pointer transition-colors delay-100"
                >
                    Entrar com Discord
                </button>
                <Image src="/logo.png" width="100" height="64" alt="CPX Logo" />
            </div>
        </div>
    );
}