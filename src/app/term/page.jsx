"use client";
import { useEffect, useState } from "react"
import { redirect } from "next/navigation";
import TopBar from "@/components/TopBar";
import Topics from "@/components/Topics";
import AcceptionMenu from "@/components/AcceptionMenu";
import { getUserById } from "@/lib/database";
import Loading from "@/components/Loading";
import Formulary from "@/components/Formulary";
import { sendWebhook } from "@/lib/webhook";
import { createUser } from "@/lib/database";

const questions = [
    {question: "A sua Allowlist no XP será perdida após a migração?", answer: false},
    {question: "Se você focar somente no GG, não poderá recuperar a sua allowlist por ausencia no XP?", answer: true},
    {question: "Sobre o alinhamento com a equipe do GG, a equipe do XP irá informar a data e a hora?", answer: false},
    {question: "Os itens VIPs serão transferidos?", answer: false},
    {question: "O Rumo do seu personagem pode mudar no GG?", answer: true},
    {question: "O RP de despedida ainda sera reprovatorio?", answer: true},
    {question: "Caso o player perca a AL no GG, ele pode imediatamente retornar ao GG pela migração?", answer: false},
]

export default function Term() {
    const [answers, setAnswers] = useState({})
    const [alreadyAccepted, setAlreadyAccepted] = useState(false);
    const [formulary, setFormulary] = useState(false);
    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleReload = () => {
        window.location.reload()
    }

    useEffect(() => {
        async function fetchSession() {
            const res = await fetch("/api/auth/session");
            const data = await res.json();
            if (!data?.user) {
                redirect("/");
            } else {
                setSession(data);
                setLoading(false);
            }
        }
        fetchSession();
    }, []);

    useEffect(() => {
        async function fetchUser() {
            if (session) {
                const user = await getUserById(session.user.id)
    
                if (user && user.accept === true) {
                    setAlreadyAccepted(true)
                } else {
                    setAlreadyAccepted(false)
                }
            }
        }

        fetchUser()
    }, [setAlreadyAccepted, loading])

const checkAnswers = () => {
    if (Object.keys(answers).length < 7) return alert("Responda todas as perguntas!!!")

    const hasWrongAnswer = questions.some((question, index) => {
        return answers[index] !== question.answer
    })

    if (hasWrongAnswer) {
        alert("Você errou alguma resposta. Leia novamente os termos!!!")
        setFormulary(false);
        setAnswers({});
    } else {
        sendWebhook(session.user, true)
        handleReload()
        createUser(session.user, true)
    }
}

    if (loading || !session) return <Loading />

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
            <TopBar user={session.user} />
            <div className="relative w-6/12 h-full bg-zinc-800/90 rounded-md p-5">
                <div className="flex flex-col justify-between items-center">
                    {formulary ? (
                        <Formulary answers={answers} setAnswers={setAnswers} questions={questions} />
                    ) : (
                        <Topics accepted={alreadyAccepted} />
                    )}
                    {(!alreadyAccepted && !formulary) && <AcceptionMenu session={session} setForm={setFormulary} />}
                    {formulary && <div className="fixed flex justify-center bottom-10 w-[10rem] gap-2">
                        <button
                            className="px-3 py-2 w-28 bg-red-500 border border-red-600 rounded-md cursor-pointer text-white/70 hover:text-white transition-colors delay-100"
                            onClick={()=>{setFormulary(false);setAnswers({})}}
                        >
                            VOLTAR
                        </button>
                        <button
                            className="px-3 py-2 w-28 bg-blue-500 border border-blue-600 rounded-md cursor-pointer text-white/70 hover:text-white transition-colors delay-100"
                            onClick={checkAnswers}
                        >
                            FINALIZAR
                        </button>
                    </div>}
                </div>
            </div>
        </div>
    );
}
