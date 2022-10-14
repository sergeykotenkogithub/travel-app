import { IPlace } from "@/types/place"
import { useDocumentOperation } from "@sanity/react-hooks/dist/dts"
import { useSession } from "next-auth/react"
import { queries } from "queries"
import { useEffect, useMemo, useState, useCallback } from "react"
import { sanityClient } from "../../../sanity"

export const useFavorites = (placeId: string) => {
    const { data } = useSession()
    const [favorites, setFavorites] = useState<IPlace[]>([])
    const [currentFavoriteId, setCurrentFavoriteId] = useState<string>('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        sanityClient.fetch<{ places: IPlace[], _id: string }>(queries.getFavorites(data?.user?.email))
            .then(data => {
                setFavorites(data.places)
                setCurrentFavoriteId(data._id)
            })
            .catch(e => console.log(e))
    }, [data])

    const checkFavorites = useCallback((_id: string) => favorites.some(fav => fav._id === _id), [favorites])

    const addToFavorites = useCallback(async () => {
        await sanityClient
            .patch(currentFavoriteId)
            .setIfMissing({ places: [] })
            .append('places', [
                {
                    _ref: placeId,
                    _type: "reference"
                }
            ]).commit().finally(() => setIsLoading(false))
        // ]).commit({ autoGenerateArrayKeys: true })
    }, [currentFavoriteId])

    const removeFromFavorites = useCallback(async () => {
        await sanityClient
            .delete(currentFavoriteId).finally(() => setIsLoading(false))
    }, [currentFavoriteId])

    const toggleFavorite = useCallback(async () => {
        setIsLoading(true)
        if (checkFavorites(placeId)) {
            await removeFromFavorites()
        } else {
            await addToFavorites()
        }
    }, [currentFavoriteId])


    return useMemo(() => ({
        favorites,
        checkFavorites,
        toggleFavorite,
        isLoading
    }), [favorites, checkFavorites, toggleFavorite, isLoading])
}


