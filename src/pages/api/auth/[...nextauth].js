import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { INSERT_USERS_ONE } from "../../../gql/user";
import { HASURA_ADMIN_SECRET } from "../../../constants/hasura";
import { hasuraClient } from "../../../utils/hasuraClient";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.OAUTH_GOOGLE_CLIENT_SECRET,
    }),
    Providers.Apple({
      clientId: process.env.OAUTH_APPLE_ID,
      clientSecret: {
        teamId: process.env.OAUTH_APPLE_TEAM_ID,
        privateKey: process.env.OAUTH_APPLE_PRIVATE_KEY,
        keyId: process.env.OAUTH_APPLE_KEY_ID,
      },
    }),
    Providers.Auth0({
      clientId: process.env.OAUTH_AUTH0_CLIENT_ID,
      clientSecret: process.env.OAUTH_AUTH0_CLIENT_SECRET,
      domain: process.env.OAUTH_AUTH0_DOMAIN,
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
        image: token.image,
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
    signIn: "/client/auth/signin",
  },
  callbacks: {
    // async signIn(user, account, profile) {
    //   return true;
    // },
    redirect: async (url, baseUrl) => {
      return url.startsWith(baseUrl)
        ? Promise.resolve(url)
        : Promise.resolve(baseUrl);
    },
    async session(session, token) {
      const encodedToken = jwt.sign(token, process.env.OAUTH_SECRET, {
        algorithm: "HS256",
      });

      session.id = token.id;
      session.token = encodedToken;
      session.user.image = token.image;

      return Promise.resolve(session);
    },
    //jwt
    async jwt(token, user, account, profile, isNewUser) {
      const isUserSignedIn = user ? true : false;
      if (isUserSignedIn) {
        token.id = user.id.toString();
        token.image = user.image;
      }
      try {
        const variables = { id: token.sub, name: token.name };
        const requestHeaders = {
          "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
        };
        await hasuraClient.request(INSERT_USERS_ONE, variables, requestHeaders);
      } catch (err) {
        console.log("User already exists.");
      }

      return Promise.resolve(token);
    },
  },
  events: {},
  debug: false,
});
