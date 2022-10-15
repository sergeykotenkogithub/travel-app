import React, { FC } from 'react'
import { IPlace } from '@/types/place'
import Layout from '@/common/Layout'
import BookTrip from './BookTrip/BookTrip'
import Header from './Header/Header'
import Information from './Information/Information'
import Meta from 'utils/Meta'
import { urlFor } from '../../../../app/sanity'
import Image from 'next/image'
import styles from './Place.module.scss'

interface IPlacePage {
    place: IPlace
}

const Place: FC<IPlacePage> = ({ place }) => {
    return (
        <Layout isMaxWidth={false}>
            <Meta
                title={`${place.location.city} | ${place.location.country} `}
                description={`Best route for traveling - ${place.location.city}`}
                image={urlFor(place.imagePath).url()}
            />
            <div>
                <Header _id={place._id} />
                <div className={styles.image}>
                    <Image
                        src={urlFor(place.imagePath).url()}
                        width={380} height={240}
                        layout='responsive'
                        priority
                        alt='place'
                    />
                </div>
                <Information place={place} />
                <BookTrip />
            </div>
        </Layout>
    )
}

export default Place