import { useState, useContext } from "react";
import { NotificationContext } from "@/app/context/notificationContext";

export default function Notification() {

    const { displayed, setDisplayed } = useContext(NotificationContext)



    return (

        <div className={`${displayed ? 'open-notification' : 'close-notification'} bg-green-50 p-4 fixed top-0 w-[100%] z-50`}>
            <div className="flex">
                <div className="flex-shrink-0">
                    {/* <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" /> */}
                </div>
                <div className="ml-3">
                    <p className="text-sm font-medium text-green-800">Item added to basket</p>
                </div>
                <div className="ml-auto pl-3 flex items-center">
                    <div className="-mx-1.5 -my-1.5 hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setDisplayed(false)} height="1em" className="fill-green-800" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}