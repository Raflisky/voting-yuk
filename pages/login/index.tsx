import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useSession, getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from "next/image";

const Login = ({ providers }: any) => {
    const { data: session } = useSession();
    const router = useRouter();
    const googleIcon = (
        <Image src={`/assets/logo-google.png`} alt="Logo Google" className="mr-2" width={16} height={16} />
    )
    if (session) {
        router.push("/")
    }
    return (
        <div className="flex flex-col items-center justify-center container h-screen m-auto px-7">
            <Head>
                <title>Login</title>
            </Head>
            <Link href="/">
                <h1 className="font-bold text-5xl py-7">Voting Yuk!</h1>
            </Link>
            <div>
                {Object.values(providers).map((provider: any) => (
                    <button key={provider.id} className="text-xl font-semibold mb-10 flex justify-center items-center bg-white py-2 px-10 w-full border-2 border-black hover:bg-black hover:text-white rounded-md" onClick={() => signIn(provider.id)}>
                        {provider.name === "Google" && googleIcon}
                        <p className="-mt-1">Login Dengan {provider.name}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Login;

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers: providers ?? [] },
    }
}
