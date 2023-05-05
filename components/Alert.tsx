import React from "react";
import { useState } from "react";
import Button from "@/components/Button";
import { createRoot } from "react-dom/client";

interface Props {
    isOpen?: boolean;
    title?: string;
    message?: string;

    positiveBtnText?: string;
    negativeBtnText?: string;
    onPositiveClick?: () => void;
    onNegativeClick?: () => void;
}

function Alert(props: Props) {
    const [isOpen, setIsOpen] = useState(props.isOpen);

    return (
        <div
            className={`relative z-10 ${!isOpen && "hidden"}`}
            role="dialog"
            aria-modal="true"
        >
            <div className="fixed inset-0 bg-zinc-900 bg-opacity-40 transition-opacity">
                <div className="flex min-h-full justify-center items-center text-center">
                    <div className="relative transform overflow-hidden bg-white text-left shadow-xl transition-all p-4 rounded-md">
                        {/* content */}
                        <div className="w-full p-5 text-center">
                            <p className="text-2xl font-bold">{props.title || "Title"}</p>
                            <p>{props.message || "Message Here"}</p>

                            <div className="space-x-3 mt-5">
                                <button
                                    onClick={() => {
                                        props.onNegativeClick;
                                        setIsOpen(false);
                                    }}
                                    className="text-sm bg-zinc-100 px-5 py-3 font-bold hover:bg-black hover:text-white rounded-md"
                                >
                                    {props.negativeBtnText || "Back"}
                                </button>
                                <Button
                                    type="primary"
                                    className={`${props.onPositiveClick && "hidden"}`}
                                    onClick={() => {
                                        props.onPositiveClick && props.onPositiveClick();
                                        setIsOpen(false);
                                    }}
                                    text={props.positiveBtnText || "Yes"}
                                />
                            </div>
                        </div>
                        {/* content */}
                    </div>
                </div>
            </div>
        </div>
    );
}

const showAlert = (props: Props) => {
    const alert = document.createElement("div");
    alert.id = "alert";
    document.body.appendChild(alert);
    const root = createRoot(alert);
    root.render(
        <Alert
            isOpen={true}
            title={props.title}
            message={props.message}
            positiveBtnText={props.positiveBtnText}
            negativeBtnText={props.negativeBtnText}
            onPositiveClick={props.onPositiveClick}
            onNegativeClick={props.onNegativeClick}
        />
    );
};

export default showAlert;
