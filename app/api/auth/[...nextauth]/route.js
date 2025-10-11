import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
  GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET
  })
],
    secret : process.env.SECRET
}
const handaler = NextAuth(authOptions)
export {handaler as GET , handaler as POST}