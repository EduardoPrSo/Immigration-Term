import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
        return NextResponse.json({ error: 'Parâmetro "id" obrigatório' }, { status: 400 })
    }

    const users = await prisma.user.findMany({
        where: {
            discord_id: {
                equals: id,
            },
        },
    })
    return NextResponse.json(users)
}
