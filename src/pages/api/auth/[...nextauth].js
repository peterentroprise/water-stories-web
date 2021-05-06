import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { INSERT_USERS_ONE } from "../../../gql/user";
import { HASURA_API_URL, HASURA_ADMIN_SECRET } from "../../../constants/hasura";
import { GraphQLClient } from "graphql-request";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    }),
  ],
  secret: process.env.OAUTH_SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: process.env.OAUTH_SECRET,
    encode: async ({ secret, token, maxAge }) => {
      const jwtClaims = {
        sub: token.id,
        name: token.name,
        email: token.email,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["admin", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.id,
        },
      };
      const encodedToken = jwt.sign(jwtClaims, secret, { algorithm: "HS256" });
      return encodedToken;
    },
    decode: async ({ secret, token, maxAge }) => {
      const decodedToken = jwt.verify(token, secret, { algorithms: ["HS256"] });
      return decodedToken;
    },
  },
  pages: {
    // signIn: "/auth/signin", // Displays signin buttons
    // signOut: "/auth/signout", // Displays form with sign out button
    // error: "/auth/error", // Error code passed in query string as ?error=
    // verifyRequest: "/auth/verify-request", // Used for check email page
    // newUser: null, // If set, new users will be directed here on first sign in
  },
  callbacks: {
    // async signIn(user, account, profile) { return true },
    // async redirect(url, baseUrl) { return baseUrl },
    async session(session, token) {
      const encodedToken = jwt.sign(token, process.env.OAUTH_SECRET, {
        algorithm: "HS256",
      });

      session.id = token.id;
      session.token = encodedToken;
      return Promise.resolve(session);
    },
    //jwt
    async jwt(token, user, account, profile, isNewUser) {
      const isUserSignedIn = user ? true : false;
      if (isUserSignedIn) {
        token.id = user.id.toString();
      }

      console.log({ token, user, account, profile, isNewUser });

      const client = new GraphQLClient(HASURA_API_URL);
      const variables = { id: token.sub, name: token.name };
      const requestHeaders = {
        "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
      };
      try {
        await client.request(INSERT_USERS_ONE, variables, requestHeaders);
      } catch (err) {
        console.log(err.message);
      }

      return Promise.resolve(token);
    },
  },
  events: {},
  debug: false,
});
