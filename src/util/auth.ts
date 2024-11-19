import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next"
import GithubProvider from "next-auth/providers/github"
import type { NextAuthOptions } from "next-auth"
import { getServerSession } from "next-auth"

export const config = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: {
          redirect_uri: process.env.GITHUB_CALLBACK_URL,
          scope: 'user:email',
        }
      },
    }),
  ],
  debug: true,
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}