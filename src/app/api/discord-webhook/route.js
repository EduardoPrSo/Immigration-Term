export async function POST(req) {
    try {
        const body = await req.json();

        const webhookUrl = process.env.DISCORD_WEBHOOK;

        const payload = {
            username: 'Migrinho',
            avatar_url: '/migrinho.png',
            embeds: [
                {
                    title: '📢 Notificação de Termo de Imigração',
                    description: body.userAccept ? "O usuário a seguir **aceitou** os termos da imigração!!!" : "O usuário a seguir **negou** os termos da imigração!!!",
                    color: body.userAccept ? 0x00ff99 : 0xe74c3c,
                    image: {
                        url: body.userAvatar,
                    },
                    fields: [
                        {
                            name: 'Nome',
                            value: body.userName,
                            inline: true,
                        },
                        {
                            name: 'ID Discord',
                            value: body.userId,
                            inline: true,
                        },
                    ],
                    footer: {
                        text: 'Enviado por Migrinho',
                        icon_url: '/migrinho.png',
                    },
                    timestamp: new Date().toISOString(),
                },
            ],
        };

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            return new Response('Erro ao enviar para o Discord', { status: 500 });
        }

        return new Response('Enviado com sucesso!', { status: 200 });

    } catch (error) {
        console.error('Erro no webhook:', error);
        return new Response('Erro no servidor', { status: 500 });
    }
}
