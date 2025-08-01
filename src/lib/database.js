export const createUser = async (user, accept) => {
    const res = await fetch(`https://immigration-term.vercel.app/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: user.name, id: user.id, accept }),
    })

    if (res.ok) {
        console.log("Usuário adicionado")
    } else {
        console.log("Erro ao adicionar usuário")
    }
}

export const getUsers = async () => {
    const res = await fetch(`https://immigration-term.vercel.app/api/users`)
    const data = await res.json()
    return data
}

export const getUserById = async (id) => {
    const res = await fetch(`https://immigration-term.vercel.app/api/users/search?id=${id}`)
    const data = await res.json()
    return data[0]
}