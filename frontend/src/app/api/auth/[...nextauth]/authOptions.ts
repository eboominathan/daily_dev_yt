import { LOGIN_URL } from "@/lib/apiEndPoints";
import myAxios from "@/lib/axios.config";
import { AuthOptions, ISODateString } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export interface CustomSession {
  user?: CustomUser;
  expires: ISODateString;
}

export type CustomUser = {
  id?: string | null;
  name?: string | null;
  username?: string | null;
  email?: string | null;
  profile_img?: string | null;
  token?: string | null;
  created_at?: string | null;
};

export const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({
      session,
      token,
      user,
    }: {
      session: CustomSession;
      token: JWT;
      user: CustomUser;
    }) {
      session.user = token.user as CustomUser;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        // const res = await myAxios.post(LOGIN_URL, credentials);     
        // const response = res.data;
        // const user = response?.user;
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com",token:"2|4L5sTqGwILCJa6nFdc2OAa6Q7rAqvvCTLWO8nGbq22771064" }
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
