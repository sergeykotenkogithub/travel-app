import { TypeComponentAuthFields } from '@/types/auth'
import { useSession } from 'next-auth/react'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { FC } from 'react'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), {
    ssr: false
})

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyUser } }) => {
    return (!isOnlyUser ?
        <>{children}</> :
        (<DynamicCheckRole Component={{ isOnlyUser }}>{children}</DynamicCheckRole>)
    )
}

export default AuthProvider