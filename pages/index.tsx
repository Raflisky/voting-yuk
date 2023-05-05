import Button from '@/components/Button';
import Menu from '@/components/Menu'
import Head from 'next/head'
import Image from 'next/image';
import { LinkIcon, TrashIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Voting</title>
        <meta name="description" content="Wesbite voting No. 1 di Indonesia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='container mx-auto'>
        <Menu />
        <div className='text-center pt-20'>
          <h1 className='text-4xl font-semibold pb-5'>Ayo Mulai Voting</h1>
          <h1 className='mb-11'>Website Voting Terbaik Di Indonesia</h1>
          <Image alt="bg-header" src="/assets/bg-menu.svg" className='mx-auto' width={274} height={243} />
          <div className="flex justify-around py-16 mx-5">
            <Button type='primary' text="Buat Vote Baru" onClick={() => router.push('/vote/create')} />
            <Button type='secondary' text="Ikutan Vote" onClick={() => router.push('/participant')} />
          </div>
        </div>
        <div className='mx-7 overflow-x-auto'>
          <h4 className='py-5 text-lg font-bold '>Vote yang saya buat</h4>
          <table className='table-auto w-full border border-zinc-100'>
            <thead>
              <tr className='border-b border-zinc-100'>
                <th className='p-5 text-left border border-zinc-100'>No</th>
                <th className='p-5 text-left border border-zinc-100'>Judul</th>
                <th className='p-5 text-left border border-zinc-100'>Kandidat</th>
                <th className='p-5 text-left border border-zinc-100'>Kode</th>
                <th className='p-5 text-left border border-zinc-100'>Mulai</th>
                <th className='p-5 text-left border border-zinc-100'>Selesai</th>
                <th className='p-5 text-left border border-zinc-100'></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-5 text-left border border-zinc-100'>1</td>
                <td className='p-5 text-left border border-zinc-100'>Judul Voting</td>
                <td className='p-5 text-left border border-zinc-100'>Budi Vs Anto</td>
                <td className='p-5 text-left border border-zinc-100'>ZFIISH</td>
                <td className='p-5 pr-2 text-left border border-zinc-100'>12 Feb 2023 11:00 AM</td>
                <td className='p-5 text-left border border-zinc-100'>12 Feb 2023 11:30 AM</td>
                <td className='p-5 text-left border border-zinc-100'>
                  <div className='flex flex-col space-y-3'>
                    <Link href="#">
                      <LinkIcon className='w-5 h-5 hover:text-zinc-800' />
                    </Link>
                    <Link href="#">
                      <TrashIcon className='w-5 h-5 hover:text-zinc-800' />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  )
}
