import React from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Menu from '@/components/Menu';
import KandidatItem from '@/components/KandidatItem';
import Button from '@/components/Button';
import { CountDown } from '@/components/countdown/CountDown';
import showAlert from '@/components/Alert';
import { useSession } from 'next-auth/react';
import Restricted from '@/components/page/Restricted';


const DetailParticipant = () => {
  const { data: session } = useSession()
  const router = useRouter();
  if (session) {
    return <Restricted />
  }
  const { code } = router.query;
  return (
    <div>
      <Head>
        <title>Mulai Voting</title>
      </Head>
      <Menu />
      <div className='mb-20 px-7'>
        <h1 className='text-4xl mt-10 text-center'>Judul Voting</h1>
        {/* TImer */}
        <CountDown className='mt-7' />
        {/* TImer */}

        {/* Kandidat */}
        <div className='mt-10 w-full mx-auto space-y-2'>
          <KandidatItem />
          <KandidatItem />
          <KandidatItem />
          <KandidatItem />
        </div>
        {/* Kandidat */}

        {/* submit */}
        <div className='text-center mt-7'>
          <Button text="Submit Vote" type='primary' onClick={() => showAlert({
            title: "Apakah kamu yakin?",
            message: "Budayakan Luber Jurdil ya guys",
          })} />
        </div>
        {/* submit */}
      </div>
    </div>
  )
}

export default DetailParticipant