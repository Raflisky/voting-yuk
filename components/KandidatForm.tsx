import React, { useEffect, useState } from "react";
import Form from "./Form";
import { XCircleIcon } from "@heroicons/react/24/solid";

interface Props {
    kandidat: Kandidat;
    submitKandidat: (kandidat: Kandidat) => void;
    removeKandidatForm: (key: number) => void;
}

const KandidatForm = (props: Props) => {
    const [kandidat, setKandidat] = useState<Kandidat>({
        key: 0,
        name: "",
        title: "",
    });

    useEffect(() => {
        setKandidat(props.kandidat);
    }, [props.kandidat])

    useEffect(() => {
        props.submitKandidat(kandidat);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [kandidat])

    return (
        <div className="flex flex-col border border-zinc-300 p-5">
            <div className="self-end">
                <XCircleIcon className="h-6 w-6 cursor-pointer hover:text-zinc-300 text-zinc-500" onClick={() => props.removeKandidatForm(kandidat.key)} />
            </div>
            <h1 className="flex w-1/2 bg-zinc-100 aspect-square text-center justify-center items-center text-4xl rounded-full self-center">
                {props.kandidat.key}
            </h1>
            <label htmlFor="" className="text-sm mt-3 mb-1">Nama Kandidat</label>
            <Form placeHolder="Masukkan nama kandidat" value={kandidat.name} onChange={(e) => setKandidat({ ...kandidat, name: e })} />
        </div>
    );
};

export default KandidatForm;
