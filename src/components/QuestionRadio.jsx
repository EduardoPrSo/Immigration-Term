export default function QuestionRadio({ index, answers, setAnswers }) {
    const handleChange = (value) => {
        setAnswers((prev) => {
            if (prev[index] === value) {
                const copy = { ...prev }
                delete copy[index]
                return copy
            }
            return { ...prev, [index]: value }
        })
    }

    const selectedValue = answers[index] ?? null

    return (
        <form className="flex bg-zinc-700 rounded-md p-2 unselectable" onSubmit={e => e.preventDefault()}>
            <div
                className="p-3 border-r border-zinc-600 cursor-pointer"
                onClick={() => handleChange(true)}
            >
                <input
                    type="radio"
                    name={`q${index}`}
                    id={`q${index}yes`}
                    value="true"
                    checked={selectedValue === true}
                    readOnly
                    className="hidden"
                />
                <label
                    htmlFor={`q${index}yes`}
                    className={`cursor-pointer ${selectedValue === true ? 'text-blue-500' : 'text-white/50'}`}
                    onClick={(e) => e.stopPropagation()} // evita clique duplicado
                >
                    SIM
                </label>
            </div>

            <div
                className="p-3 cursor-pointer"
                onClick={() => handleChange(false)}
            >
                <input
                    type="radio"
                    name={`q${index}`}
                    id={`q${index}no`}
                    value="false"
                    checked={selectedValue === false}
                    readOnly
                    className="hidden"
                />
                <label
                    htmlFor={`q${index}no`}
                    className={`cursor-pointer ${selectedValue === false ? 'text-blue-500' : 'text-white/50'}`}
                    onClick={(e) => e.stopPropagation()} // evita clique duplicado
                >
                    NÃO
                </label>
            </div>
        </form>
    )
}
