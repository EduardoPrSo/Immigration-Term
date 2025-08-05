const API_URL = process.env.NEXT_PUBLIC_API_URL

export const createUser = async (user, accept) => {
    const res = await fetch(`${API_URL}/api/users`, {
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
    const res = await fetch(`${API_URL}/api/users`)
    const data = await res.json()
    return data
}

export const getUserById = async (id) => {
    const res = await fetch(`${API_URL}/api/users/search?id=${id}`)
    const data = await res.json()
    return data[0]
}