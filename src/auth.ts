import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@goglobal.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null
        
        const adminEmail = process.env.ADMIN_EMAIL
        const adminPassword = process.env.ADMIN_PASSWORD
        
        if (credentials.email === adminEmail && credentials.password === adminPassword) {
          return { id: "1", name: "Admin", email: adminEmail }
        }
        
        return null
      }
    })
  ],
  pages: {
    signIn: '/admin/login',
  },
  session: {
    strategy: "jwt"
  },
  secret: process.env.AUTH_SECRET || process.env.NEXTAUTH_SECRET || "fL6QnOQYgYn2b7vC3+Qj0A8r3S/N6E+1T0+fC9Qf8c=",
})
