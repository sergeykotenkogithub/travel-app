import React from 'react'
import Link from 'next/link';
import { BsChevronLeft } from 'react-icons/bs'
import styles from './Header.module.scss';

const BackButton = () => {
    return (
        <div>
            <Link href='/'>
                <a>
                    <span className={styles.buttonWrapper}>
                        <BsChevronLeft size={24} color='#e8e8e8' />
                    </span>
                </a>
            </Link>
        </div>
    )
}

export default BackButton