import NextAuth from "next-auth";
import { GraphQLClient } from "graphql-request";
import Providers from "next-auth/providers";
import jwt from "jsonwebtoken";
import { INSERT_USER_ACCOUNT_ONE } from "gql/user";
import {
  HASURA_ADMIN_SECRET,
  HASURA_API_URL,
  OAUTH_GOOGLE_CLIENT_ID,
  OAUTH_GOOGLE_CLIENT_SECRET,
  OAUTH_APPLE_ID,
  OAUTH_APPLE_TEAM_ID,
  OAUTH_APPLE_PRIVATE_KEY,
  OAUTH_APPLE_KEY_ID,
  OAUTH_AUTH0_CLIENT_ID,
  OAUTH_AUTH0_CLIENT_SECRET,
  OAUTH_AUTH0_DOMAIN,
  OAUTH_SECRET,
} from "lib/config";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: OAUTH_GOOGLE_CLIENT_ID,
      clientSecret: OAUTH_GOOGLE_CLIENT_SECRET,
    }),
    Providers.Apple({
      clientId: OAUTH_APPLE_ID,
      clientSecret: {
        teamId: OAUTH_APPLE_TEAM_ID,
        privateKey: OAUTH_APPLE_PRIVATE_KEY,
        keyId: OAUTH_APPLE_KEY_ID,
      },
    }),
    Providers.Auth0({
      clientId: OAUTH_AUTH0_CLIENT_ID,
      clientSecret: OAUTH_AUTH0_CLIENT_SECRET,
      domain: OAUTH_AUTH0_DOMAIN,
    }),
  ],
  secret: OAUTH_SECRET,
  session: {
    jwt: true,
  },
  jwt: {
    secret: OAUTH_SECRET,
    encode: async ({ secret, token, maxAge }) => {
      // Step 3: Add hasura JWT claims to token.
      const jwtClaims = {
        sub: token.user_id,
        user_id: token.user_id,
        name: token.name,
        email: token.email,
        image: token.image,
        iat: Date.now() / 1000,
        exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
        "https://hasura.io/jwt/claims": {
          "x-hasura-allowed-roles": ["admin", "user"],
          "x-hasura-default-role": "user",
          "x-hasura-role": "user",
          "x-hasura-user-id": token.user_id,
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
      const encodedToken = jwt.sign(token, OAUTH_SECRET, {
        algorithm: "HS256",
      });
      // Step 4: Add token attributes to session
      session.token = encodedToken;
      session.user.user_id = token.user_id;
      session.user.name = token.name;
      session.user.email = token.email;
      session.user.image = token.image;
      session.user.content_tier = token.content_tier;

      return Promise.resolve(session);
    },
    //jwt
    async jwt(token, user, account, profile, isNewUser) {
      const isUserSignedIn = user ? true : false;

      //Step 0: Get token from provider and attach user attributes
      if (isUserSignedIn) {
        token.user_id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }

      //Step 1: Create and return user_account in DB with the populated token.
      try {
        const variables = {
          user_id: token.user_id,
          name: token.name,
          email: token.email,
          image: token.image,
        };
        const client = new GraphQLClient(HASURA_API_URL, {
          headers: {
            "x-hasura-admin-secret": HASURA_ADMIN_SECRET,
          },
        });

        const data = await client.request(INSERT_USER_ACCOUNT_ONE, variables);
        const content_tier = data.insert_user_account_one.content_tier;

        //Step 2: Populate token with user_account attributes from DB
        if (data) {
          token.content_tier = content_tier;
        }
      } catch (err) {
        console.log("NextAuth - JWT Error");
        console.log(err);
      }

      return Promise.resolve(token);
    },
  },
  events: {},
  debug: false,
});
