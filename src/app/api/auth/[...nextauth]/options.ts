import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GitHubProvider from 'next-auth/providers/github'
import YandexProvider from "next-auth/providers/yandex";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from 'next-auth/providers/credentials'

const prisma = new PrismaClient();

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  pages: {
    newUser: '/user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
    // CredentialsProvider({
    //   name: "Credentials",
    //   credentials: {
    //     username: {
    //       label: "Username:",
    //       type: "text",
    //       placeholder: "your-cool-username"
    //     },
    //     password: {
    //       label: "Password:",
    //       type: "password",
    //       placeholder: "your-awesome-password"
    //     }
    //   },
    //   async authorize(credentials) {
    //     // This is where you need to retrieve user data 
    //     // to verify with credentials
    //     // Docs: https://next-auth.js.org/configuration/providers/credentials
    //     const user = { id: "42", name: "Dave", password: "nextauth" }

    //     if (credentials?.username === user.name && credentials?.password === user.password) {
    //       return user
    //     } else {
    //       return null
    //     }
    //   }
    // })
  ],
}
