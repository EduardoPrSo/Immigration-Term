import TopBar from "./TopBar"
import { LoaderCircleIcon } from "lucide-react"

export default function Loading({session}) {
    return (
        <div className="flex flex-col items-center w-screen h-screen p-5 gap-5"
            style={{
                width: '100vw',
                height: '100vh',
                backgroundImage: `url("/bg.png")`,
                backgroundSize: '100% 100%',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <TopBar />
            <div className="w-6/12 h-full bg-zinc-800/90 rounded-md p-5">
                <div className="flex flex-col justify-center items-center h-full">
                    <LoaderCircleIcon size={40} className="text-white animate-spin" />
                    <h1 className="text-white font-bold">Carregando...</h1>
                </div>
            </div>
        </div>
    )
}