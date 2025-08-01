import { auth } from "@/lib/auth";
import Login from "@/components/Login";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await auth();

    if (session) return redirect("/term")

    return <Login />
}