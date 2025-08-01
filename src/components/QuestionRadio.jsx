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
        <form className="flex bg-zinc-700 rounded-md p-2" onChange={e => e.preventDefault()}>
            <div className="p-3 border-r border-zinc-600 cursor-pointer">
                <input
                    type="radio"
                    name={`q${index}`}
                    id={`q${index}yes`}
                    value="true"
                    checked={selectedValue === true}
                    onChange={() => handleChange(true)}
                    className="hidden"
                />
                <label
                    htmlFor={`q${index}yes`}
                    className={`cursor-pointer ${selectedValue === true ? 'text-blue-500' : 'text-white/50'}`}
                >
                    SIM
                </label>
            </div>

            <div className="p-3 cursor-pointer">
                <input
                    type="radio"
                    name={`q${index}`}
                    id={`q${index}no`}
                    value="false"
                    checked={selectedValue === false}
                    onChange={() => handleChange(false)}
                    className="hidden"
                />
                <label
                    htmlFor={`q${index}no`}
                    className={`cursor-pointer ${selectedValue === false ? 'text-blue-500' : 'text-white/50'}`}
                >
                    NÃO
                </label>
            </div>
        </form>
    )
}