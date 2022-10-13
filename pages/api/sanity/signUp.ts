import { signUpHandler } from 'next-auth-sanity';
import { sanityClient } from '../../../app/sanity';
// @ts-ignore
export default signUpHandler(sanityClient);

// SANITY_API_TOKEN=skRXbJ1uRgp0Kmj2BZ9SvBgcSlhaCOuZo8Yoi4GapmX9dkbHIxmVPn7dLsiDbD7TvL3Gsxme81vjluBIg0z7pL1Xtgn6kPgwlPQ0NLfN8iRtl1EmNBHVbmwKvY6iCf2inZ28jAriERSoPlJ5pGuIJzYKmS3005AsXXKX2H8nKBnODX9rGIZl