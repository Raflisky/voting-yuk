import React from "react";
import Countdown, { CountdownRendererFn } from "react-countdown";
import CountDownRenderer from "../CountDownRenderer";

interface Props {
    className?: string;
}

export const CountDown = (props: Props) => {
    const countDown: CountdownRendererFn = ({
        days,
        hours,
        minutes,
        seconds,
    }) => {
        return (
            <CountDownRenderer
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    };
    return (
        <div className={`text-center px-5 ${props.className}`}>
            <p>Waktu Voting :</p>
            <Countdown date={Date.now() + 10000000} renderer={countDown} />
        </div>
    );
};
