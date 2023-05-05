import { CheckIcon } from '@heroicons/react/24/solid'
import React from 'react'

const KandidatItem = () => {
    return (
        <div className='flex flex-row bg-zinc-200 rounded-md shadow-md border-zinc-100 p-5 space-x-3 items-center'>
            <div className='w-20 h-20 font-bold text-lg items-center flex justify-center bg-zinc-100 text-center rounded-md'>
                1
            </div>
            <div className='w-full'>
                <h3 className='text-lg font-bold'>Nama Kandidat</h3>
                <p>Kandidat 1</p>
                <div className='flex flex-row items-center space-x-2'>
                    {/* bar */}
                    <div className='w-full h-1 bg-zinc-100 rounded-full'>
                        <div className='h-1 bg-black rounded-full w-[40%]'></div>
                    </div>
                    {/* bar */}

                    {/* indikator */}
                    <p className='text-sm font-bold'>40%</p>
                    {/* indikator */}
                </div>
            </div>
            <div className='flex w-20 h-20 items-center justify-center cursor-pointer bg-zinc-100 rounded-md'>
                <CheckIcon className='h-7 w-7' />
            </div>
        </div>
    )
}

export default KandidatItem