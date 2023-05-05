import React from 'react'
import Button from './Button';
import { Router, useRouter } from 'next/router';
import { useSession, signIn, signOut } from 'next-auth/react'

const Menu = () => {

    const router = useRouter();
    const { data: session } = useSession()
    return (
        <div className='flex py-6 justify-between cursor-pointer px-7 items-center'>
            <div onClick={() => router.push('/')} className='font-bold text-2xl'>
                Voting Yuk!
            </div>
            <div>
                {session ? <div className='space-x-3 flex items-center'>
                    <div className='font-semibold text-sm'>{session.user?.name}</div>
                    <Button onClick={signOut} type='primary' text='Logout' />
                </div> : <Button onClick={signIn} type='primary' text='Login' />}
            </div>
        </div>
    )
}

export default Menu