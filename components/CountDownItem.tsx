import React from 'react'
import { zeroPad } from "react-countdown"

interface ItemProps {
    value: number;
    label: string;
}

const CountDownItem = (props: ItemProps) => {
    return <div className='flex items-center'>
        <div className='flex flex-col text-center'>
            <span className='text-4xl font-bold'>{zeroPad(props.value, 2)}</span>
            <span className='font-light'>{props.label}</span>
        </div>
        {props.label !== "Detik" && <span className='mx-5 text-4xl'>:</span>}
    </div>
}
export default CountDownItem;
