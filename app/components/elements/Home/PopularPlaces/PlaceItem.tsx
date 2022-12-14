import { IPlace } from '@/types/place'
import Link from 'next/link'
import React, { FC } from 'react'
import styles from './PopularPlaces.module.scss'
import { urlFor } from '../../../../sanity'
import { MouseEvent } from 'react'
import { MdDelete, MdDeleteOutline } from 'react-icons/md'

const PlaceItem: FC<{ place: IPlace, removeHandler?: (e: MouseEvent<HTMLButtonElement>) => void }> = ({ place, removeHandler }) => {
    return (
        <Link href={`/place/${place.slug.current}`} key={place._id}>
            <a
                className={styles.item}
                style={{ backgroundImage: `url(${urlFor(place.imagePath).url()})` }}
            >
                <span className={styles.heading}>
                    {`${place.location.city}, ${place.location.country}`}
                </span>
                {removeHandler && <button onClick={removeHandler}>
                    <MdDeleteOutline size={18} />
                </button>}
            </a>
        </Link>
    )
}

export default PlaceItem