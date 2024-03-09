import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const credentialsConfig = CredentialsProvider({
  name: "Credentials",
  credentials: {
    username: {
      label: "User Name",
    },
    password: {
      label: "Password",
      type: "password",
    },
  },
  async authorize(credentials) {
    if (
      credentials.username === "mehrnoosh" &&
      credentials.password === "123456"
    )
      return {
        name: "mehrnoosh",
      };
    else return null;
  },
});

const config = {
  providers: [Google, credentialsConfig],
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl;
      if (pathname === "/middlewareProtected") return !!auth;
      return true;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, auth, signIn, signOut } = NextAuth(config);
