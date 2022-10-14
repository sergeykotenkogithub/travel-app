import { Favorites } from '@/components/screens/favorites/Favorites'
import { GetStaticProps } from 'next'
import { queries } from '../app/queries'
import { sanityClient } from '../app/sanity'

const FavoritesPage = ({ places }) => {
    return <Favorites places={places} />
}

export const getStaticProps: GetStaticProps = async () => {
    const result = await sanityClient.fetch(queries.getPlaces)

    return {
        props: {
            places: result
        }
    }
}

FavoritesPage.isOnlyUser = true

export default FavoritesPage