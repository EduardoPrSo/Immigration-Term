export const sendWebhook = async (user, accept) => {
    await fetch("https://immigration-term.vercel.app/api/discord-webhook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
            body: JSON.stringify({
                userName: user.name,
                userId: user.id,
                userAvatar: user.image,
                userAccept: accept,
            }
        ),
    });
};