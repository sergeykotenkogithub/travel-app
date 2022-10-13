import Layout from '@/components/common/Layout'
import PlaceItem from '@/components/elements/Home/PopularPlaces/PlaceItem'
import { IPlace } from '@/types/place'
import { FC } from 'react'
import Meta from 'utils/Meta'

export const Favorites: FC<{ places: IPlace[] }> = ({ places }) => {
    return (
        <Layout>
            <Meta title="My favorites" />
            <h1 className='h1'>Favorites</h1>
            < div style={{ width: '80%', margin: '0 auto' }}>
                {
                    places.length ?
                        places.map(place => (
                            <PlaceItem key={place._id} place={place} removeHandler={(e) => {
                                e.preventDefault();
                                alert('remove')
                            }} />
                        ))
                        :
                        <div
                            style={{
                                marginTop: "-2rem",
                                color: '#e8e8e8',
                                opacity: '.6',
                                fontStyle: 'italic'
                            }}
                        >
                            Not found
                        </div>
                }
            </div>
        </Layout>
    )
}
