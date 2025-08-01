import { useEffect, useState } from "react"
import QuestionRadio from "./QuestionRadio"

export default function Formulary({answers, setAnswers, questions}) {

    useEffect(()=>{
        console.log(answers)
    }, [answers, setAnswers])

    return (
        <div className="relative flex flex-col w-full h-full text-white gap-2">
            <div className="text-lg font-bold text-center text-white px-3 py-2">
                <h1>Agora você só precisa responder o questionário!!!</h1>
            </div>
            {questions.map((key, index) => (
                <div 
                    key={index}
                    className="cursor-pointer flex flex-col items-end gap-1"
                >
                    <div key={index} className="flex gap-3 items-center w-full">
                        <h1 className="text-[2.5rem] text-zinc-600 font-bold">{index+1}</h1>
                        <div className="flex items-center bg-zinc-700 p-2 rounded-md w-full min-h-16">
                            <h1>{key.question}</h1>
                        </div>
                        <QuestionRadio index={index} answers={answers} setAnswers={setAnswers} />
                    </div>
                </div>
            ))}
        </div>
    )
}