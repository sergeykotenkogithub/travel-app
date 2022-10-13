import NextAuth, { NextAuthOptions } from 'next-auth';
import { SanityAdapter, SanityCredentials } from 'next-auth-sanity';
import { sanityClient } from '../../../app/sanity';

const options: NextAuthOptions = {
  providers: [
    // @ts-ignore
    SanityCredentials(sanityClient)
  ],
  session: {
    strategy: 'jwt'
  },
  secret: 'any-secret-word',
  // @ts-ignore
  adapter: SanityAdapter(sanityClient)
};

export default NextAuth(options);