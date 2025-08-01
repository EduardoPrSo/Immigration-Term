import { sendWebhook } from "@/lib/webhook"
import { useState } from "react"

export default function AcceptionMenu({session, setForm}) {
    const [accept, setAccept] = useState(false);

    return (
        <div className="flex w-full justify-between h-full mt-5">
            <div className="flex gap-2 items-center">
                <input type="checkbox" id="accept" onChange={(e)=>setAccept(e.target.checked)} value={accept} />
                <label htmlFor="accept" className="text-white cursor-pointer">Eu declaro que li e aceito os termos.</label>
            </div>
            <div className="flex gap-2 items-center text-white">
                <button 
                    className="w-24 p-2 bg-red-500/50 border border-red-500 cursor-pointer rounded-md hover:bg-red-500/70 transition-colors delay-100" 
                    onClick={()=>sendWebhook(session.user, false)}
                >
                    RECUSAR
                </button>
                <button 
                    disabled={!accept} 
                    className="w-24 p-2 bg-green-500/50 border border-green-500 cursor-pointer rounded-md hover:bg-green-500/70 disabled:bg-green-400/30 disabled:cursor-default disabled:text-white/50 transition-colors delay-100" 
                    onClick={()=>{
                        setForm(true)
                    }}
                >
                    ACEITAR
                </button>
            </div>
        </div>
    )
}