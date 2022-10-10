import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Filter.module.scss'
import { IPlace } from '../../../types/place'
import { TypeSetState } from '../../../types/common'

const countries = [
    {
        location: 'France'
    },
    {
        location: 'Japan'
    },
    {
        location: 'Italy'
    },
    {
        location: 'Norway'
    },
    {
        location: 'Brazil'
    },
    {
        location: 'USA'
    },
]

interface IFilters {
    setPlaces: TypeSetState<IPlace[]>
    initialPlaces: IPlace[]
}


const Filter: FC<IFilters> = ({ setPlaces, initialPlaces }) => {

    const [filter, setFilter] = useState('')
    const handleFilter = (location: string) => {
        if (filter === location) {
            setPlaces(initialPlaces)
            setFilter('')
        } else {
            setPlaces(initialPlaces.filter(place => place.location.country.toLowerCase() === location.toLowerCase()))
            setFilter(location)
        }
    }

    return (
        <div className={styles.wrapper}>
            {countries.map(country =>
                <button
                    onClick={() => handleFilter(country.location)}
                    key={country.location}
                    className={cn({
                        [styles.active]: country.location === filter
                    })}
                >
                    {country.location}
                </button>
            )}
        </div>
    )
}

export default Filter