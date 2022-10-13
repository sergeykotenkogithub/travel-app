import Link from 'next/link'
import { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import { IPlace } from '@/types/place'
import styles from './PopularPlaces.module.scss'
import 'react-loading-skeleton/dist/skeleton.css'
import { urlFor } from 'sanity'

interface IPoppularPlaces {
    places: IPlace[]
    isLoading: boolean
}

const PopularPlaces: FC<IPoppularPlaces> = ({ places, isLoading }) => {
    return (
        <div className={styles.wrapper}>
            <h2>Popular places</h2>
            {isLoading ?
                <div style={{ marginTop: '-2rem' }}>
                    <Skeleton count={1}
                        height={200}
                        borderRadius='20px'
                        baseColor='#1b1b1d'
                        highlightColor='#2c2c2e'
                    />
                </div>
                : places.length ?
                    places.map(place => (
                        <Link href={`/place/${place.slug.current}`} key={place._id}>
                            <a
                                className={styles.item}
                                style={{ backgroundImage: `url(${urlFor(place.imagePath).url()})` }}
                            >
                                <div className={styles.heading}>
                                    {`${place.location.city}, ${place.location.country}`}
                                </div>
                            </a>
                        </Link>
                    ))
                    :
                    <div className={styles.notFound}
                    >Not found</div>

            }
        </div>
    )
}

export default PopularPlaces