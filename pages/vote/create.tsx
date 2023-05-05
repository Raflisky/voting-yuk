import React from "react";
import Head from "next/head";
import Menu from "@/components/Menu";
import Image from "next/image";
import Form from "@/components/Form";
import ReactDatePicker from "react-datepicker";
import { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
registerLocale("id", id);
import "react-datepicker/dist/react-datepicker.css";
import KandidatForm from "@/components/KandidatForm";
import { PlusIcon } from "@heroicons/react/24/solid";
import Button from "@/components/Button";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Restricted from "./../../components/page/Restricted";
import showAlert from "@/components/Alert";
import { useRouter } from 'next/router';

const CreateVote = () => {
    const { data: session } = useSession();
    const router = useRouter();
    const [startDateTime, setStartDateTime] = useState(new Date());
    const [endDateTime, setEndDateTime] = useState(new Date());
    const [title, setTitle] = useState("");
    const [kandidatas, setKandidatas] = useState<Kandidat[]>([]);
    const [loading, setLoading] = useState(false);

    if (!session) {
        return <Restricted />;
    }
    const submitKandidat = (kandidat: Kandidat) => {
        setKandidatas(
            kandidatas.map((c) => (c.key === kandidat.key ? kandidat : c))
        );
    };

    const addKandidat = () => {
        const newKandidat: Kandidat = {
            name: "",
            key: kandidatas.length + 1,
            title: "",
        };
        setKandidatas([...kandidatas, newKandidat]);
    };

    const removeKandidatForm = (key: number) => {
        // list kandidat baru, kecuali key diatas
        const newKandidat = kandidatas.filter((kandidat) => kandidat.key !== key);

        // diurutkan ulang
        newKandidat.forEach((kandidat, index) => {
            kandidat.key = index + 1;
        });
        setKandidatas(newKandidat);
    };

    const createVotes = (e: any) => {
        e.preventDefault()
        // validasi
        if (title === "") {
            showAlert({ title: "Hmmh", message: "Judul tidak boleh kosong!!!" });
            return;
        }

        if (kandidatas.length < 2) {
            showAlert({ title: "Hmmh", message: "Minimal 2 Kandidat" });
            return;
        }
        if (startDateTime > endDateTime) {
            showAlert({
                title: "Hmmh",
                message: "Tanggal mulai tidak boleh lebih baru dari tanggal selesai!",
            });
            return;
        }

        if (kandidatas.some((c) => c.name === "")) {
            showAlert({
                title: "Hmmh",
                message: "Nama kandidat tidak boleh kosong!",
            });
            return;
        }
        setLoading(true);

        fetch("/api/vote", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                startDateTime,
                endDateTime,
                kandidatas,
                publisher: session?.user?.email,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                showAlert({ title: "Yeay!", message: "Voting berhasil dibuat" });
                router.push("/");
            }).finally(() => {
                setLoading(false);
            })
    };

    return (
        <div className="container mx-auto">
            <Head>
                <title>Voting Baru</title>
            </Head>
            <Menu />
            <div className="py-10 mx-7">
                <Image
                    src="/assets/bg-vote.svg"
                    alt="bg-vote"
                    width={284}
                    height={198}
                />
                <h1 className="text-4xl font-bold">Buat Voting Baru</h1>
                <p className="mt-3 text-zinc-700">
                    Silahkan masukkan data yang dibutuhkan sebelum membuat vote online
                </p>
                <form className="flex flex-col">
                    {/* Detail Vote Start */}
                    <div className="space-y-5">
                        <h3 className="mt-10 text-xl font-semibold">Detail Voting</h3>
                        <div className="flex flex-col">
                            <label htmlFor="judul" className="mt-5">
                                Judul
                            </label>
                            <Form
                                onChange={setTitle}
                                value={title}
                                placeHolder="Contoh : Voting Presiden"
                                className="w-full mt-1 sm:w-1/2"
                            />
                        </div>
                        <div className="flex flex-col w-full sm:w-2/3">
                            <label className="mb-1">Waktu dimulai</label>
                            <div className="inline-flex items-center">
                                <ReactDatePicker
                                    onChange={(date) => date && setStartDateTime(date)}
                                    locale={"id"}
                                    showTimeSelect
                                    selected={startDateTime}
                                    dateFormat={"Pp"}
                                    minDate={new Date()}
                                    className={`w-full bg-zinc-100 py-2  px-4`}
                                />
                                <span className="p-3 text-center">Sampai</span>
                                <ReactDatePicker
                                    onChange={(date) => date && setEndDateTime(date)}
                                    locale={"id"}
                                    showTimeSelect
                                    selected={endDateTime}
                                    dateFormat={"Pp"}
                                    minDate={new Date()}
                                    className={`w-full bg-zinc-100 py-2  px-4`}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Detail Vote End */}

                    {/* Detail Kandidat Start */}
                    <h3 className="mt-10 text-xl font-semibold">Kandidat</h3>
                    <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {kandidatas.map((kandidat: Kandidat, index) => (
                            <KandidatForm
                                key={index}
                                kandidat={kandidat}
                                submitKandidat={submitKandidat}
                                removeKandidatForm={removeKandidatForm}
                            />
                        ))}
                        <div
                            onClick={() => addKandidat()}
                            className="flex flex-col items-center justify-center w-1/4 cursor-pointer bg-zinc-300 text-zinc-500 hover:bg-black aspect-square"
                        >
                            <PlusIcon className="w-1/2 sm:w-1/3" />
                        </div>
                    </div>
                    {/* Detail Kandidat End */}
                    <div className="text-right">
                        <button className="px-5 py-2 font-semibold text-white bg-black rounded-md hover:bg-zinc-900" onClick={createVotes}>Buat Voting</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateVote;
