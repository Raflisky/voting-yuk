import React from "react";

interface Props {
    onChange: (value: string) => void;
    value: string;
    placeHolder: string;
    className?: string;
    type?: string;
}
const Form = (props: Props) => {
    return (
        <input
            type={props.type ? props.type : "text"}
            className={`bg-zinc-100 py-2 px-3 ${props.className}`}
            placeholder={props.placeHolder}
            onChange={(e) => props.onChange(e.target.value)}
            value={props.value}
        />
    );
};

export default Form;
