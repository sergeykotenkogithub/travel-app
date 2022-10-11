import React from 'react'
import styles from './BookTrip.module.scss'
import { AiOutlineArrowRight } from 'react-icons/ai'

const BookTrip = () => {

  const bookTrip = () => {
    console.log('Ok')
  }

  return (
    <button className={styles.button} onClick={bookTrip}>
      <span className={styles.text}>Book a trip</span>
      <span className={styles.icon}><AiOutlineArrowRight size={19} /></span>
    </button>
  )
}

export default BookTrip