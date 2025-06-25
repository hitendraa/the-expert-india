import GoogleProvider from "next-auth/providers/google"
import connectDB from "@/lib/mongodb"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
  ],
  pages: {
    signIn: '/', // Redirect to home page for sign in
    error: '/', // Redirect to home page on error
  },
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: any) {
      try {
        // Add user data to session from JWT token
        if (session?.user && token) {
          session.user.id = token.id || token.sub;
          session.user.role = token.role || 'user';
        }
        return session
      } catch (error) {
        console.error('Session callback error:', error)
        return session
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: any) {
      try {
        // Add user data to JWT token
        if (user) {
          // Connect to DB to get/create user
          await connectDB()
          const { default: User } = await import('@/models/User')
          
          let dbUser = await User.findOne({ email: user.email })
          if (!dbUser) {
            // Create new user
            dbUser = new User({
              name: user.name,
              email: user.email,
              image: user.image,
              role: 'user'
            })
            await dbUser.save()
          }
          
          token.id = dbUser._id.toString();
          token.role = dbUser.role || 'user';
          token.sub = dbUser._id.toString();
        }
        return token
      } catch (error) {
        console.error('JWT callback error:', error)
        return token
      }
    },
    async signIn() {
      try {
        // Allow sign in (handles both sign-up and sign-in automatically)
        return true
      } catch (error) {
        console.error('SignIn callback error:', error)
        return false
      }
    },
    async redirect({ url, baseUrl }: { url: string; baseUrl: string }) {
      try {
        // Handle redirect after sign in
        if (url.startsWith("/")) {
          return `${baseUrl}${url}`
        } else if (new URL(url).origin === baseUrl) {
          return url
        }
        
        return baseUrl + "/dashboard"
      } catch (error) {
        console.error('Redirect callback error:', error)
        return baseUrl + "/dashboard"
      }
    },
  },
  session: {
    strategy: "jwt" as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: {
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
}
