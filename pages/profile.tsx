import React from 'react'
import Layout from '@/components/common/Layout'
import { NextPageAuth } from '@/types/auth'

const Profile: NextPageAuth = () => {
    return (
        <Layout>Profile</Layout>
    )
}

Profile.isOnlyUser = true

export default Profile