import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'

type Props = {
    children: ReactNode;
}

const Layout: FC<Props> = props => {
    return (
        <div>
            <div style={{ maxWidth: 480, margin: '0 auto' }}>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout