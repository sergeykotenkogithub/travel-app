import { useSession } from 'next-auth/react';
import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'

type Props = {
    children: ReactNode;
    isMaxWidth?: boolean
}

const Layout: FC<Props> = ({ children, isMaxWidth = true }) => {
    return (
        <div>
            <div style={{ maxWidth: isMaxWidth ? 480 : null, margin: '0 auto' }}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout