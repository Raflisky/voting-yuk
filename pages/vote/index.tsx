import Restricted from '@/components/page/Restricted'
import React from 'react'
import { useSession } from 'next-auth/react';

const Vote = () => {
    const { data: session } = useSession()

    if (session) {
        return <Restricted />
    }
    return <div>Vote</div>


}

export default Vote;