import { FC, useState } from 'react'
import cn from 'classnames'
import styles from './Filter.module.scss'
import { IPlace } from '../../../types/place'
import { TypeSetState } from '../../../types/common'

const cities = [
    {
        location: 'Paris'
    },
    {
        location: 'Bora Bora'
    },
    {
        location: 'Maui'
    },
    {
        location: 'Tahiti'
    },
    {
        location: 'Brazil'
    },
    {
        location: 'Norway'
    },
]

interface IFilters {
    setPlaces: TypeSetState<IPlace[]>
}


const Filter: FC<IFilters> = () => {
    const [filter, setFilter] = useState('')
    return (
        <div className={styles.wrapper}>
            {cities.map(city =>
                <button
                    onClick={() => setFilter(city.location)}
                    key={city.location}
                    className={cn({
                        [styles.active]: city.location === filter
                    })}
                >
                    {city.location}
                </button>
            )}
        </div>
    )
}

export default Filter