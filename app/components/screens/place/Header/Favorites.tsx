import Link from 'next/link';
import React, { FC, useState } from 'react'
import { BsBookmarkHeart } from 'react-icons/bs'
import { IFav } from '../../../../types/place';
import styles from './Header.module.scss';



const data: IFav[] = [
    {
        name: 'Japan, Japan',
        slug: 'tokyo'
    },
    {
        name: 'Italy, Italy',
        slug: 'venezia'
    },
    {
        name: 'Japan, Japan',
        slug: 'tokyo'
    },
    {
        name: 'Italy, Italy',
        slug: 'venezia'
    },
]

const Favorites: FC = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.bookmark}>
            <button onClick={() => setIsOpen(!isOpen)}>
                <span className={styles.buttonWrapper}>
                    <BsBookmarkHeart size={24} color='#e8e8e8' />
                </span>
            </button>
            {
                isOpen &&
                <ul>
                    {data.map(item =>
                        <li key={item.slug}>
                            <Link href={`/place${item.slug}`}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            }
        </div>

    )
}

export default Favorites