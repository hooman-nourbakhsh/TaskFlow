import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "../../../models/User";
import { verifyPassword } from "../../../utils/auth";
import connectDB from "../../../utils/connectDB";

const authOptions = {
  session: { strategy: "jwt" },
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { email, password } = credentials;

        try {
          await connectDB();
        } catch (error) {
          throw new Error("Internal server error");
        }

        if (!email || !password) throw new Error("Invalid data");

        const user = await User.findOne({ email: email });

        if (!user) throw new Error("User not found");

        const isValid = await verifyPassword(password, user.password);

        if (!isValid) throw new Error("Invalid credentials");

        return { email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
