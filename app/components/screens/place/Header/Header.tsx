import React, { FC } from 'react';
import styles from './Header.module.scss';
import Favorites from './Favorites';
import BackButton from './BackButton'
import { useSession } from 'next-auth/react';

const Header: FC = () => {
  const { data } = useSession()
  console.log(data)
  return (
    <div className={styles.wrapper}>
      <BackButton />
      {data && <Favorites />}

    </div>
  )
};

export default Header;
