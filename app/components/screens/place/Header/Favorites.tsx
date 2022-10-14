import React, { FC } from 'react'
import { TbHeartMinus, TbHeartPlus } from 'react-icons/tb'
import { useFavorites } from '../../favorites/useFavorites';
import styles from './Header.module.scss';

const Favorites: FC<{ _id: string }> = ({ _id }) => {
    const { checkFavorites, toggleFavorite, isLoading } = useFavorites(_id)
    return (
        <div className={styles.bookmark}>
            <button onClick={toggleFavorite} disabled={isLoading}>
                <span className={styles.buttonWrapper}>
                    {checkFavorites(_id) ? <TbHeartMinus /> : <TbHeartPlus />}
                </span>
            </button>
        </div>

    )
}

export default Favorites