import { GetStaticProps, NextPage } from 'next'
import Layout from '@/common/Layout'
import { IPlace } from '@/types/place'
import HeadingSection from '@/elements/Home/HeadingSection/HeadingSection'
import Search from '@/elements/Search/Search'
import Filters from '@/elements/Filters/Filters'
import { API_URL } from '../app/constants'
import PopularPlaces from '@/elements/Home/PopularPlaces/PopularPlaces'
import { useState } from 'react'
import Meta from 'utils/Meta'
import { sanityClient } from 'sanity'

const placeQuery = `*[_type == "place" ]`

interface IHome {
  initialPlaces: IPlace[]
}

const Home: NextPage<IHome> = ({ initialPlaces }) => {

  const [places, setPlaces] = useState(initialPlaces);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Layout>
      <Meta title="Book your future trip" description='Best routes for travelling' />
      <HeadingSection />
      <div style={{ width: '80%', margin: '0 auto' }}>
        <Search
          setPlaces={setPlaces}
          initialPlaces={initialPlaces}
          setIsLoading={setIsLoading}
        />
        <Filters setPlaces={setPlaces} initialPlaces={initialPlaces} />
        <PopularPlaces places={places} isLoading={isLoading} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const result = await sanityClient.fetch(placeQuery)

  return {
    props: {
      initialPlaces: result
    }
  }
}

export default Home;