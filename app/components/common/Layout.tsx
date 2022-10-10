import { FC, ReactNode } from 'react'
import Footer from './footer/Footer'

type Props = {
    children: ReactNode;
}

const Layout: FC<Props> = props => {
    return (
        <div>
            <div>
                {props.children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout