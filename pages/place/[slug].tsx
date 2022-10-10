import { useRouter } from 'next/router'
import React from 'react'
import Layout from '../../app/components/common/Layout';

function Place() {
    const { query: { slug } } = useRouter();
    return (
        <Layout>{slug}</Layout>
    )
}

export default Place