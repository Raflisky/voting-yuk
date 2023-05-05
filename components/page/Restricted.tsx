import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Button from '../Button'
import { signIn } from "next-auth/react"

const Restricted = () => {
    return (
        <div className='container mx-auto flex flex-col justify-center py-20 px-7 space-y-4'>
            <Head>
                <title>Login</title>
            </Head>
            <Image src="/assets/girl.svg" width={200} height={200} alt="Restricted" className='mx-auto' />
            <h1 className='text-4xl font-semibold'>Login dulu guys!</h1>
            <p>Untuk mengakses halaman ini, kamu wajib login terlebih dahulu.</p>
            <Button type='primary' onClick={signIn} text="Login" />
        </div>
    )
}

export default Restricted