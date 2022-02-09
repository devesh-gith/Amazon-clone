import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  theme: {
    colorScheme: "light",
    brandColor: "gray",
    logo: "https://cdn2.downdetector.com/static/uploads/logo/amazon.png",
  },
});
