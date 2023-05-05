import React from 'react'
import Link from 'next/link';


interface Props {
    text: string;
    type?: "primary" | "secondary";
    className?: string;
    onClick: () => void;
}
const Button = (props: Props) => {
    return (
        <button onClick={() => props.onClick()} className={`border-2 border-black px-5 py-2 hover:bg-zinc-800 rounded-lg font-semibold
        ${props.type === "secondary" && "bg-white border-2 border-black text-black hover:bg-black hover:text-white"} ${props.type === "primary" && "bg-black text-white"}
        ${props.className}
        `}>{props.text}</button>
    )
}

export default Button