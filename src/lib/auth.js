import { getServerSession } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.id;
      return session;
    },
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.id = profile.id;
      }
      return token;
    },
  },

  pages: {
    signIn: "/",
  },
};

export function auth() {
  return getServerSession(authOptions);
}