import React from "react";
import Head from "next/head";
import Image from "next/image";
import Form from "@/components/Form";
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import { useState } from "react";

const Participant = () => {
    const router = useRouter();
    const [code, setCode] = useState("");
    const handleSubmit = () => {
        router.push('/participant/detailParticipant')
    }
    return (
        <div className="flex items-center flex-col justify-center h-screen container space-y-5 mx-auto px-7">
            <Head>
                <title>Ikut Partisipasi</title>
            </Head>
            <Image
                alt="Participan"
                src={`/assets/ikutan-voting.png`}
                width={200}
                height={180}
                className=""
            />

            <h1 className="font-semibold text-4xl">Ikutan Voting</h1>
            <h2 className="text-center w-11/12">
                Untuk Ikutan, kamu harus memasukkan kode voting yang sudah diberikan
                panitia/penyelenggra.
            </h2>
            <Form value={code} onChange={setCode} placeHolder="Masukkan kode voting" className="w-full mt-3" />
            <Button type="primary" onClick={handleSubmit} text="Lanjutkan" className="w-full" />
            <button className="text-sm" onClick={() => router.push('/')}>Kembali</button>
        </div>
    );
};

export default Participant;
