import Image from "next/image"
import SignOut from "./SignOut"

export default function TopBar({ user }) {
    return (
        <div className="flex w-6/12 h-20 bg-zinc-800/90 items-center justify-between px-5 rounded-md">
            <Image src="/logo.png" width="100" height="64" alt="CPX Logo" />
            {user ? <div className="flex items-center text-white h-full gap-2">
                <div className="flex bg-zinc-600 rounded-full justify-center items-center p-1 gap-2 transition-all delay-200 group overflow-hidden">
                    <img src={user.image} width={35} alt="Avatar" className="rounded-full" />
                    <h1 className="text-base whitespace-nowrap cursor-default">{user.name}</h1>
                    <div className="overflow-hidden transition-all duration-300 max-w-0 group-hover:max-w-[200px]">
                        <div className="pr-2">
                            <SignOut />
                        </div>
                    </div>
                </div>
            </div> : <h1 className="text-white">Carregando</h1>}
        </div>
    )
}