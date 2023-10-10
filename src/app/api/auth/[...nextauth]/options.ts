import type { NextAuthOptions } from 'next-auth'
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import EmailProvider from "next-auth/providers/email";
import GitHubProvider from 'next-auth/providers/github'
import YandexProvider from "next-auth/providers/yandex";
import VkProvider from "next-auth/providers/vk";
import CredentialsProvider from 'next-auth/providers/credentials'
import { Client } from "postmark"

const prisma = new PrismaClient();
const postmarkClient = new Client(process.env.POSTMARK_API_TOKEN)

export const options: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),

  pages: {
    newUser: '/user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },

  providers: [
    YandexProvider({
      clientId: process.env.YANDEX_CLIENT_ID as string,
      clientSecret: process.env.YANDEX_CLIENT_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url, provider }) => {
        const result = await postmarkClient.sendEmailWithTemplate({
          TemplateId: "33444756",
          To: identifier,
          From: provider.from,
          TemplateModel: {
            magic: url,
          }
        })
 
        if (result.ErrorCode) {
          throw new Error(result.Message)
        }
      },
    }),
  ],
}
