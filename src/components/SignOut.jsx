import { signOut } from "next-auth/react";
import { LogOutIcon } from "lucide-react";

export default function SignOut() {
    return (
        <LogOutIcon
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-white/60 transition-colors delay-75 cursor-pointer hover:text-red-500"
            size={18}
        />
    )
}