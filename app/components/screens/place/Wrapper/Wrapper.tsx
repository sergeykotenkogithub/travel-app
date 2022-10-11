import React, { FC, ReactNode } from 'react';
import styles from './Wrapper.module.scss';

const Wrapper: FC<{ imagePath: string, children: ReactNode }> = ({ imagePath, children }) => (
  <div className={styles.wrapper} style={{ backgroundImage: `url(${imagePath})` }} >
    <div>

    </div>
    {children}
  </div >
);

export default Wrapper;
