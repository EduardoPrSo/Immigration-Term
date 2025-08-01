import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}

export async function POST(request) {
    const body = await request.json()
    console.log(body)
    const user = await prisma.user.create({
        data: {
            name: body.name,
            discord_id: body.id,
            accept: body.accept
        },
    })

    return NextResponse.json(user)
}